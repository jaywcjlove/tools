import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import jwtdecode from 'jwt-decode';
import {
  Wrapper,
  Textarea,
  StyledLayout,
  CopyButton,
  CodeLineCopy,
  Button,
  Spacing,
} from '@wcj/tools-react-components';
import MarkdownPreview from '@uiw/react-markdown-preview';

const help = `JWT Decoder is a free online developer tool to decode a JSON Web Token (JWT) instantly to view the claims inside, such as the algorithm used to sign it and the attached data.

Enter a JSON Web Token you would like to decode in the input field and then click the decode button. The result will be split into \`header\` and \`payload\` in the JSON format accordingly.

The header consists of the algorithm used to encode the signature, such as \`HS256\` which means the token uses \`HMAC-SHA256\` to generate the signature and the token type; for instance [\`JWT\`](https://jwt.io/).

The payload contains a set of claims as known as data in a token. One of the standard claims is \`iat\` which stands for Issued At. It's a UNIX timestamp referring to the creation date and time of the token.

Once a JSON Web Token is decoded, you can copy the result to your clipboard using the copy button.`;

const SubTitle = styled.span`
  font-size: 12px;
  font-weight: normal;
`;

export interface JWTDecoderProps {}

const sample = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo`;

function strToJson(str: string, pretty = false) {
  return JSON.stringify(JSON.parse(str), null, pretty ? 2 : 0);
}

function base64url(str: string) {
  return window.btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

export default function JWTDecoder(props: JWTDecoderProps) {
  const [value, setValue] = useState<string>('');
  const [payload, setPayload] = useState<string>('{}');
  const [signature, setSignature] = useState<string>('');
  const [header, setHeader] = useState<string>('{}');
  const [decodeError, setDecodeError] = useState('');
  const [encodeError, setEncodeError] = useState('');
  const [typeError, setTypeError] = useState<'header' | 'payload'>();
  const handleDecodeInput = () => {
    try {
      if (value) {
        const decoded = jwtdecode(value);
        setPayload(JSON.stringify(decoded, null, 2));
        const headerStr = jwtdecode(value, { header: true });
        setHeader(JSON.stringify(headerStr, null, 2));
        const [_, __, str] = value.split('.');
        setSignature(str || '');
      } else {
        setPayload('{}');
        setHeader('{}');
        setSignature('');
      }
      setDecodeError('');
    } catch (error) {
      if (error instanceof Error) {
        setDecodeError(error.message);
      }
    }
  };

  useEffect(() => {
    handleDecodeInput();
  }, [value]);

  const updateInput = () => {
    try {
      const token = `${base64url(strToJson(header))}.${base64url(strToJson(payload))}.${signature}`;
      setEncodeError('');
      setValue(token);
    } catch (error) {
      if (error instanceof Error) {
        setEncodeError(error.message);
      }
    }
  };

  useEffect(() => {
    updateInput();
  }, [header, payload, signature]);
  return (
    <Wrapper>
      <StyledLayout
        title="JWT"
        style={{
          position: 'sticky',
          top: 24,
          maxHeight: 360,
        }}
        extra={
          <Fragment>
            {value && <CopyButton value={value} />}
            <Button onClick={() => setValue(sample)}>Sample</Button>
          </Fragment>
        }
      >
        <Textarea
          spellCheck={false}
          error={!!decodeError}
          value={value}
          onInput={(evn) => {
            setValue((evn.target as HTMLTextAreaElement).value);
          }}
        />
      </StyledLayout>
      <StyledLayout title="Decoded">
        <Spacing>
          <CodeLineCopy
            title={
              <Fragment>
                Header: <SubTitle>ALGORITHM & TOKEN TYPE</SubTitle>
              </Fragment>
            }
            copyBtn={false}
            copyText={header}
          >
            <Spacing>
              <MarkdownPreview style={{ display: 'block' }} source={`\`\`\`json\n${header}\n\`\`\``} />
              <Textarea
                onFocus={() => setTypeError('header')}
                onBlur={() => setTypeError(undefined)}
                error={!!encodeError && typeError === 'header'}
                value={header}
                spellCheck={false}
                style={{ minHeight: 120 }}
                onChange={(evn) => setHeader(evn.target.value)}
              />
            </Spacing>
          </CodeLineCopy>
          <CodeLineCopy
            title={
              <Fragment>
                Payload: <SubTitle>DATA</SubTitle>
              </Fragment>
            }
            copyBtn={false}
            copyText={payload}
          >
            <Spacing>
              <MarkdownPreview style={{ display: 'block' }} source={`\`\`\`json\n${payload}\n\`\`\``} />
              <Textarea
                onFocus={() => setTypeError('payload')}
                onBlur={() => setTypeError(undefined)}
                error={!!encodeError && typeError === 'payload'}
                value={payload}
                spellCheck={false}
                style={{ minHeight: 120 }}
                onChange={(evn) => setPayload(evn.target.value)}
              />
            </Spacing>
          </CodeLineCopy>
          <CodeLineCopy title={<Fragment>Signature:</Fragment>} copyBtn={false} copyText={payload}>
            <Spacing>
              <Textarea value={signature} onChange={(evn) => setSignature(evn.target.value)} />
            </Spacing>
          </CodeLineCopy>
          <CodeLineCopy title="Help:" copyBtn={false}>
            <MarkdownPreview source={help} />
          </CodeLineCopy>
        </Spacing>
      </StyledLayout>
    </Wrapper>
  );
}
