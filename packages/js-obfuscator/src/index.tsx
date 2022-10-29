import { Fragment, useRef, useState } from 'react';
import {
  StyledLayout,
  CopyButton,
  ResultCode,
  ResultProps,
  Spacing,
  CodeEditor,
  Button,
  Wrapper,
  CheckboxOption,
  ErrorLayout,
  Divider,
} from '@wcj/tools-react-components';
import { javascript } from '@codemirror/lang-javascript';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { obfuscate } from 'javascript-obfuscator';
import * as sample from './sample';
import { allOptions, defaultOption, highOption, mediumOption, lowOption } from './options';

const Info = styled.span`
  color: var(--color-fg-subtle);
`;

export default function JSObfuscator() {
  const [options, setOptions] = useState<any>(allOptions);
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
  const resultProps: ResultProps['codeProps'] = {
    style: { height: 'calc(100vh - 87px)', overflow: 'auto', margin: 0 },
  };
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
            <Button onClick={() => setOptions(allOptions)}>{t<string>('Reset', { ns: 'common' })}</Button>
            <Button onClick={() => setOptions({})}>{t<string>('None', { ns: 'common' })}</Button>
          </Fragment>
        }
      >
        <ResultCode codeProps={resultProps}>
          <Spacing style={{ paddingTop: 10 }}>
            <CheckboxOption
              type="radio"
              name="options"
              value="highOption"
              onChange={({ target }) => {
                setOptions({ ...highOption });
              }}
            >
              {t<string>('highOption')} <Info>{t<string>('highOptionDes')}</Info>
            </CheckboxOption>
            <CheckboxOption
              type="radio"
              name="options"
              value="mediumOption"
              onChange={({ target }) => {
                setOptions({ ...mediumOption });
              }}
            >
              {t<string>('mediumOption')} <Info>{t<string>('mediumOptionDes')}</Info>
            </CheckboxOption>
            <CheckboxOption
              type="radio"
              name="options"
              value="lowOption"
              onChange={({ target }) => {
                setOptions({ ...lowOption });
              }}
            >
              {t<string>('lowOption')} <Info>{t<string>('lowOptionDes')}</Info>
            </CheckboxOption>
            <CheckboxOption
              type="radio"
              name="options"
              value="defaultOption"
              onChange={({ target }) => {
                setOptions({ ...defaultOption });
              }}
            >
              {t<string>('defaultOption')}
            </CheckboxOption>
            <CheckboxOption
              type="radio"
              name="options"
              value="allOptions"
              defaultChecked
              onChange={({ target }) => {
                setOptions({ ...allOptions });
              }}
            >
              {t<string>('allOptions')}
            </CheckboxOption>
            <Divider />
            <Spacing>👆👆👆以上是预设的默认配置👆👆👆</Spacing>
            <Divider />
            <CheckboxOption
              checked={!!options.compact}
              onChange={({ target }) => {
                setOptions({ ...options, ...{ compact: target.checked } });
              }}
            >
              {t<string>('compact')} <Info>{t<string>('Compact code output on one line.')}</Info>
            </CheckboxOption>
            <Divider />
            <CheckboxOption
              checked={!!options.controlFlowFlattening}
              onChange={({ target }) => {
                setOptions({ ...options, ...{ controlFlowFlattening: target.checked } });
              }}
            >
              controlFlowFlattening <Info>{t<string>('controlFlowFlattening')}</Info>
            </CheckboxOption>
            <Divider />
            <CheckboxOption
              disabled={!options.controlFlowFlattening}
              type="range"
              max="1"
              min="0"
              step="0.01"
              value={options.controlFlowFlatteningThreshold}
              onChange={({ target }) => {
                setOptions({ ...options, ...{ controlFlowFlatteningThreshold: Number(target.value) } });
              }}
            >
              {options.controlFlowFlatteningThreshold}
              <br />
              controlFlowFlatteningThreshold <Info>{t<string>('controlFlowFlatteningThreshold')}</Info>
            </CheckboxOption>
            <Divider />
            <CheckboxOption
              checked={!!options.deadCodeInjection}
              onChange={({ target }) => {
                setOptions({ ...options, ...{ deadCodeInjection: target.checked } });
              }}
            >
              deadCodeInjection <Info>{t<string>('deadCodeInjection')}</Info>
            </CheckboxOption>
            <Divider />
            <CheckboxOption
              type="range"
              max="1"
              min="0"
              step="0.1"
              disabled={!options.deadCodeInjection}
              value={options.deadCodeInjectionThreshold}
              onChange={({ target }) => {
                setOptions({ ...options, ...{ deadCodeInjectionThreshold: Number(target.value) } });
              }}
            >
              {options.deadCodeInjectionThreshold}
              <br />
              deadCodeInjectionThreshold <Info>{t<string>('deadCodeInjectionThreshold')}</Info>
            </CheckboxOption>
            <Divider />
            <CheckboxOption
              checked={!!options.debugProtection}
              onChange={({ target }) => {
                setOptions({ ...options, ...{ debugProtection: target.checked } });
              }}
            >
              debugProtection <Info>{t<string>('debugProtection')}</Info>
            </CheckboxOption>
            <Divider />
            <CheckboxOption
              type="range"
              max="4000"
              min="0"
              step="1"
              disabled={!options.debugProtection}
              value={options.debugProtectionInterval}
              onChange={({ target }) => {
                setOptions({ ...options, ...{ debugProtectionInterval: Number(target.value) } });
              }}
            >
              {options.debugProtectionInterval}
              <br />
              debugProtectionInterval <Info>{t<string>('debugProtectionInterval')}</Info>
            </CheckboxOption>
            <Divider />
            <CheckboxOption
              checked={!!options.disableConsoleOutput}
              onChange={({ target }) => {
                setOptions({ ...options, ...{ disableConsoleOutput: target.checked } });
              }}
            >
              disableConsoleOutput <Info>{t<string>('disableConsoleOutput')}</Info>
            </CheckboxOption>
          </Spacing>
        </ResultCode>
      </StyledLayout>
      {error && <ErrorLayout>{error}</ErrorLayout>}
    </Wrapper>
  );
}
