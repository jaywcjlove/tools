import { useState } from 'react';
import { FC, ImgHTMLAttributes, RefObject } from 'react';
import styled, { css } from 'styled-components';

interface ImageProps extends React.DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
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

interface LogoIconProps extends ImageProps {
  ref?: RefObject<HTMLImageElement>;
}

export const LogoIcon: FC<LogoIconProps> = (props) => {
  const [visible, setVisible] = useState(true);
  // @ts-ignore
  const loadPath = LOADPATH;
  const src = `${loadPath}/logo/${props.src}`;
  if (!visible) return null;
  return <Image alt="logo" onError={() => setVisible(false)} {...props} src={src} />;
};
