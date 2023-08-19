import styled, { css } from 'styled-components';

export interface TextareaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: boolean;
  ref?: React.RefObject<HTMLTextAreaElement>;
  resize?: React.CSSProperties['resize'];
}

export const Textarea = styled.textarea<TextareaProps>`
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  ${(props) => css`
    resize: ${props.resize || 'none'};
  `}
  ${(props) =>
    props.error &&
    css`
      color: red;
      font-weight: bold;
    `}
`;
