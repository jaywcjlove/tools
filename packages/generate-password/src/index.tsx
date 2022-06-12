import { useEffect, useState } from 'react';
import { Wrapper, StyledLayout, CodeLineCopy, Button, Spacing } from '@wcj/tools-react-components';
import styled from 'styled-components';
import { validatePassword } from './utils';
import { generate } from '@wcj/generate-password';

const Input = styled.input`
  border-radius: 6px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  gap: 10px;
`;

export interface InputRangeProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  ref?: any;
  range?: number;
  extra?: React.ReactNode;
}

const InputRange: React.FC<React.PropsWithChildren<InputRangeProps>> = (props) => {
  return (
    <Label>
      <Input type="range" min={8} max={50} style={{ flex: 1 }} {...props} value={props.range} />
      <span>{props.range}</span>
      {props.extra}
    </Label>
  );
};

const PasswordInfo = styled.span`
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 5px;
  margin-left: 6px;
  width: 12px;
  height: 12px;
  display: inline-block;
`;

export default function GeneratePassword() {
  const [range, setRange] = useState<number>(12);
  const [lowerCase, setLowerCase] = useState<boolean>(true);
  const [history, setHistory] = useState<string[]>([]);
  const [upperCase, setUpperCase] = useState<boolean>(true);
  const [numeric, setNumeric] = useState<boolean>(true);
  const [special, setSpecial] = useState<boolean>(true);
  const addHistory = (str: string) => {
    const data = [...history];
    data.unshift(str);
    setHistory(data.slice(0, 20));
  };
  useEffect(() => {
    const password = generate({ length: range, lowerCase, upperCase, numeric, special });
    addHistory(password);
  }, [range, lowerCase, upperCase, numeric, special]);

  useEffect(() => {
    const data = [...history];
    [...Array(5)].map(() => {
      const password = generate({ length: range, lowerCase, upperCase, numeric, special });
      data.unshift(password);
    });
    setHistory(data.slice(0, 20));
  }, []);

  return (
    <Wrapper>
      <StyledLayout overflow="initial" title="Generate Password - Setting">
        <InputRange
          style={{ maxWidth: 630 }}
          range={range}
          value={range}
          onChange={(evn) => setRange(Number((evn.target as HTMLInputElement).value))}
          extra={
            <select value={range} onChange={(evn) => setRange(Number(evn.target.value))}>
              {[...Array(43)].map((_, idx) => (
                <option value={idx + 8} key={idx}>
                  {idx + 8}
                </option>
              ))}
            </select>
          }
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
            addHistory(generate({ length: range, lowerCase, upperCase, numeric, special }));
          }}
        >
          Generate Password
        </Button>
        <Spacing direction="row" items="center" gutter={0.1} style={{ marginTop: 10 }}>
          <PasswordInfo style={{ backgroundColor: 'gray' }} /> <span>It's easy to crack!</span>
          <PasswordInfo style={{ backgroundColor: 'red' }} /> <span>Very Weak! It's easy to crack!</span>
          <PasswordInfo style={{ backgroundColor: 'orange' }} /> <span>Medium level. Enter more symbols!</span>
          <PasswordInfo style={{ backgroundColor: 'green' }} /> <span>Strong :) Now it's safe!</span>
        </Spacing>
        <Spacing style={{ paddingTop: 10 }}>
          {history.map((password, key) => {
            const valida = validatePassword(password);
            return (
              <CodeLineCopy copyText={password} label={`${key + 1}`} key={key}>
                <PasswordInfo style={{ backgroundColor: valida.color }}></PasswordInfo> {password}
              </CodeLineCopy>
            );
          })}
        </Spacing>
      </StyledLayout>
    </Wrapper>
  );
}
