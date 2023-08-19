import { Fragment, useRef, useState } from 'react';
import {
  StyledLayout,
  CopyButton,
  ResultCode,
  ResultProps,
  Spacing,
  Select,
  CodeEditor,
  Button,
  Wrapper,
  CheckboxOption,
  CheckboxOptionProps,
  ErrorLayout,
  Divider,
} from '@wcj/tools-react-components';
import { javascript } from '@codemirror/lang-javascript';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { obfuscate, ObfuscatorOptions } from 'javascript-obfuscator';
import * as sample from './sample';
import { allOptions, defaultOption, highOption, mediumOption, lowOption } from './options';
import * as conf from './options';

const Info = styled.span`
  color: var(--color-fg-subtle);
`;

export default function JSObfuscator() {
  const [options, setOptions] = useState<ObfuscatorOptions>(allOptions);
  const { t } = useTranslation(['js-obfuscator', 'common']);
  const editor = useRef<ReactCodeMirrorRef>(null);
  const [type, setType] = useState<'raw' | 'obfuscator'>('raw');
  const [preset, setPreset] = useState<keyof typeof conf>('allOptions');
  const [value, setValue] = useState(sample.val || '');
  const [valueObfuscate, setValueObfuscate] = useState('');
  const [error, setError] = useState('');
  function handleObfuscate() {
    if (type === 'raw') {
      const val = obfuscate(value, options);
      setValueObfuscate(val.getObfuscatedCode());
    } else {
    }
    setType(type === 'raw' ? 'obfuscator' : 'raw');
  }
  const codeSource = type === 'raw' ? value : valueObfuscate;
  const resultProps: ResultProps['codeProps'] = {
    style: { height: 'calc(100vh - 87px)', overflow: 'auto', margin: 0 },
  };
  const resetHandle = () => optionsHandle('allOptions');
  const optionsHandle = (key: keyof typeof conf) => {
    setPreset(key);
    if (conf[key]) {
      setOptions({ ...conf[key] });
    }
  };
  const presetData: CheckboxOptionProps[] = [
    {
      type: 'radio',
      name: 'options',
      checked: preset === 'highOption',
      children: (
        <Fragment>
          {t('highOption')} <Info>{t('highOptionDes')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        optionsHandle('highOption');
      },
    },
    {
      type: 'radio',
      name: 'options',
      checked: preset === 'mediumOption',
      children: (
        <Fragment>
          {t('mediumOption')} <Info>{t('mediumOptionDes')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        optionsHandle('mediumOption');
      },
    },
    {
      type: 'radio',
      name: 'options',
      checked: preset === 'lowOption',
      children: (
        <Fragment>
          {t('lowOption')} <Info>{t('lowOptionDes')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        optionsHandle('lowOption');
      },
    },
    {
      type: 'radio',
      name: 'options',
      checked: preset === 'defaultOption',
      children: <Fragment>{t('defaultOption')}</Fragment>,
      onChange: ({ target }) => {
        optionsHandle('defaultOption');
      },
    },
    {
      type: 'radio',
      name: 'options',
      checked: preset === 'allOptions',
      children: <Fragment>{t('allOptions')}</Fragment>,
      onChange: resetHandle,
    },
  ];
  const optionsElement = [
    {
      checked: !!options.compact,
      children: (
        <Fragment>
          compact <Info>{t('compact')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ compact: target.checked } });
      },
    },
    {
      checked: !!options.controlFlowFlattening,
      children: (
        <Fragment>
          controlFlowFlattening <br />
          <Info>{t('controlFlowFlattening')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ controlFlowFlattening: target.checked } });
      },
    },
    {
      disabled: !options.controlFlowFlattening,
      type: 'range',
      max: '1',
      min: '0',
      step: '0.01',
      value: options.controlFlowFlatteningThreshold,
      children: (
        <Fragment>
          {options.controlFlowFlatteningThreshold} <br />
          controlFlowFlatteningThreshold <br />
          <Info>{t('controlFlowFlatteningThreshold')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ controlFlowFlatteningThreshold: Number(target.value) } });
      },
    },
    {
      checked: !!options.deadCodeInjection,
      children: (
        <Fragment>
          deadCodeInjection <Info>{t('deadCodeInjection')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ deadCodeInjection: target.checked } });
      },
    },
    {
      type: 'range',
      max: '1',
      min: '0',
      step: '0.1',
      disabled: !options.deadCodeInjection,
      value: options.deadCodeInjectionThreshold,
      children: (
        <Fragment>
          {options.deadCodeInjectionThreshold} <br />
          deadCodeInjectionThreshold
          <Info>{t('deadCodeInjectionThreshold')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ deadCodeInjectionThreshold: Number(target.value) } });
      },
    },
    {
      checked: !!options.debugProtection,
      children: (
        <Fragment>
          debugProtection <Info>{t('debugProtection')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ debugProtection: target.checked } });
      },
    },
    {
      type: 'range',
      max: '4000',
      min: '0',
      step: '1',
      disabled: !options.debugProtection,
      value: options.debugProtectionInterval,
      children: (
        <Fragment>
          {options.debugProtectionInterval} <br /> debugProtectionInterval <Info>{t('debugProtectionInterval')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ debugProtectionInterval: Number(target.value) } });
      },
    },
    {
      checked: !!options.disableConsoleOutput,
      children: (
        <Fragment>
          disableConsoleOutput <Info>{t('disableConsoleOutput')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ disableConsoleOutput: target.checked } });
      },
    },
    {
      value: options.target,
      options: [`browser`, `browser-no-eval`, `node`],
      children: (
        <Fragment>
          target <Info>{t('target')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ target: target.value as ObfuscatorOptions['target'] } });
      },
    },
    {
      value: options.identifierNamesGenerator,
      options: ['dictionary', 'hexadecimal', 'mangled', 'mangled-shuffled'],
      children: (
        <Fragment>
          identifierNamesGenerator <br />
          <Info>{t('identifierNamesGenerator')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({
          ...options,
          ...{ identifierNamesGenerator: target.value as ObfuscatorOptions['identifierNamesGenerator'] },
        });
      },
    },
    {
      type: 'text',
      value: options.identifiersPrefix,
      children: (
        <Fragment>
          identifiersPrefix <br />
          <Info>{t('identifiersPrefix')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ identifiersPrefix: target.value } });
      },
    },
    {
      checked: !!options.ignoreImports,
      children: (
        <Fragment>
          ignoreImports <Info>{t('ignoreImports')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ ignoreImports: target.checked } });
      },
    },
    {
      type: 'text',
      value: options.inputFileName,
      children: (
        <Fragment>
          inputFileName <Info>{t('inputFileName')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ inputFileName: target.value } });
      },
    },
    {
      checked: !!options.log,
      children: (
        <Fragment>
          log <Info>{t('log')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ log: target.checked } });
      },
    },
    {
      checked: !!options.numbersToExpressions,
      children: (
        <Fragment>
          numbersToExpressions <Info>{t('numbersToExpressions')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ numbersToExpressions: target.checked } });
      },
    },
    {
      value: options.optionsPreset,
      options: ['default', 'low-obfuscation', 'medium-obfuscation', 'high-obfuscation'],
      children: (
        <Fragment>
          optionsPreset <Info>{t('optionsPreset')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        const val = target.value as ObfuscatorOptions['optionsPreset'];
        switch (val) {
          case 'default':
            optionsHandle('defaultOption');
            break;
          case 'high-obfuscation':
            optionsHandle('highOption');
            break;
          case 'low-obfuscation':
            optionsHandle('lowOption');
            break;
          case 'medium-obfuscation':
            optionsHandle('mediumOption');
            break;
          default:
            optionsHandle('allOptions');
            break;
        }
        setOptions({ ...options, ...{ optionsPreset: val } });
      },
    },
    {
      checked: !!options.renameGlobals,
      children: (
        <Fragment>
          renameGlobals <Info>{t('renameGlobals')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ renameGlobals: target.checked } });
      },
    },
    {
      type: 'number',
      value: options.seed,
      children: (
        <Fragment>
          seed <br />
          <Info>{t('seed')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ seed: Number(target.value) } });
      },
    },
    {
      checked: !!options.selfDefending,
      children: (
        <Fragment>
          selfDefending <Info>{t('selfDefending')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ selfDefending: target.checked } });
      },
    },
    {
      checked: !!options.simplify,
      children: (
        <Fragment>
          simplify <Info>{t('simplify')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ simplify: target.checked } });
      },
    },
    {
      checked: !!options.sourceMap,
      children: (
        <Fragment>
          sourceMap <Info>{t('sourceMap')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ sourceMap: target.checked } });
      },
    },
    {
      type: 'text',
      value: options.sourceMapBaseUrl,
      children: (
        <Fragment>
          sourceMapBaseUrl <br />
          <Info>{t('sourceMapBaseUrl')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ sourceMapBaseUrl: target.value } });
      },
    },
    {
      checked: !!options.transformObjectKeys,
      children: (
        <Fragment>
          transformObjectKeys <Info>{t('transformObjectKeys')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ transformObjectKeys: target.checked } });
      },
    },
    {
      checked: !!options.unicodeEscapeSequence,
      children: (
        <Fragment>
          unicodeEscapeSequence <Info>{t('unicodeEscapeSequence')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ unicodeEscapeSequence: target.checked } });
      },
    },
    {
      checked: !!options.splitStrings,
      children: (
        <Fragment>
          splitStrings <Info>{t('splitStrings')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ splitStrings: target.checked } });
      },
    },
    {
      type: 'number',
      disabled: !options.splitStrings,
      value: options.splitStringsChunkLength,
      children: (
        <Fragment>
          splitStringsChunkLength <br />
          <Info>{t('splitStringsChunkLength')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ splitStringsChunkLength: Number(target.value) } });
      },
    },
    {
      checked: !!options.stringArray,
      children: (
        <Fragment>
          stringArray <Info>{t('stringArray')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ stringArray: target.checked } });
      },
    },
    {
      disabled: !options.stringArray,
      checked: !!options.stringArrayCallsTransform,
      children: (
        <Fragment>
          stringArrayCallsTransform <br />
          <Info>{t('stringArrayCallsTransform')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ stringArrayCallsTransform: target.checked } });
      },
    },
    {
      disabled: !options.stringArray,
      checked: !!options.stringArrayIndexShift,
      children: (
        <Fragment>
          stringArrayIndexShift <br />
          <Info>{t('stringArrayIndexShift')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ stringArrayIndexShift: target.checked } });
      },
    },
    {
      disabled: !options.stringArray,
      checked: !!options.stringArrayRotate,
      children: (
        <Fragment>
          stringArrayRotate <br />
          <Info>{t('stringArrayRotate')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ stringArrayRotate: target.checked } });
      },
    },
    {
      disabled: !options.stringArray,
      checked: !!options.stringArrayShuffle,
      children: (
        <Fragment>
          stringArrayShuffle <br />
          <Info>{t('stringArrayShuffle')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ stringArrayShuffle: target.checked } });
      },
    },
    {
      disabled: !options.stringArray || !options.stringArrayWrappersCount,
      checked: !!options.stringArrayWrappersChainedCalls,
      children: (
        <Fragment>
          stringArrayWrappersChainedCalls <br />
          <Info>{t('stringArrayWrappersChainedCalls')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ stringArrayWrappersChainedCalls: target.checked } });
      },
    },
    {
      disabled: !options.stringArray,
      type: 'number',
      value: options.stringArrayWrappersCount,
      children: (
        <Fragment>
          stringArrayWrappersCount <br />
          <Info>{t('stringArrayWrappersCount')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ stringArrayWrappersCount: target.checked } });
      },
    },
    {
      type: 'range',
      max: '5',
      min: '2',
      step: '1',
      disabled: !options.stringArray,
      value: options.stringArrayWrappersParametersMaxCount,
      children: (
        <Fragment>
          {options.stringArrayWrappersParametersMaxCount} <br />
          stringArrayWrappersParametersMaxCount <br />
          <Info>{t('stringArrayWrappersParametersMaxCount')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ stringArrayWrappersParametersMaxCount: Number(target.value) } });
      },
    },
    {
      type: 'range',
      max: '1',
      min: '0',
      step: '0.1',
      disabled: !options.stringArray,
      value: options.stringArrayThreshold,
      children: (
        <Fragment>
          {options.stringArrayThreshold} <br />
          stringArrayThreshold <br />
          <Info>{t('stringArrayThreshold')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ stringArrayThreshold: Number(target.value) } });
      },
    },
    {
      type: 'range',
      max: '1',
      min: '0',
      step: '0.1',
      disabled: !options.stringArray,
      value: options.stringArrayCallsTransformThreshold,
      children: (
        <Fragment>
          {options.stringArrayCallsTransformThreshold} <br />
          stringArrayCallsTransformThreshold
          <Info>{t('stringArrayCallsTransformThreshold')}</Info>
        </Fragment>
      ),
      onChange: ({ target }) => {
        setOptions({ ...options, ...{ stringArrayCallsTransformThreshold: Number(target.value) } });
      },
    },
  ];
  return (
    <Wrapper>
      <StyledLayout
        title="JavaScript Obfuscator"
        extra={
          <Fragment>
            <Button onClick={() => handleObfuscate()}>{type === 'raw' ? t('Obfuscator') : t('Raw Code')}</Button>
            {codeSource && <CopyButton value={codeSource} />}
            <Button
              onClick={() => {
                editor.current?.view?.focus();
                setValue(sample.val);
                setType('raw');
              }}
            >
              {t('Sample', { ns: 'common' })}
            </Button>
          </Fragment>
        }
      >
        <CodeEditor
          value={codeSource}
          ref={editor}
          height="calc(100vh - 87px)"
          extensions={[javascript()]}
          onChange={(value) => {
            type === 'raw' ? setValue(value) : setValueObfuscate(value);
          }}
        />
      </StyledLayout>
      <StyledLayout
        title={t('Options', { ns: 'common' })}
        style={{ maxWidth: 420 }}
        extra={
          <Fragment>
            <Button onClick={resetHandle}>{t('Reset', { ns: 'common' })}</Button>
          </Fragment>
        }
      >
        <ResultCode codeProps={resultProps}>
          <Spacing style={{ paddingTop: 10 }}>
            {presetData.map((item, idx) => {
              return <CheckboxOption key={idx} {...item} />;
            })}
            <Divider />
            <Spacing>👆👆👆以上是预设的默认配置👆👆👆</Spacing>
            {optionsElement.map((item, idx) => {
              if (/(range|text|number)/.test(item.type || '') && item.value === undefined) {
                return <Fragment key={idx} />;
              }
              if (item.options && Array.isArray(item.options)) {
                return (
                  <Fragment key={idx}>
                    <Divider />
                    <Select {...item} />
                  </Fragment>
                );
              }
              return (
                <Fragment key={idx}>
                  <Divider />
                  <CheckboxOption {...item} />
                </Fragment>
              );
            })}
          </Spacing>
        </ResultCode>
      </StyledLayout>
      {error && <ErrorLayout>{error}</ErrorLayout>}
    </Wrapper>
  );
}
