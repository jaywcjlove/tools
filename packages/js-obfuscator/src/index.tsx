import { Fragment, useRef, useState } from 'react';
import {
  StyledLayout,
  CopyButton,
  ResultCode,
  Spacing,
  CodeEditor,
  Button,
  Wrapper,
  CheckboxOption,
  ErrorLayout,
} from '@wcj/tools-react-components';
import { javascript } from '@codemirror/lang-javascript';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { obfuscate, ObfuscatorOptions } from 'javascript-obfuscator';
import * as sample from './sample';

const Info = styled.span`
  color: var(--color-fg-subtle);
`;

const defaultOptions: ObfuscatorOptions = {
  compact: true,
  // compact: boolean;
  // controlFlowFlattening: boolean;
  // controlFlowFlatteningThreshold: number;
  // deadCodeInjection: boolean;
  // deadCodeInjectionThreshold: number;
  // debugProtection: boolean;
  // debugProtectionInterval: number;
  // disableConsoleOutput: boolean;
  // domainLock: string[];
  // domainLockRedirectUrl: string;
  // forceTransformStrings: string[];
  // identifierNamesCache: TIdentifierNamesCache;
  // identifierNamesGenerator: TTypeFromEnum<typeof IdentifierNamesGenerator>;
  // identifiersDictionary: string[];
  // identifiersPrefix: string;
  // ignoreImports: boolean;
  // inputFileName: string;
  // log: boolean;
  // numbersToExpressions: boolean;
  // optionsPreset: TOptionsPreset;
  // renameGlobals: boolean;
  // renameProperties: boolean;
  // renamePropertiesMode: TRenamePropertiesMode;
  // reservedNames: string[];
  // reservedStrings: string[];
  // seed: string | number;
  // selfDefending: boolean;
  // simplify: boolean;
  // sourceMap: boolean;
  // sourceMapBaseUrl: string;
  // sourceMapFileName: string;
  // sourceMapMode: TTypeFromEnum<typeof SourceMapMode>;
  // sourceMapSourcesMode: TTypeFromEnum<typeof SourceMapSourcesMode>;
  // splitStrings: boolean;
  // splitStringsChunkLength: number;
  // stringArray: boolean;
  // stringArrayCallsTransform: boolean;
  // stringArrayCallsTransformThreshold: number;
  // stringArrayEncoding: TStringArrayEncoding[];
  // stringArrayIndexesType: TStringArrayIndexesType[];
  // stringArrayIndexShift: boolean;
  // stringArrayRotate: boolean;
  // stringArrayShuffle: boolean;
  // stringArrayWrappersChainedCalls: boolean;
  // stringArrayWrappersCount: number;
  // stringArrayWrappersParametersMaxCount: number;
  // stringArrayWrappersType: TStringArrayWrappersType;
  // stringArrayThreshold: number;
  // target: TTypeFromEnum<typeof ObfuscationTarget>;
  // transformObjectKeys: boolean;
  // unicodeEscapeSequence: boolean;
};

export default function JSObfuscator() {
  const [options, setOptions] = useState<any>(defaultOptions);
  const { t } = useTranslation(['js-obfuscator', 'common']);
  const editor = useRef<ReactCodeMirrorRef>(null);
  const [type, setType] = useState<'raw' | 'obfuscator'>('raw');
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
  return (
    <Wrapper>
      <StyledLayout
        title="JavaScript Obfuscator"
        extra={
          <Fragment>
            <Button onClick={() => handleObfuscate()}>
              {type === 'raw' ? t<string>('Obfuscator') : t<string>('Raw Code')}
            </Button>
            {codeSource && <CopyButton value={codeSource} />}
            <Button
              onClick={() => {
                editor.current?.view?.focus();
                setValue(sample.val);
                setType('raw');
              }}
            >
              {t<string>('Sample', { ns: 'common' })}
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
        title={t<string>('Options', { ns: 'common' })}
        style={{ maxWidth: 420 }}
        extra={
          <Fragment>
            <Button onClick={() => setOptions(defaultOptions)}>Reset</Button>
            <Button onClick={() => setOptions({})}>None</Button>
          </Fragment>
        }
      >
        <ResultCode codeProps={{ style: { height: 'calc(100vh - 87px)', overflow: 'auto', margin: 0 } }}>
          <Spacing>
            <CheckboxOption
              checked={!!options.compact}
              onChange={({ target }) => {
                setOptions({ ...options, ...{ compact: target.checked } });
              }}
            >
              {t<string>('compact')} <Info>{t<string>('Compact code output on one line.')}</Info>
            </CheckboxOption>
          </Spacing>
        </ResultCode>
      </StyledLayout>
      {error && <ErrorLayout>{error}</ErrorLayout>}
    </Wrapper>
  );
}
