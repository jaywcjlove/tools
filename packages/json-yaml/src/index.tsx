import { Fragment, useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, Button } from '@wcj/tools-react-components';
import { parse, stringify } from 'yaml';

export interface URLEncodeProps {}

const sampleJSON = `{
  "YAML": [
    "A human-readable data serialization language",
    "https://en.wikipedia.org/wiki/YAML"
  ],
  "yaml": [
    "A complete JavaScript implementation",
    "https://www.npmjs.com/package/yaml"
  ]
}`;

const sampleYAML = `%YAML 1.2
---
YAML: YAML Ain't Markup Language™

What It Is:
  YAML is a human-friendly data serialization
  language for all programming languages.`;

export default function URLEncode(props: URLEncodeProps) {
  const [value, setValue] = useState<string>();
  const [encodedUrl, setEncodeUrl] = useState<string>();
  const handleInput = (val: string = '', type: 'raw' | 'encoded') => {
    try {
      if (type === 'raw') {
        setValue(val);
        setEncodeUrl(stringify(JSON.parse(val)));
      } else if (type === 'encoded') {
        setValue(JSON.stringify(parse(val), null, 2));
        setEncodeUrl(val);
      }
    } catch (error) {}
  };
  return (
    <Wrapper>
      <StyledLayout
        title="JSON"
        extra={
          <Fragment>
            {value && <CopyButton value={value} />}
            <Button onClick={() => handleInput(sampleJSON, 'raw')}>Sample</Button>
          </Fragment>
        }
      >
        <Textarea
          spellCheck={false}
          value={value}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value, 'raw')}
        />
      </StyledLayout>
      <StyledLayout
        title={'YAML'}
        extra={
          <Fragment>
            {encodedUrl && <CopyButton value={encodedUrl} />}
            <Button onClick={() => handleInput(sampleYAML, 'encoded')}>Sample</Button>
          </Fragment>
        }
      >
        <Textarea
          spellCheck={false}
          value={encodedUrl}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value, 'encoded')}
        />
      </StyledLayout>
    </Wrapper>
  );
}
