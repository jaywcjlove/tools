import styled, { css } from 'styled-components';

export * from './Document';
export * from './Result';
export * from './Button';
export * from './CodeLineCopy';
export * from './Spacing';
export * from './Input';
export * from './StyledLayout';

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
