import styled, { css } from 'styled-components';

export type Effect = 'left' | 'width' | 'height' | 'opacity';

const Main = styled.div`
  border: 1px solid #3ca35b;
  border-radius: 5px;
  max-width: 360px;
  width: 100%;
`;

interface BlockProps extends EffectBoxProps {}

const Block = styled.div<BlockProps>`
  width: 100px;
  height: 100px;
  background-color: #3ca35b;
  position: relative;
  left: 0px;
  opacity: 1;
  transform: translateZ(0);
  ${(props) =>
    props.css &&
    css`
      transition: all ${props.second}s cubic-bezier(${props.css}) 0s;
    `}
  ${(props) =>
    props.type === 'width' &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.type === 'left' &&
    css`
      left: calc(100% - 100px);
    `}
  ${(props) =>
    props.type === 'height' &&
    css`
      height: 355px;
    `}
  ${(props) =>
    props.type === 'opacity' &&
    css`
      opacity: 0;
    `}
`;

interface EffectBoxProps {
  css?: string;
  second?: number;
  type?: Effect;
}

export const EffectBox = (props: EffectBoxProps) => {
  const { type = '' } = props;
  return (
    <Main>
      <Block {...props} />
    </Main>
  );
};
