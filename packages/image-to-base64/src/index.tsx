import { useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton } from '@wcj/tools-react-components';
import styled, { createGlobalStyle } from 'styled-components';

export interface ResultProps {
  title?: string;
  className?: string;
}

const GlobalStyle = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] body {
    --color-border-text-case: #30363d;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] body {
    --color-border-text-case: #d0d7de;
  }
`;

const Image = styled.img`
  max-width: 100%;
  padding-top: 16px;
`;

const InputFile = styled.input`
  width: 100%;
  display: block;
`;

export default function ImageToBase64() {
  const [result, setResult] = useState('');
  const handleChange = (evn: React.ChangeEvent<HTMLInputElement>) => {
    const files = (evn.target as HTMLInputElement).files || [];
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setResult(reader.result.toString());
        }
      };
      reader.onerror = (err) => {
        alert(err);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Wrapper>
      <GlobalStyle />
      <StyledLayout title="Image">
        <InputFile type="file" accept="image/*" onChange={handleChange} />
        {result && <Image src={result} />}
      </StyledLayout>
      <StyledLayout title="Result" extra={result && <CopyButton value={result} />}>
        <Textarea defaultValue={result} readOnly />
      </StyledLayout>
    </Wrapper>
  );
}
