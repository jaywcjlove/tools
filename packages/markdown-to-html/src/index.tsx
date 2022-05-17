import { Fragment, useCallback, useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton } from '@wcj/tools-react-components';
import { markdownToHTML } from './utils';

export default function MarkdownToHTML() {
  const [html, setHtml] = useState<string>();
  const [markdown, setMarkdown] = useState<string>();
  const handleInput = (value: string = '') => {
    setHtml(value);
    setMarkdown(value);
    setHtml(markdownToHTML(value));
  };

  const ExtraTool = useCallback(() => <Fragment>{markdown && <CopyButton value={markdown} />}</Fragment>, [markdown]);

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
