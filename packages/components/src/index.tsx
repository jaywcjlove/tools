import { PropsWithChildren, useState } from 'react';
import styled, { css } from 'styled-components';
import copyTextToClipboard from '@uiw/copy-to-clipboard';
import { CopyIcon } from './Icon';

export * from './Document';

export const Wrapper = styled.main`
  padding: 25px;
  width: 100%;
  min-height: 100%;
  display: flex;
  gap: 25px;
`;

export type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const Textarea = styled.textarea<TextareaProps>`
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  height: 100%;
  width: 100%;
`;

export interface LayoutProps {
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
`;

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => (
  <div className={props.className}>
    <Title>
      <span> {props.title} </span>
      <Extra>{props.extra}</Extra>
    </Title>
    <Context>{props.children}</Context>
  </div>
);

export const StyledLayout = styled(Layout)`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
`;

const Button = styled.button<ButtonProps>`
  border: 0;
  padding: 4px 6px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  ${(props) =>
    props.success &&
    css`
      background: #28a745;
      color: white;
    `}
`;

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  ref?: any;
  success?: boolean;
}

export const CopyButton: React.FC<PropsWithChildren<ButtonProps>> = ({ children, ...other }) => {
  const [success, setSuccess] = useState(false);
  const [child, setChild] = useState('Copy');
  function handleClick(evn: React.MouseEvent<HTMLButtonElement>) {
    copyTextToClipboard(`${other.value}`, (isCopy) => {
      setSuccess(true);
      setChild('Copied!');
      const timer = setTimeout(() => {
        setSuccess(false);
        setChild('Copy');
        clearTimeout(timer);
      }, 2000);
    });
  }
  return (
    <Button {...other} success={success} onClick={handleClick}>
      <CopyIcon style={{ marginRight: 2 }} />
      <span>{child}</span>
    </Button>
  );
};
