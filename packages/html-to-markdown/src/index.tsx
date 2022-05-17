import { useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton } from '@wcj/tools-react-components';
import { htmlToMarkdown } from './utils';

export default function Html2Markdown() {
  const [html, setHtml] = useState<string>();
  const [markdown, setMarkdown] = useState<string>();
  const handleInput = (value: string = '') => {
    setHtml(value);
    setMarkdown(htmlToMarkdown(value));
  };
  return (
    <Wrapper>
      <StyledLayout title="Input HTML" extra={html && <CopyButton value={html} />}>
        <Textarea
          spellCheck={false}
          value={html}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title="Result Markdown" extra={markdown && <CopyButton value={markdown} />}>
        <Textarea spellCheck={false} value={markdown} readOnly />
      </StyledLayout>
    </Wrapper>
  );
}
