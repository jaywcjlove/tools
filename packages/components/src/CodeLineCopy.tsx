import { useState } from 'react';
import styled from 'styled-components';
import copyTextToClipboard from '@uiw/copy-to-clipboard';
import { CopyIcon, RightIcon } from './Icon';
import { GlobalStyle } from './utils';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  opacity: 0;
  transition: 0.3s all;
`;

const Warpper = styled.div`
  border: 1px solid var(--color-border-result-code);
  border-radius: 5px;
  display: flex;
  min-height: 31px;
  transition: 0.3s transform;
  &:hover {
    transform: scale(1.01);
  }
  &:hover ${Button} {
    opacity: 1;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 6px 8px;
  word-break: break-all;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 5px;
  border-right: 1px solid var(--color-border-result-code);
  min-width: 32px;
`;

export interface CodeLineCopyProps {
  label?: React.ReactNode;
  blockCopy?: boolean;
}

export const CodeLineCopy: React.FC<React.PropsWithChildren<CodeLineCopyProps>> = ({
  blockCopy = true,
  label,
  children,
}) => {
  const [success, setSuccess] = useState(false);
  function handleClick() {
    copyTextToClipboard(`${children}`, () => {
      setSuccess(true);
      const timer = setTimeout(() => {
        setSuccess(false);
        clearTimeout(timer);
      }, 3000);
    });
  }
  const props: React.HTMLAttributes<HTMLDivElement> = {};
  if (blockCopy) {
    props.onClick = handleClick;
    props.style = { cursor: 'pointer' };
  }
  return (
    <Warpper {...props}>
      <GlobalStyle />
      {label && <Label>{label}</Label>}
      <Content>{children}</Content>
      <Button onClick={handleClick} style={success ? { color: '#4caf50' } : {}}>
        {success ? <RightIcon width={19} height={19} /> : <CopyIcon width={19} height={19} />}
      </Button>
    </Warpper>
  );
};
