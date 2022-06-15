import React, { FC, ImgHTMLAttributes, RefObject, useEffect, Fragment, useState, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ImageProps<T = HTMLImageElement> extends React.DetailedHTMLProps<ImgHTMLAttributes<T>, T> {
  size?: string;
  padding?: string;
}

const Image = styled.img<ImageProps>`
  background-color: var(--color-neutral-muted);
  border-radius: 3px;
  float: left;
  margin-right: 5px;
  ${(props) => css`
    padding: ${props.padding || '3px'};
  `}
  ${(props) => css`
    height: ${props.size || '26px'};
    width: ${props.size || '26px'};
  `}
`;

interface SpanProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: string;
  padding?: string;
}

const Span = styled.span<SpanProps>`
  background-color: var(--color-neutral-muted);
  border-radius: 3px;
  float: left;
  margin-right: 5px;
  ${(props) => css`
    padding: ${props.padding || '3px'};
  `}
  ${(props) => css`
    height: ${props.size || '26px'};
    width: ${props.size || '26px'};
  `}
  svg {
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    fill: currentColor;
    opacity: 1 !important;
    display: block;
  }
`;

interface LogoIconProps extends ImageProps {
  ref?: RefObject<HTMLImageElement>;
}

export const LogoIcon: FC<LogoIconProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const [svg, setSvg] = useState<string>();
  // @ts-ignore
  const loadPath = LOADPATH;
  let src = `${loadPath ? `${loadPath}/` : ''}logo/${props.src}`;
  if (!/\.(png|jpg|svg)$/g.test(src)) {
    src = `${src}.svg`;
  }
  useEffect(() => {
    if (/\.svg$/.test(src)) {
      fetch(src)
        .then((response) => response.text())
        .then((data) => {
          if (data.indexOf('<svg') > -1) {
            setSvg(data);
            setVisible(true);
          } else {
            setVisible(false);
            setSvg('');
          }
        })
        .catch(() => {
          setVisible(false);
          setSvg('');
        });
    } else {
      setVisible(true);
    }
  }, [src]);

  if (!visible) return null;
  return (
    <Fragment>
      {svg ? (
        <Span dangerouslySetInnerHTML={{ __html: svg || '' }} {...props} />
      ) : (
        <Image
          alt="logo"
          // onError={() => setVisible(false)}
          {...props}
          src={src}
        />
      )}
    </Fragment>
  );
};
