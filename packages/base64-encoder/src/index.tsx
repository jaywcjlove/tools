import { useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton } from '@wcj/tools-react-components';

export default function Base64Encoder() {
  const [url, setUrl] = useState<string>();
  const [encodedUrl, setEncodeUrl] = useState<string>();
  const [type, setType] = useState<'raw' | 'encoded'>('raw');
  const handleInput = (value: string = '') => {
    if (type === 'raw') {
      setUrl(value);
      setEncodeUrl(window.btoa(value));
    } else if (type === 'encoded') {
      setUrl(window.atob(value));
      setEncodeUrl(value);
    }
  };
  return (
    <Wrapper>
      <StyledLayout title="Input" extra={url && <CopyButton value={url} />}>
        <Textarea
          spellCheck={false}
          value={url}
          onFocus={() => setType('raw')}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title="Output" extra={encodedUrl && <CopyButton value={encodedUrl} />}>
        <Textarea
          spellCheck={false}
          value={encodedUrl}
          onFocus={() => setType('encoded')}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
    </Wrapper>
  );
}
