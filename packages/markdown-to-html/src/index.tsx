import { Fragment, useCallback, useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, Button } from '@wcj/tools-react-components';
import { markdownToHTML } from './utils';

const sample = `## Web tool\n\nHello World

\`\`\`css
body { color: 'red'; }
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
        <Textarea
          spellCheck={false}
          value={markdown}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title="Result HTML" extra={html && <CopyButton value={html} />}>
        <Textarea spellCheck={false} value={html} readOnly />
      </StyledLayout>
    </Wrapper>
  );
}
