import { Fragment, useState } from 'react';
import { Wrapper, StyledLayout, CopyButton, Button, CodeEditor } from '@wcj/tools-react-components';
import { html } from '@codemirror/lang-html';

const sample = `<div>Hello World!</div>`;
const sampleEscape = `&lt;div&gt;Goodbye World!&lt;/div&gt;`;

function unescapeHandle(str: string = '') {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#x60;/g, '`')
    .replace(/\`/g, '&#x60;');
}

function escapeHandle(str: string = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\`/g, '&#x60;');
}

export default function HTMLEscape() {
  const [value, setValue] = useState<string>();
  const [escape, setEscape] = useState<string>();
  const [type, setType] = useState<'raw' | 'escape'>('raw');
  const handleInput = (value: string = '') => {
    if (type === 'raw') {
      setValue(value);
      setEscape(escapeHandle(value));
    } else if (type === 'escape') {
      setValue(unescapeHandle(value));
      setEscape(value);
    }
  };
  return (
    <Wrapper>
      <StyledLayout
        title="HTML Unescape"
        extra={
          <Fragment>
            {value && <CopyButton value={value} />}
            <Button
              onClick={() => {
                setValue(sample);
                setEscape(escapeHandle(sample));
              }}
            >
              Sample
            </Button>
          </Fragment>
        }
      >
        <CodeEditor
          spellCheck={false}
          value={value}
          height="calc(100vh - 87px)"
          placeholder="Example: `<div>`"
          onFocus={() => setType('raw')}
          extensions={[html()]}
          onChange={(val) => {
            if (type === 'raw') {
              handleInput(val);
            }
          }}
        />
      </StyledLayout>
      <StyledLayout
        title="HTML Escape"
        extra={
          <Fragment>
            <Button
              onClick={() => {
                setValue(unescapeHandle(sampleEscape));
                setEscape(sampleEscape);
              }}
            >
              Sample
            </Button>
            {escape && <CopyButton value={escape} />}
          </Fragment>
        }
      >
        <CodeEditor
          spellCheck={false}
          value={escape}
          height="calc(100vh - 87px)"
          placeholder="Output: `&lt&#59;div&gt&#59;`"
          onFocus={() => setType('escape')}
          extensions={[html()]}
          onChange={(val) => {
            if (type === 'escape') {
              handleInput(val);
            }
          }}
        />
      </StyledLayout>
    </Wrapper>
  );
}
