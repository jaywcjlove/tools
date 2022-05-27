import { Fragment, useState } from 'react';
import { Spacing, Button, CodeLineCopy } from '@wcj/tools-react-components';
import { ShieldsStyle } from './';

const styleData = ['flat', 'plastic', 'flat-square', 'for-the-badge', 'social'];

export const CustomBadge = () => {
  const [color, setColor] = useState('green');
  const [logoColor, setLogoColor] = useState('');
  const [labelColor, setLabelColor] = useState('');
  const [logo, setLogo] = useState('github');
  const [style, setStyle] = useState<ShieldsStyle | undefined>();
  const [label, setLabel] = useState('Tools');
  const [content, setContent] = useState('content');
  const [result, setResult] = useState(`https://shields.io/badge/${label}-${content}-${color}?logo=${logo}`);
  const [history, setHistory] = useState<string[]>([result]);

  function handleChange() {
    const param: string[] = [];
    // if (color) param.push(`color=${color.replace(/^#/g, '')}`);
    if (logoColor) param.push(`logoColor=${logoColor.replace(/^#/g, '')}`);
    if (labelColor) param.push(`labelColor=${labelColor.replace(/^#/g, '')}`);
    if (logo) param.push(`logo=${logo}`);
    if (style) param.push(`style=${style}`);
    if (label) param.push(`label=${label}`);
    const url = `https://shields.io/badge/${label}-${content}-${color.replace(/^#/g, '')}?${param.join('&')}`;
    setResult(url);
    const data = [...history];
    data.unshift(url);
    setHistory(data);
  }
  return (
    <Fragment>
      <Spacing>
        <div>
          <img src={result} />
        </div>
        <Spacing direction="row">
          <label>
            Logo Color: <input type="color" value={logoColor} onChange={(evn) => setLogoColor(evn.target.value)} />
          </label>
          <label>
            Label Color: <input type="color" value={labelColor} onChange={(evn) => setLabelColor(evn.target.value)} />
          </label>
          <label>
            Color: <input type="color" value={color} onChange={(evn) => setColor(evn.target.value)} />
          </label>
        </Spacing>
        <Spacing direction="row">
          <input type="text" value={label} onChange={(evn) => setLabel(evn.target.value)} />
          <input type="text" value={content} onChange={(evn) => setContent(evn.target.value)} />
          <select value={style || ''} onChange={(evn) => setStyle(evn.target.value as ShieldsStyle)}>
            <option value="">Please select Style</option>
            {styleData.map((st, idx) => (
              <option key={idx} value={st}>
                {' '}
                Style: {st}{' '}
              </option>
            ))}
          </select>
          <Spacing direction="row">
            <select value={logo.toLocaleLowerCase()} onChange={(evn) => setLogo(evn.target.value)}>
              <option>Please select Logo</option>
              <option value="github"> Logo: Github </option>
              <option value="npm"> Logo: npm </option>
              <option value="google"> Logo: Google </option>
              <option value="baidu"> Logo: baidu </option>
            </select>
            <input
              type="text"
              value={logo}
              placeholder="Please enter a logo name"
              onChange={(evn) => setLogo(evn.target.value)}
            />
          </Spacing>
        </Spacing>
        <Spacing direction="row">
          <Button onClick={handleChange}>Generate Badges</Button>
        </Spacing>
        {history &&
          history.map((item, idx) => {
            return (
              <CodeLineCopy key={`${item}${idx}`} label={<img src={item} alt="" />}>
                {`![](${item})`}
              </CodeLineCopy>
            );
          })}
      </Spacing>
    </Fragment>
  );
};
