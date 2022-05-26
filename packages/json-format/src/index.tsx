import { Fragment, useRef, useState } from 'react';
import { StyledLayout, CopyButton, CodeEditor, Button, Wrapper, ErrorLayout } from '@wcj/tools-react-components';
import { json } from '@codemirror/lang-json';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';
import * as sample from './sample';

export default function JSONFormat() {
  const editor = useRef<ReactCodeMirrorRef>(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [tabWidth, setTabWidth] = useState(2);
  const handleFormat = () => {
    try {
      setError('');
      setValue(prettier.format(value, { parser: 'json', tabWidth: tabWidth, printWidth: 30, plugins: [parserBabel] }));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  return (
    <Wrapper>
      <StyledLayout
        title={'Input'}
        extra={
          <Fragment>
            {value && <Button onClick={() => handleFormat()}>Format</Button>}
            {value && (
              <select onChange={(evn) => setTabWidth(Number(evn.target.value))}>
                <option value={2}>2 Tab Space</option>
                <option value={3}>3 Tab Space</option>
                <option value={4}>4 Tab Space</option>
                <option value={5}>5 Tab Space</option>
              </select>
            )}
            {value && <CopyButton value={value} />}
            {sample.json && (
              <Button
                onClick={() => {
                  editor.current?.view?.focus();
                  setValue(sample.json);
                }}
              >
                Sample
              </Button>
            )}
          </Fragment>
        }
      >
        <CodeEditor
          value={value}
          ref={editor}
          height="calc(100vh - 87px)"
          extensions={[json()]}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </StyledLayout>
      {error && <ErrorLayout>{error}</ErrorLayout>}
    </Wrapper>
  );
}
