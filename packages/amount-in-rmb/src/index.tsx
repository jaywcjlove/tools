import { Fragment, useState } from 'react';
import { Wrapper, StyledLayout, CodeLineCopy, Button, Spacing, Textarea } from '@wcj/tools-react-components';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import nzh from 'nzh/cn';

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
      <Input type="range" style={{ flex: 1 }} {...props} value={props.value} />
      <span>{props.range}</span>
      {props.extra}
    </Label>
  );
};

type Data = {
  num: string;
  lower: string;
  upper: string;
  money: string;
};

export default function AmountInRMB() {
  const { t } = useTranslation();
  const [range, setRange] = useState<number>(0);
  const [history, setHistory] = useState<Data[]>([]);

  const addHistory = (dt: Data) => {
    const data = [...history];
    data.unshift(dt);
    setHistory(data.slice(0, 20));
  };

  return (
    <Wrapper>
      <StyledLayout overflow="initial" title={t('menu./amount-in-rmb.label').toString()}>
        <InputRange
          style={{ minWidth: 320, padding: '6px 5px' }}
          type="number"
          value={range}
          onChange={(evn) => setRange(Number((evn.target as HTMLInputElement).value))}
        />
        <Button
          style={{ marginTop: 10 }}
          disabled={range === undefined}
          onClick={() => {
            addHistory({
              num: range.toString(),
              lower: nzh.encodeS(range),
              upper: nzh.encodeB(range),
              money: nzh.toMoney(range),
            });
          }}
        >
          Transform
        </Button>
        <Spacing style={{ paddingTop: 10 }}>
          {history.map((data, key) => {
            return (
              <CodeLineCopy copyText={data.upper} key={key} title={<Fragment> {data.num} </Fragment>} copyBtn={false}>
                <Textarea value={data.upper} readOnly spellCheck={false} />
                <Textarea value={data.lower} readOnly spellCheck={false} />
                <Textarea value={data.money} readOnly spellCheck={false} />
              </CodeLineCopy>
            );
          })}
        </Spacing>
      </StyledLayout>
    </Wrapper>
  );
}
