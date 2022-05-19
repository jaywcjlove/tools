import { useState, Fragment, useEffect } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, Button } from '@wcj/tools-react-components';
import TOML from 'toml';

const sample = `# This is a TOML document.

title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00 # First class dates

[database]
server = "192.168.1.1"
ports = [ 8000, 8001, 8002 ]
connection_max = 5000
enabled = true

[servers]

  # Indentation (tabs and/or spaces) is allowed but not required
  [servers.alpha]
  ip = "10.0.0.1"
  dc = "eqdc10"

  [servers.beta]
  ip = "10.0.0.2"
  dc = "eqdc10"

[clients]
data = [ ["gamma", "delta"], [1, 2] ]

# Line breaks are OK when inside arrays
hosts = [
  "alpha",
  "omega"
]`;

export interface TOMLToJSONProps {}
export default function TOMLToJSON(props: TOMLToJSONProps) {
  const [value, setValue] = useState<string>();
  const [error, setError] = useState<string>();
  const [json, setJson] = useState<string>();
  useEffect(() => {
    try {
      const toml = TOML.parse(value || '');
      setError('');
      setJson(JSON.stringify(toml, null, 2));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  }, [value]);
  return (
    <Wrapper>
      <StyledLayout
        title="TOML"
        extra={
          <Fragment>
            {value && <CopyButton value={value} />}
            <Button onClick={() => setValue(sample)}>Sample</Button>
          </Fragment>
        }
      >
        <Textarea
          spellCheck={false}
          value={value}
          onInput={(evn) => setValue((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title={'Result JSON'} extra={json && <CopyButton value={json} />}>
        <Textarea spellCheck={false} readOnly error={!!error} value={error || json} />
      </StyledLayout>
    </Wrapper>
  );
}
