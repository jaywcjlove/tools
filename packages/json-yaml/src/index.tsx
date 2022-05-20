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
  const [yamlStr, setYamlStr] = useState<string>();
  const [errorStr, setErrorStr] = useState<string>();
  const [etype, setEtype] = useState<'raw' | 'yaml'>();
  const handleInput = (val: string = '', type: 'raw' | 'yaml') => {
    try {
      if (type === 'raw') {
        setEtype('raw');
        setValue(val);
        setYamlStr(stringify(JSON.parse(val)));
      } else if (type === 'yaml') {
        setEtype('yaml');
        setYamlStr(val);
        setValue(JSON.stringify(parse(val), null, 2));
      }
      setErrorStr('');
    } catch (error) {
      if (error instanceof Error) {
        setErrorStr(error.message);
      }
    }
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
          error={!!errorStr && etype === 'raw'}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value, 'raw')}
        />
      </StyledLayout>
      <StyledLayout
        title={'YAML'}
        extra={
          <Fragment>
            {yamlStr && <CopyButton value={yamlStr} />}
            <Button onClick={() => handleInput(sampleYAML, 'yaml')}>Sample</Button>
          </Fragment>
        }
      >
        <Textarea
          spellCheck={false}
          value={yamlStr}
          error={!!errorStr && etype === 'yaml'}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value, 'yaml')}
        />
      </StyledLayout>
    </Wrapper>
  );
}
