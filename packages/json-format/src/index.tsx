import { useState } from "react";
import { Wrapper, Textarea, StyledLayout } from "@wcj/tools-react-components";
import styled, { createGlobalStyle } from "styled-components";

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
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const handleChange = (evn: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = (evn.target as HTMLTextAreaElement).value || "";
    if (value) {
      try {
        const obj = JSON.parse(value);
        setResult(JSON.stringify(obj, null, 3));
        setError("");
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        setError(message);
      }
    }
  };
  return (
    <Wrapper>
      <GlobalStyle />
      <StyledLayout title="Input JSON String">
        <Textarea spellCheck={false} onChange={handleChange} />
      </StyledLayout>
      <StyledLayout title="Result">
        <Textarea
          style={error ? { color: "red" } : {}}
          defaultValue={error || result}
          readOnly
        />
      </StyledLayout>
    </Wrapper>
  );
}
