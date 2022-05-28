import { Fragment, useRef, useState } from 'react';
import { StyledLayout, CopyButton, CodeEditor, Button, Wrapper, ErrorLayout } from '@wcj/tools-react-components';
import { css } from '@codemirror/lang-css';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import prettier from 'prettier';
import parserPostcss from 'prettier/parser-postcss';
import * as sample from './sample';

export default function CSSFormatter() {
  const editor = useRef<ReactCodeMirrorRef>(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [tabWidth, setTabWidth] = useState(2);
  const handleFormat = () => {
    try {
      setError('');
      setValue(
        prettier.format(value, { parser: 'css', tabWidth: tabWidth, printWidth: 120, plugins: [parserPostcss] }),
      );
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  const handleMinify = () => {
    try {
      setError('');
      const val = prettier.format(value, {
        parser: 'css',
        tabWidth: 0,
        useTabs: false,
        printWidth: 0,
        plugins: [parserPostcss],
      });
      setValue((val || '').replace(/\n/g, ''));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  return (
    <Wrapper>
      <StyledLayout
        title="CSS Formatter/Minify"
        extra={
          <Fragment>
            {value && <Button onClick={() => handleFormat()}>Format</Button>}
            {value && <Button onClick={() => handleMinify()}>Minify</Button>}
            {value && (
              <select onChange={(evn) => setTabWidth(Number(evn.target.value))}>
                <option value={2}>2 Tab Space</option>
                <option value={3}>3 Tab Space</option>
                <option value={4}>4 Tab Space</option>
                <option value={5}>5 Tab Space</option>
              </select>
            )}
            {value && <CopyButton value={value} />}
            {sample.css && (
              <Button
                onClick={() => {
                  editor.current?.view?.focus();
                  setValue(sample.css);
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
          extensions={[css()]}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </StyledLayout>
      {error && <ErrorLayout>{error}</ErrorLayout>}
    </Wrapper>
  );
}
