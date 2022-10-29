import styled from 'styled-components';

export const Label = styled.label`
  font-family: monospace;
  input {
    vertical-align: middle;
    margin-right: 6px;
  }
  input:disabled {
    cursor: not-allowed;
    color: var(--color-fg-subtle);
  }
  > span * {
    vertical-align: middle;
  }
`;

export interface CheckboxOptionProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
export const CheckboxOption: React.FC<React.PropsWithChildren<CheckboxOptionProps>> = ({ children, ...other }) => (
  <Label>
    <span>
      <input type="checkbox" {...other} />
      <span>{children}</span>
    </span>
  </Label>
);
