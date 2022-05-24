import { useState, Fragment } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, Button } from '@wcj/tools-react-components';

const sample = `https://jaywcjlove.github.io/tools`;

export interface URLEncodeProps {
  locEncodedURL?: string;
}

export default function URLEncode(props: URLEncodeProps) {
  const { locEncodedURL } = props;
  const [url, setUrl] = useState<string>();
  const [encodedUrl, setEncodeUrl] = useState<string>();
  const [type, setType] = useState<'raw' | 'encoded'>('raw');
  const handleInput = (value: string = '') => {
    if (type === 'raw') {
      setUrl(value);
      setEncodeUrl(encodeURIComponent(value));
    } else if (type === 'encoded') {
      setUrl(decodeURIComponent(value));
      setEncodeUrl(value);
    }
  };
  return (
    <Wrapper>
      <StyledLayout
        title="URL"
        extra={
          <Fragment>
            {url && <CopyButton value={url} />}
            <Button
              onClick={() => {
                setUrl(sample);
                handleInput(sample);
              }}
            >
              Sample
            </Button>
          </Fragment>
        }
      >
        <Textarea
          spellCheck={false}
          value={url}
          onFocus={() => setType('raw')}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title={locEncodedURL || 'Encoded URL'} extra={encodedUrl && <CopyButton value={encodedUrl} />}>
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
