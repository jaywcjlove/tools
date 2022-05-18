import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './utils';

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
  align-items: center;
`;

export type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export interface ResultProps
  extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
  title?: JSX.Element;
  className?: string;
  extra?: React.ReactNode;
}

export const ResultCode: React.FC<PropsWithChildren<ResultProps>> = ({
  className,
  children,
  title,
  extra,
  ...other
}) => (
  <div className={className} {...other}>
    <GlobalStyle />
    <Title>
      <span>{title}</span>
      {extra}
    </Title>
    <Code>{children}</Code>
  </div>
);
