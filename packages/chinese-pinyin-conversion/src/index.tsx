import { Fragment, InputHTMLAttributes, useEffect, useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, ResultCode, Button } from '@wcj/tools-react-components';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import pinyin from 'pinyin/lib/web-pinyin';
// import { IPinyinStyle } from 'pinyin';

type IPinyinStyle = any;

const sample = `将进酒·君不见 - 李白\n君不见，黄河之水天上来，奔流到海不复回。
君不见，高堂明镜悲白发，朝如青丝暮成雪。
人生得意须尽欢，莫使金樽空对月。
天生我材必有用，千金散尽还复来。
烹羊宰牛且为乐，会须一饮三百杯。
岑夫子，丹丘生，将进酒，杯莫停。
与君歌一曲，请君为我倾耳听。
钟鼓馔玉不足贵，但愿长醉不愿醒。
古来圣贤皆寂寞，惟有饮者留其名。
陈王昔时宴平乐，斗酒十千恣欢谑。
主人何为言少钱，径须沽取对君酌。
五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。`;

type ResultHans = string | { hans: string; py: string };

const Hans = styled.div`
  line-height: 38px;
  & rt {
    letter-spacing: 0;
  }
  & ruby {
    text-align: center;
    margin: 0 5px;
  }
`;

const Text = styled.span`
  letter-spacing: 0;
`;

const ExtraLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface InputRadioProps
  extends Omit<React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'style'> {
  style?: IPinyinStyle;
  value?: IPinyinStyle;
}

const InputRadio: React.FC<React.PropsWithChildren<InputRadioProps>> = ({ style, value, children, ...props }) => (
  <label>
    <input type="radio" name="style" {...props} value={value} checked={style === value} /> {children}
  </label>
);

export default function ChinesePinyinConversion() {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>();
  const [style, setStyle] = useState<IPinyinStyle>('TONE');
  const [result, setResult] = useState<string>();
  const [resultHans, setResultHans] = useState<ResultHans[]>([]);
  const handleInput = (value: string = '') => {
    setValue(value);
    const json = pinyin(value, { style: style, group: true });
    const textPinyin = json
      .join(' ')
      .replace(
        /[。，（）]/g,
        (c: string) => (({ '。': '.', '，': ',', '（': '(', '）': ')' } as Record<string, string>)[c]),
      );
    setResult(textPinyin);

    const arr = json.flat();
    let pyIndx = 0;
    let hans = '';
    const result: ResultHans[] = [];
    for (let i = 0; i < value.length; i++) {
      if (/[\u4e00-\u9fa5]/g.test(value[i])) {
        result.push({ hans: value[i], py: arr[pyIndx] });
        pyIndx += 1;
        hans = '';
      } else {
        hans += value[i];
        if (hans === arr[pyIndx]) {
          result.push(hans);
          pyIndx += 1;
        }
      }
    }
    setResultHans(result);
  };
  const ResultTitle = () => (
    <ruby>
      拼 <rt>pīn</rt>音 <rt>yīn</rt>
    </ruby>
  );
  const hanldeChange = (evn: React.ChangeEvent<HTMLInputElement>) => {
    const typeVal = (evn.target as HTMLInputElement).value as IPinyinStyle;
    setStyle(typeVal);
  };
  useEffect(() => {
    if (value && style) {
      handleInput(value);
    }
  }, [style, value]);
  return (
    <Wrapper>
      <StyledLayout
        title={t('menu./chinese-pinyin-conversion.label').toString()}
        extra={
          <Fragment>
            <Button onClick={() => setValue(sample)}>Sample</Button>
            {value && <CopyButton value={value} />}
          </Fragment>
        }
      >
        <Textarea
          spellCheck={false}
          value={value}
          style={{ fontSize: 16 }}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title="Result">
        <ResultCode
          title={<ResultTitle />}
          extra={
            <ExtraLayout>
              <InputRadio onChange={hanldeChange} style={style} value="NORMAL">
                NORMAL
              </InputRadio>
              <InputRadio onChange={hanldeChange} style={style} value="TONE">
                TONE
              </InputRadio>
              <InputRadio onChange={hanldeChange} style={style} value="FIRST_LETTER">
                FIRST_LETTER
              </InputRadio>
              {result && <CopyButton value={result} />}
            </ExtraLayout>
          }
        >
          {result}
        </ResultCode>
        <ResultCode>
          <Hans>
            {resultHans.map((item, idx) => {
              if (typeof item === 'string') {
                return <Text key={idx}>{item}</Text>;
              }
              return (
                <ruby key={idx}>
                  {item.hans}
                  <rt>{item.py}</rt>
                </ruby>
              );
            })}
          </Hans>
        </ResultCode>
      </StyledLayout>
    </Wrapper>
  );
}
