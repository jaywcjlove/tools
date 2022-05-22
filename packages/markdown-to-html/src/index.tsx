import { Fragment, useCallback, useState } from 'react';
import { Wrapper, StyledLayout, CopyButton, Button, CodeEditor } from '@wcj/tools-react-components';
import { markdownToHTML } from './utils';
import { markdown as markdownLang } from '@codemirror/lang-markdown';
import { html as htmlLang } from '@codemirror/lang-html';

const sample = `## Web tool\n\nHello World

\`\`\`css
body {
  color: 'red';
}
\`\`\``;

export default function MarkdownToHTML() {
  const [html, setHtml] = useState<string>();
  const [markdown, setMarkdown] = useState<string>();
  const handleInput = (value: string = '') => {
    setHtml(value);
    setMarkdown(value);
    setHtml(markdownToHTML(value));
  };

  const ExtraTool = useCallback(
    () => (
      <Fragment>
        <Button onClick={() => handleInput(sample)}>Sample</Button>
        {markdown && <CopyButton value={markdown} />}
      </Fragment>
    ),
    [markdown],
  );

  return (
    <Wrapper>
      <StyledLayout title="Input Markdown" extra={<ExtraTool />}>
        <CodeEditor
          spellCheck={false}
          value={markdown}
          height="calc(100vh - 87px)"
          style={{ flex: 1 }}
          extensions={[markdownLang()]}
          onChange={(value) => handleInput(value)}
        />
      </StyledLayout>
      <StyledLayout title="Result HTML" extra={html && <CopyButton value={html} />}>
        <CodeEditor extensions={[htmlLang()]} height="calc(100vh - 87px)" spellCheck={false} value={html} readOnly />
      </StyledLayout>
    </Wrapper>
  );
}
