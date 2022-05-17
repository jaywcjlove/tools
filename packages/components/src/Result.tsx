import React, { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] body {
    --color-border-result-code: #30363d;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] body {
    --color-border-result-code: #d0d7de;
  }
`;

const Code = styled.pre`
  border-color: var(--color-border-result-code);
  border-width: 1px;
  border-style: solid;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  word-break: break-all;
  white-space: pre-wrap;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export interface ResultProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  className?: string;
  extra?: React.ReactNode;
}

export const ResultCode: React.FC<PropsWithChildren<ResultProps>> = (props) => (
  <div className={props.className} {...props}>
    <GlobalStyle />
    <Title>
      <span>{props.title}</span>
      {props.extra}
    </Title>
    <Code>{props.children}</Code>
  </div>
);
