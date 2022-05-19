import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

export * from './Document';
export * from './Result';
export * from './Button';
export * from './CodeLineCopy';
export * from './Spacing';
export * from './Input';

export const Wrapper = styled.main`
  padding: 25px;
  width: 100%;
  min-height: 100%;
  display: flex;
  gap: 25px;
`;

export interface TextareaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = styled.textarea<TextareaProps>`
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  ${(props) =>
    props.error &&
    css`
      color: red;
      font-weight: bold;
    `}
`;

export interface LayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  className?: string;
  extra?: React.ReactNode;
}

export const Context = styled.div`
  padding-top: 10px;
  flex: 1;
  font-weight: normal;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Extra = styled.div`
  display: flex;
  gap: 10px;
`;

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ title, extra, children, ...other }) => (
  <div {...other}>
    <Title>
      <span> {title} </span>
      <Extra>{extra}</Extra>
    </Title>
    <Context>{children}</Context>
  </div>
);

export const StyledLayout = styled(Layout)`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
`;
