import { useState, useEffect, useRef, Fragment } from 'react';
import { Wrapper, StyledLayout, CopyButton, CodeLineCopy, Spacing } from '@wcj/tools-react-components';
import styled from 'styled-components';
import { CubicBezier, Points, getPoint } from './CubicBezier';
import { EffectBox, Effect } from './EffectBox';
import presetsData from './easing.json';

const Canvas = styled.canvas`
  padding: 0 10px;
  background-color: var(--color-canvas-subtle);
`;

const Blue = styled.span`
  color: #1473e6;
`;
const Green = styled.span`
  color: #247b5e;
`;
interface CSSBlockProps {
  value?: string;
  second?: number;
}

const CSSBlock = (props: CSSBlockProps) => {
  return (
    <Fragment>
      <div>
        <Green>.block</Green> &#123;
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Green>transition</Green>:{' '}
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform {props.second}s</div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Blue>cubic-bezier({props.value})</Blue>;{' '}
      </div>
      <div>&#125;</div>
    </Fragment>
  );
};

export interface TOMLToJSONProps {}
export default function TOMLToJSON(props: TOMLToJSONProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const handle = useRef<CubicBezier>();
  const [name, setName] = useState<string>(presetsData[0].label);
  const [points, setPoints] = useState<Points>(getPoint(presetsData[0].point));
  const [customPoint, setCustomPoint] = useState<Points>();
  const [css, setCss] = useState<string>();
  const [second, setSecond] = useState<number>(0.3);
  const [effect, setEffect] = useState<Effect>();

  useEffect(() => {
    if (canvas.current) {
      handle.current = new CubicBezier(canvas.current);
      handle.current.updateDrawing();
      handle.current.onChange = (point, isDrag) => {
        if (isDrag) {
          setCustomPoint(point);
        }
      };
      handle.current.change(points);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = Number(event.target.value);
    const { label, point } = presetsData[idx] || {};
    setCustomPoint(undefined);
    setPoints(getPoint(point));
    setName(label);
  };

  useEffect(() => {
    if (handle.current) {
      handle.current.change(points);
      setCss(handle.current.css);
    }
  }, [points]);

  const cssBlock = `.block {\n    transition: transform ${second}s cubic-bezier(${css});\n}`;

  const customCss = customPoint ? `${customPoint.x1}, ${customPoint.y1}, ${customPoint.x2}, ${customPoint.y2}` : '';

  return (
    <Wrapper>
      <StyledLayout title="Cubic Bezier">
        <Spacing direction="row">
          <Canvas ref={canvas} width={200} height={450}></Canvas>
          <Spacing style={{ alignItems: 'flex-start' }}>
            <Spacing direction="row" style={{}}>
              <span>Easing:</span>
              <select onChange={handleChange}>
                {presetsData.map((item, idx) => {
                  return (
                    <option key={idx} value={idx}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </Spacing>
            <Spacing direction="row" style={{}}>
              <span>Duration:</span>
              <input
                type="range"
                value={second}
                step="0.1"
                min="0"
                max="5"
                onChange={(evn) => setSecond(Number(evn.target.value))}
              />
              {second} Second
            </Spacing>
            <Spacing direction="row" style={{}}>
              <span>Effect:</span>
              <button onClick={() => setEffect(effect === 'left' ? undefined : 'left')}>Left</button>
              <button onClick={() => setEffect(effect === 'width' ? undefined : 'width')}>Width</button>
              <button onClick={() => setEffect(effect === 'height' ? undefined : 'height')}>Height</button>
              <button onClick={() => setEffect(effect === 'opacity' ? undefined : 'opacity')}>Opacity</button>
            </Spacing>
            <EffectBox type={effect} second={second} css={customCss || css}></EffectBox>
          </Spacing>
        </Spacing>
      </StyledLayout>
      <StyledLayout title={'Result'} extra={css && <CopyButton value={css} />}>
        <Spacing>
          <CodeLineCopy title={name}> {css} </CodeLineCopy>
          <CodeLineCopy title={name} copyText={cssBlock}>
            <CSSBlock second={second} value={css} />
          </CodeLineCopy>
          {customPoint && (
            <CodeLineCopy
              title="Custom:"
              copyText={`.block {\n    transition: transform ${second}s cubic-bezier(${customCss});\n}`}
            >
              <CSSBlock second={second} value={customCss} />
            </CodeLineCopy>
          )}
        </Spacing>
      </StyledLayout>
    </Wrapper>
  );
}
