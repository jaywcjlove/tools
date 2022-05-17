import { useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton } from '@wcj/tools-react-components';

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
      <StyledLayout title="HTML Unescape" extra={value && <CopyButton value={value} />}>
        <Textarea
          spellCheck={false}
          value={value}
          placeholder="Example: `<div>`"
          onFocus={() => setType('raw')}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title="HTML Escape" extra={escape && <CopyButton value={escape} />}>
        <Textarea
          spellCheck={false}
          value={escape}
          placeholder="Output: `&lt&#59;div&gt&#59;`"
          onFocus={() => setType('escape')}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
    </Wrapper>
  );
}
