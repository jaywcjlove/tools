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

export interface ResultProps
  extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  className?: string;
  extra?: React.ReactNode;
  codeProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
    ref?: React.RefObject<HTMLPreElement>;
  };
}

export const ResultCode: React.FC<PropsWithChildren<ResultProps>> = ({
  className,
  children,
  title,
  extra,
  codeProps,
  ...other
}) => (
  <div className={className} {...other}>
    <GlobalStyle />
    <Title>
      <span>{title}</span>
      {extra}
    </Title>
    <Code {...codeProps}>{children}</Code>
  </div>
);
