import { useEffect, useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, Button } from '@wcj/tools-react-components';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 6px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

export interface InputRangeProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  ref?: any;
  range?: number;
}

const InputRange: React.FC<React.PropsWithChildren<InputRangeProps>> = (props) => {
  return (
    <Label>
      <Input type="range" min={8} max={50} style={{ flex: 1 }} {...props} defaultValue={props.range} />
      <span>{props.range}</span>
    </Label>
  );
};

const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMERIC = '0123456789';
const SPECIAL_CHARACTER = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword(
  len: number = 8,
  lowerCase: boolean = true,
  upperCase: boolean = true,
  numeric: boolean = true,
  special: boolean = true,
) {
  let password = '';
  if (!lowerCase && !upperCase && !numeric && !special) {
    return password;
  }
  while (password.length < len) {
    const entity1 = Math.ceil(LOWERCASE.length * Math.random() * Math.random()) - 1;
    const entity2 = Math.ceil(NUMERIC.length * Math.random() * Math.random()) - 1;
    const entity3 = Math.ceil(SPECIAL_CHARACTER.length * Math.random() * Math.random()) - 1;
    const entity4 = Math.ceil(UPPERCASE.length * Math.random() * Math.random()) - 1;
    if (lowerCase && password.length < len) {
      password += LOWERCASE.charAt(entity1);
    }
    if (upperCase && password.length < len) {
      password += UPPERCASE.charAt(entity4);
    }
    if (numeric && password.length < len) {
      password += NUMERIC.charAt(entity2);
    }
    if (special && password.length < len) {
      password += SPECIAL_CHARACTER.charAt(entity3);
    }
  }
  return password.trim();
}

export default function GeneratePassword() {
  const [range, setRange] = useState<number>(12);
  const [lowerCase, setLowerCase] = useState<boolean>(true);
  const [upperCase, setUpperCase] = useState<boolean>(true);
  const [numeric, setNumeric] = useState<boolean>(true);
  const [special, setSpecial] = useState<boolean>(true);
  const [result, setResult] = useState<string>();
  useEffect(() => {
    setResult(generatePassword(range, lowerCase, upperCase, numeric, special));
  }, [range, lowerCase, upperCase, numeric, special]);
  return (
    <Wrapper>
      <StyledLayout title="Setting">
        <InputRange range={range} onChange={(evn) => setRange(Number((evn.target as HTMLInputElement).value))} />
        <Label>
          <Input type="checkbox" checked={lowerCase} onChange={(evn) => setLowerCase(evn.target.checked)} />
          Lower Case Letter(a..z)
        </Label>
        <Label>
          <Input type="checkbox" checked={upperCase} onChange={(evn) => setUpperCase(evn.target.checked)} />
          Upper Case Letter(A..Z)
        </Label>
        <Label>
          <Input type="checkbox" checked={numeric} onChange={(evn) => setNumeric(evn.target.checked)} />
          Number (0..9)
        </Label>
        <Label>
          <Input type="checkbox" checked={special} onChange={(evn) => setSpecial(evn.target.checked)} />
          Special characters
        </Label>
        <Button
          style={{ marginTop: 10 }}
          onClick={() => setResult(generatePassword(range, lowerCase, upperCase, numeric, special))}
        >
          Generate Password
        </Button>
      </StyledLayout>
      <StyledLayout title="Result" extra={result && <CopyButton value={result} />}>
        <Textarea spellCheck={false} value={result} readOnly />
      </StyledLayout>
    </Wrapper>
  );
}
