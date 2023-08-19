import { useEffect, useState, Fragment } from 'react';
import { Wrapper, StyledLayout, CopyButton, ResultCode, Spacing, Button } from '@wcj/tools-react-components';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Plugin } from 'svgo/dist/svgo.browser';
import { gzip } from 'pako';
import { Settings, compress, Dimensions } from './compress';
import { fileReader, prettyBytes, round } from './utils';

export interface ResultProps {
  title?: string;
  className?: string;
}

const Info = styled.span`
  color: var(--color-fg-subtle);
`;

const Iframe = styled.iframe`
  border: none;
  overflow: hidden;
  pointer-events: none;
  max-width: 100%;
`;

const InputFile = styled.input`
  width: 100%;
  display: block;
`;

const PrettyBytesInfo = styled.div`
  background-color: var(--color-neutral-muted);
  padding: 10px;
  margin-bottom: 60px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Percen = styled.span<{ num: number }>`
  font-weight: bold;
  ${(props) => {
    if (props.num > 100 || props.num === 0) {
      return css`
        color: red;
      `;
    }
    if (props.num < 100) {
      return css`
        color: green;
      `;
    }
    return css``;
  }}
`;

const defaultOptions: Settings = {
  multipass: true,
  pretty: true,
  floatPrecision: 8,
  plugins: [
    'mergeStyles',
    'cleanupAttrs',
    'inlineStyles',
    'minifyStyles',
    'cleanupIDs',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeViewBox',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'convertPathData',
    'convertEllipseToCircle',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'mergePaths',
    'removeUnusedNS',
    'sortDefsChildren',
    'removeTitle',
    'removeDesc',
  ],
};

interface CheckboxProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
const Checkbox: React.FC<React.PropsWithChildren<CheckboxProps>> = ({ children, ...other }) => {
  return (
    <label>
      <span>
        <input type="checkbox" {...other} />
        {children}
      </span>
    </label>
  );
};

const includesPlugin = (name: Plugin, plugins: Plugin[] = []) => plugins.includes(name);

interface ImageData {
  raw?: string;
  base64?: string;
  tiny?: string;
  error?: string;
  name?: string;
  dimensions?: Dimensions;
}

export default function SVGOptimizer() {
  const { t } = useTranslation(['svg-optimizer', 'common']);
  const [options, setOptions] = useState<Settings>(defaultOptions);
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const handleChange = async (evn: React.ChangeEvent<HTMLInputElement>) => {
    const files = (evn.target as HTMLInputElement).files || [];
    const data = await Promise.all(
      Array.from(files).map(async (file) => {
        console.log(file);
        const base64 = await fileReader(file, 'base64');
        const raw = await fileReader(file, 'text');
        const d = compress(raw || '', options);
        return { base64, raw, name: file.name, dimensions: d.dimensions, tiny: d.data };
      }),
    );
    setImageData(data);
  };
  const settingPlugin = (name: Plugin, checked: boolean): Settings => {
    const plugins: Plugin[] = [...(options.plugins || [])];
    if (checked) {
      if (!plugins.includes(name)) {
        plugins.push(name);
      }
    } else {
      plugins.splice(plugins.indexOf(name), 1);
    }
    return { ...options, plugins };
  };

  useEffect(() => {
    if (options) {
      const data: ImageData[] = [];
      imageData.forEach((item) => {
        const d = compress(item.raw || '', options);
        data.push({ ...item, dimensions: d.dimensions, tiny: d.data, error: d.error });
      });
      setImageData(data);
    }
  }, [options]);

  const opts: { plugin: Plugin; label: string; content: string }[] = [
    { plugin: 'removeDoctype', label: 'Remove doctype', content: t('remove doctype declaration') },
    { plugin: 'removeXMLProcInst', label: 'Remove XML ProcInst', content: t('remove XML processing instructions') },
    { plugin: 'removeComments', label: 'Remove Comments', content: t('remove comments') },
    { plugin: 'removeMetadata', label: 'Remove <metadata>', content: t('remove <metadata>') },
    { plugin: 'removeXMLNS', label: 'Remove xmlns', content: t('removes the xmlns attribute (for inline SVG)') },
    {
      plugin: 'removeEditorsNSData',
      label: 'Remove Editors Data',
      content: t('remove editors namespaces, elements, and attributes'),
    },
    {
      plugin: 'cleanupAttrs',
      label: 'Cleanup attribute whitespace',
      content: t('cleanup attributes from newlines, trailing, and repeating spaces'),
    },
    { plugin: 'mergeStyles', label: 'Merge Styles', content: t('merge multiple style elements into one') },
    {
      plugin: 'inlineStyles',
      label: 'Inline Styles',
      content: t('move and merge styles from <style> elements to element style attributes'),
    },
    { plugin: 'minifyStyles', label: 'Minify Styles', content: t('minify <style> elements content with CSSO') },
    {
      plugin: 'convertStyleToAttrs',
      label: t('Style to attributes'),
      content: t('convert styles into attributes'),
    },
    {
      plugin: 'cleanupIDs',
      label: t('Clean IDs'),
      content: t('remove unused and minify used IDs'),
    },
    {
      plugin: 'removeRasterImages',
      label: t('Remove raster images'),
      content: t('remove raster images'),
    },
    {
      plugin: 'removeUselessDefs',
      label: t('Remove unused defs'),
      content: t('remove elements of <defs> without id'),
    },
    {
      plugin: 'cleanupNumericValues',
      label: t('Round/rewrite numbers'),
      content: t('round numeric values to the fixed precision, remove default px units'),
    },
    {
      plugin: 'cleanupListOfValues',
      label: t('Round/rewrite number lists'),
      content: t('round numeric values in attributes that take a list of numbers (like viewBox or enable-background)'),
    },
    {
      plugin: 'convertColors',
      label: t('Minify colours'),
      content: t('convert colors (from rgb() to #rrggbb, from #rrggbb to #rgb)'),
    },
    {
      plugin: 'removeUnknownsAndDefaults',
      label: t('Remove unknowns & defaults'),
      content: t('remove unknown elements content and attributes, remove attributes with default values'),
    },
    {
      plugin: 'removeNonInheritableGroupAttrs',
      label: t('Remove unneeded group attrs'),
      content: t(`remove non-inheritable group's "presentation" attributes`),
    },
    {
      plugin: 'removeUselessStrokeAndFill',
      label: t('Remove useless stroke & fill'),
      content: t(`remove useless stroke and fill attributes`),
    },
    {
      plugin: 'removeViewBox',
      label: t('Remove viewBox'),
      content: t(`remove viewBox attribute when possible`),
    },
    {
      plugin: 'cleanupEnableBackground',
      label: t('Remove/tidy enable-background'),
      content: t(`remove or cleanup enable-background attribute when possible`),
    },
    {
      plugin: 'removeHiddenElems',
      label: t('Remove hidden elements'),
      content: t(`remove hidden elements`),
    },
    { plugin: 'removeEmptyText', label: 'Remove empty text', content: t('remove empty Text elements') },
    {
      plugin: 'convertShapeToPath',
      label: 'Shapes to (smaller) paths',
      content: t('convert some basic shapes to <path>'),
    },
    {
      plugin: 'moveElemsAttrsToGroup',
      label: 'Move attrs to parent group',
      content: t(`move elements' attributes to their enclosing group`),
    },
    {
      plugin: 'moveGroupAttrsToElems',
      label: 'Move group attrs to elements',
      content: t('move some group attributes to the contained elements'),
    },
    { plugin: 'collapseGroups', label: 'Collapse useless groups', content: t('collapse useless groups') },
    {
      plugin: 'convertPathData',
      label: 'Round/rewrite paths',
      content: t(
        'convert Path data to relative or absolute (whichever is shorter), convert one segment to another, trim useless delimiters, smart rounding, and much more',
      ),
    },
    {
      plugin: 'convertEllipseToCircle',
      label: 'Convert non-eccentric <ellipse> to <circle>',
      content: t('convert non-eccentric <ellipse> to <circle>'),
    },
    {
      plugin: 'convertTransform',
      label: 'Round/rewrite transforms',
      content: t('collapse multiple transforms into one, convert matrices to the short aliases, and much more'),
    },
    { plugin: 'removeEmptyAttrs', label: 'Remove empty attrs', content: t('remove empty attributes') },
    {
      plugin: 'removeEmptyContainers',
      label: 'Remove empty containers',
      content: t('remove empty Container elements'),
    },
    { plugin: 'mergePaths', label: 'Merge paths', content: t('merge multiple Paths into one') },
    { plugin: 'removeUnusedNS', label: 'Remove unused namespaces', content: t('remove unused namespaces declaration') },
    {
      plugin: 'reusePaths',
      label: 'Replace duplicate elements with links',
      content: t('Find duplicated elements and replace them with links'),
    },
    { plugin: 'sortAttrs', label: 'Sort attrs', content: t('sort element attributes for epic readability') },
    {
      plugin: 'sortDefsChildren',
      label: 'Sort children of <defs>',
      content: t('sort children of <defs> in order to improve compression'),
    },
    { plugin: 'removeTitle', label: 'Remove <title>', content: t('remove <title>') },
    { plugin: 'removeDesc', label: 'Remove <desc>', content: t('remove <desc>') },
    {
      plugin: 'removeDimensions',
      label: 'Prefer viewBox to width/height',
      content: t(`remove width/height and add viewBox if it's missing (opposite to removeViewBox, disable it first)`),
    },
    { plugin: 'removeStyleElement', label: 'Remove style elements', content: t('remove <style> elements') },
    { plugin: 'removeScriptElement', label: 'Remove script elements', content: t('remove <script> elements') },
  ];

  return (
    <Wrapper>
      <StyledLayout
        title={t(`SVG Optimizer`).toString()}
        extra={<InputFile type="file" accept="image/svg+xml" multiple onChange={handleChange} />}
      >
        <ResultCode
          codeProps={{
            style: {
              height: 'calc(100vh - 87px)',
              overflow: 'auto',
              margin: 0,
              backgroundSize: '16px 16px',
              backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"%3E%3Cpath d="M1 2V0h1v1H0v1z" fill-opacity=".05"/%3E%3C/svg%3E')`,
            },
          }}
        >
          {imageData &&
            imageData.length > 0 &&
            imageData.map((item, key) => {
              const rawLength = item.raw ? gzip(item.raw).buffer.byteLength : 0;
              const tinyLength = item.tiny ? gzip(item.tiny).buffer.byteLength : 0;
              const percen = round((tinyLength / rawLength) * 100, 2);
              return (
                <div key={key}>
                  {item.tiny && item.dimensions && (
                    <Iframe
                      sandbox="allow-scripts"
                      scrolling="no"
                      src={`data:image/svg+xml,${encodeURIComponent(item.tiny)}`}
                      width={item.dimensions.width}
                      height={item.dimensions.height}
                    />
                  )}
                  {item.error && (
                    <div key={key} style={{ color: 'red' }}>
                      {item.error}
                    </div>
                  )}
                  <PrettyBytesInfo>
                    <img src={item.base64} height={23} />
                    <span>
                      {prettyBytes(rawLength, 2, false)} → {prettyBytes(tinyLength, 2, false)}
                    </span>
                    <Percen num={percen}>{percen}%</Percen>
                    <CopyButton value={item.tiny || ''} />
                    <a href={`data:image/svg+xml,${item.tiny}`} download={item.name}>
                      download <b>{item.name}</b>
                    </a>
                  </PrettyBytesInfo>
                </div>
              );
            })}
        </ResultCode>
      </StyledLayout>
      {imageData && imageData.length > 0 && (
        <StyledLayout
          title={t(`Options`, { ns: 'common' }).toString()}
          style={{ maxWidth: 420 }}
          extra={
            <Fragment>
              <Button onClick={() => setOptions(defaultOptions)}>Reset</Button>
            </Fragment>
          }
        >
          <ResultCode codeProps={{ style: { height: 'calc(100vh - 87px)', overflow: 'auto', margin: 0 } }}>
            <Spacing>
              <Checkbox
                checked={!!options.pretty}
                onChange={({ target }) => setOptions({ ...options, pretty: target.checked })}
              >
                Prettify markup <Info>{t('Prettify markup')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!options.multipass}
                onChange={({ target }) => setOptions({ ...options, multipass: target.checked })}
              >
                {t('multipass')}{' '}
                <Info>{t('Pass over SVGs multiple times to ensure all optimizations are applied')}</Info>
              </Checkbox>
              <Checkbox
                type="range"
                max="8"
                min="0"
                step="1"
                value={options.floatPrecision}
                onChange={({ target }) => setOptions({ ...options, floatPrecision: Number(target.value) })}
              >
                {options.floatPrecision} {t('Precision')}{' '}
                <Info>
                  {t('Precision of floating point numbers. Will be passed to each plugin that suppors this param.')}
                </Info>
              </Checkbox>
              {opts.map((item, key) => {
                return (
                  <Checkbox
                    key={key}
                    checked={includesPlugin(item.plugin, options.plugins)}
                    onChange={({ target }) => setOptions(settingPlugin(item.plugin, target.checked))}
                  >
                    {t(item.label)} <Info>{t(item.content)}</Info>
                  </Checkbox>
                );
              })}
            </Spacing>
          </ResultCode>
        </StyledLayout>
      )}
    </Wrapper>
  );
}
