import { useState, Fragment } from 'react';
import { Wrapper, StyledLayout, CopyButton, CodeEditor, Button, ErrorLayout } from '@wcj/tools-react-components';
import styled, { createGlobalStyle } from 'styled-components';
import { json } from '@codemirror/lang-json';

const sample = `{"name": "@wcj/tools-react-components", "version": "1.0.1", "main": "./cjs/index.js", "module": "./esm/index.js", "scripts": {"build": "tsbb build", "watch": "tsbb watch"}, "keywords": [], "files": ["cjs", "esm", "src"], "author": "Kenny Wong <wowohoo@qq.com>", "license": "MIT", "dependencies": {"@uiw/react-codemirror": "^4.7.0", "@uiw/copy-to-clipboard": "^1.0.12", "styled-components": "^5.3.5"}, "devDependencies": {"@types/styled-components": "^5.1.25"}, "peerDependencies": {"react": ">=16.14.0", "react-dom": ">=16.14.0"} }`;

export interface ResultProps {
  title?: string;
  className?: string;
}

const GlobalStyle = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] body {
    --color-border-text-case: #30363d;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] body {
    --color-border-text-case: #d0d7de;
  }
`;

const Image = styled.img`
  max-width: 100%;
  padding-top: 16px;
`;

const InputFile = styled.input`
  width: 100%;
  display: block;
`;

export default function ImageToBase64() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const handleChange = (str: string) => {
    if (str) {
      try {
        setValue(str);
        const obj = JSON.parse(str);
        setResult(JSON.stringify(obj, null, 3));
        setError('');
      } catch (error) {
        let message = 'Unknown Error';
        if (error instanceof Error) message = error.message;
        setError(message);
      }
    }
  };
  const resultOrError = error || result;
  return (
    <Fragment>
      <Wrapper>
        <GlobalStyle />
        <StyledLayout
          title="Input JSON String"
          extra={
            <Fragment>
              {value && <CopyButton value={value} />}
              <Button
                onClick={() => {
                  setValue(sample);
                  handleChange(sample);
                }}
              >
                Sample
              </Button>
            </Fragment>
          }
        >
          <CodeEditor
            value={value}
            height="calc(100vh - 87px)"
            spellCheck={false}
            extensions={[json()]}
            onChange={handleChange}
          />
        </StyledLayout>
        <StyledLayout title="Result" extra={resultOrError && <CopyButton value={resultOrError} />}>
          <CodeEditor value={result} height="calc(100vh - 87px)" extensions={[json()]} readOnly />
        </StyledLayout>
      </Wrapper>
      <ErrorLayout>{error}</ErrorLayout>
    </Fragment>
  );
}
