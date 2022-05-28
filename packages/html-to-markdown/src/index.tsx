import { useState, Fragment } from 'react';
import { Wrapper, StyledLayout, CopyButton, Button, CodeEditor } from '@wcj/tools-react-components';
import { markdown as markdownLang } from '@codemirror/lang-markdown';
import { html as htmlLang } from '@codemirror/lang-html';
import { htmlToMarkdown } from './utils';

const sample = `<h2>Web tool</h2>
<p>Hello World</p>
<pre><code class="language-css">body { color: 'red'; }
</code></pre>
`;

export default function Html2Markdown() {
  const [html, setHtml] = useState<string>();
  const [markdown, setMarkdown] = useState<string>();
  const handleInput = (value: string = '') => {
    setHtml(value);
    setMarkdown(htmlToMarkdown(value));
  };
  return (
    <Wrapper>
      <StyledLayout
        title="Input HTML"
        // overflow="hidden"
        extra={
          <Fragment>
            {html && <CopyButton value={html} />}
            <Button onClick={() => handleInput(sample)}>Sample</Button>
          </Fragment>
        }
      >
        <CodeEditor
          spellCheck={false}
          value={html}
          height="calc(100vh - 87px)"
          extensions={[htmlLang()]}
          onChange={(val) => handleInput(val)}
        />
      </StyledLayout>
      <StyledLayout title="Result Markdown" extra={markdown && <CopyButton value={markdown} />}>
        <CodeEditor
          height="calc(100vh - 87px)"
          extensions={[markdownLang()]}
          spellCheck={false}
          value={markdown}
          readOnly
        />
      </StyledLayout>
    </Wrapper>
  );
}
