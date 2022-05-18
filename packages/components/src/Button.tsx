import { Fragment, PropsWithChildren, useState } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import copyTextToClipboard from '@uiw/copy-to-clipboard';
import { CopyIcon } from './Icon';

const GlobalStyle = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] body {
    --color-button-bg: #30363d;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] body {
    --color-button-bg: #dae0e6;
  }
`;

export const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => (
  <Fragment>
    <GlobalStyle />
    <ButtonBase {...props} />
  </Fragment>
);

export const ButtonBase = styled.button<ButtonProps>`
  border: 0;
  padding: 4px 6px;
  cursor: pointer;
  border-radius: 4px;
  & > * {
    vertical-align: middle;
  }
  ${(props) =>
    props.success &&
    css`
      background: #28a745;
      color: white;
    `}
  &:hover {
    background-color: var(--color-button-bg);
  }
  &.active {
    background: #28a745;
    color: white;
  }
  &:active,
  &:focus {
    box-shadow: 0px 0px 0px 2px rgb(0 0 0 / 17%);
  }
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
    <Button {...other} success={success} className={success ? 'active' : ''} onClick={handleClick}>
      <CopyIcon style={{ marginRight: 2 }} />
      <span>{child}</span>
    </Button>
  );
};
