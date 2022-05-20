import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './utils';
import { ButtonBase } from './Button';

const Warpper = styled.div`
  display: flex;
  gap: 10px;
  align-items: stretch;
`;

const Input = styled.input`
  border: 1px solid var(--color-border-result-code);
  border-radius: 6px;
  padding: 6px 8px;
  min-width: 220px;
`;

export interface InputButtonProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onClick'> {
  ref?: React.RefObject<HTMLInputElement>;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  extra?: React.ReactNode;
}

export const InputButton: React.FC<PropsWithChildren<InputButtonProps>> = ({ children, extra, onClick, ...props }) => {
  return (
    <Warpper>
      <GlobalStyle />
      <Input {...props} />
      <ButtonBase onClick={onClick} style={{ padding: '0px 10px' }}>
        {children || 'Search'}
      </ButtonBase>
      {extra}
    </Warpper>
  );
};
