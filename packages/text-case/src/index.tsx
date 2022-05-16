import { useState, PropsWithChildren } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton } from '@wcj/tools-react-components';
import styled, { createGlobalStyle } from 'styled-components';
import { toCamelCase, toPascalCase, toSnakeCase, toKebabCase, toTitleCase, toPathCase, swapCase } from './utils';

export interface ResultProps {
  title?: string;
  className?: string;
  extra?: React.ReactNode;
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
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Result: React.FC<PropsWithChildren<ResultProps>> = (props) => (
  <div className={props.className}>
    <Title>
      <span>{props.title}</span>
      {props.extra}
    </Title>
    <Code>{props.children}</Code>
  </div>
);

function handle(fun: (val?: string) => string | undefined, value: string = '') {
  return value
    .split('\n')
    .filter(Boolean)
    .map((str) => fun(str))
    .join('\n');
}

export default function TextCase() {
  const [value, setValue] = useState<string>();
  const camelCase = handle(toCamelCase, value);
  const pascalCase = handle(toPascalCase, value);
  const snakeCase = handle(toSnakeCase, value);
  const kebabCase = handle(toKebabCase, value);
  const titleCase = handle(toTitleCase, value);
  const swapCaseStr = handle(swapCase, value);
  const pathCase = handle(toPathCase, value);
  return (
    <Wrapper>
      <GlobalStyle />
      <StyledLayout title="Input" extra={<CopyButton value={value} />}>
        <Textarea
          spellCheck={false}
          value={value}
          onInput={(evn) => setValue((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title="Result">
        <div style={{ height: '100%' }}>
          <Result title="Camel Case" extra={<CopyButton value={camelCase} />}>
            {camelCase}
          </Result>
          <Result title="Pascal Case" extra={<CopyButton value={pascalCase} />}>
            {pascalCase}
          </Result>
          <Result title="Snake Case" extra={<CopyButton value={snakeCase} />}>
            {snakeCase}
          </Result>
          <Result title="Kebab Case" extra={<CopyButton value={kebabCase} />}>
            {kebabCase}
          </Result>
          <Result title="Title Case" extra={<CopyButton value={titleCase} />}>
            {titleCase}
          </Result>
          <Result title="Swap Case" extra={<CopyButton value={swapCaseStr} />}>
            {swapCaseStr}
          </Result>
          <Result title="Path Case" extra={<CopyButton value={pathCase} />}>
            {pathCase}
          </Result>
        </div>
      </StyledLayout>
    </Wrapper>
  );
}
