import { useEffect, useState } from 'react';
import { Wrapper, StyledLayout, CodeLineCopy, Button, Spacing } from '@wcj/tools-react-components';
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
  const [history, setHistory] = useState<string[]>([]);
  const [upperCase, setUpperCase] = useState<boolean>(true);
  const [numeric, setNumeric] = useState<boolean>(true);
  const [special, setSpecial] = useState<boolean>(true);
  const [result, setResult] = useState<string>();
  const addHistory = (str: string) => {
    const data = [...history];
    data.unshift(str);
    setHistory(data.slice(0, 20));
  };
  useEffect(() => {
    const password = generatePassword(range, lowerCase, upperCase, numeric, special);
    addHistory(password);
    setResult(password);
  }, [range, lowerCase, upperCase, numeric, special]);

  return (
    <Wrapper>
      <StyledLayout title="Setting">
        <InputRange
          style={{ maxWidth: 630 }}
          range={range}
          onChange={(evn) => setRange(Number((evn.target as HTMLInputElement).value))}
        />
        <Spacing style={{ paddingTop: 10 }}>
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
        </Spacing>
        <Button
          style={{ marginTop: 10 }}
          onClick={() => {
            const password = generatePassword(range, lowerCase, upperCase, numeric, special);
            addHistory(password);
            setResult(password);
          }}
        >
          Generate Password
        </Button>
        <Spacing style={{ paddingTop: 10 }}>
          {history.map((password, key) => {
            return (
              <CodeLineCopy label={`${key + 1}`} key={key}>
                {password}
              </CodeLineCopy>
            );
          })}
        </Spacing>
      </StyledLayout>
    </Wrapper>
  );
}
