import { useState, PropsWithChildren } from "react";
import { Wrapper, Textarea, StyledLayout } from "@wcj/tools-react-components";
import styled, { createGlobalStyle } from "styled-components";
import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toTitleCase,
  toPathCase,
  swapCase,
} from "./utils";

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

const Code = styled.pre`
  border-color: var(--color-border-text-case);
  border-width: 1px;
  border-style: solid;
  padding: 15px;
  border-radius: 6px;
  font-size: 14px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
`;

export const Result: React.FC<PropsWithChildren<ResultProps>> = (props) => (
  <div className={props.className}>
    <div>{props.title}</div>
    <Code>{props.children}</Code>
  </div>
);

function handle(fun: (val?: string) => string | undefined, value: string = "") {
  return value
    .split("\n")
    .filter(Boolean)
    .map((str) => fun(str))
    .join("\n");
}

export default function TextCase() {
  const [value, setValue] = useState<string>();
  return (
    <Wrapper>
      <GlobalStyle />
      <StyledLayout title="Input">
        <Textarea
          spellCheck={false}
          value={value}
          onInput={(evn) => setValue((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title="Result">
        <div style={{ height: "100%" }}>
          <Result title="Camel Case">{handle(toCamelCase, value)}</Result>
          <Result title="Pascal Case">{handle(toPascalCase, value)}</Result>
          <Result title="Snake Case">{handle(toSnakeCase, value)}</Result>
          <Result title="Kebab Case">{handle(toKebabCase, value)}</Result>
          <Result title="Title Case">{handle(toTitleCase, value)}</Result>
          <Result title="Swap Case">{handle(swapCase, value)}</Result>
          <Result title="Path Case">{handle(toPathCase, value)}</Result>
        </div>
      </StyledLayout>
    </Wrapper>
  );
}
