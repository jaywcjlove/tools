import styled from 'styled-components';

const Label = styled.label`
  input {
    vertical-align: middle;
  }
`;

interface CheckboxOptionProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
export const CheckboxOption: React.FC<React.PropsWithChildren<CheckboxOptionProps>> = ({ children, ...other }) => (
  <Label>
    <input type="checkbox" {...other} />
    {children}
  </Label>
);
