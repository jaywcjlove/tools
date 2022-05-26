import styled, { css } from 'styled-components';

export interface SpacingProps {
  gutter?: number;
  direction?: React.CSSProperties['flexDirection'];
  items?: React.CSSProperties['alignItems'];
}

export const Spacing = styled.div<SpacingProps>`
  display: flex;
  width: 100%;
  ${(props) =>
    props.items &&
    css`
      align-items: ${props.items};
    `}
  ${(props) => css`
    flex-direction: ${props.direction || 'column'};
  `}
  ${(props) => css`
    gap: ${(props.gutter && `${props.gutter}px`) || '10px'};
  `}
  > * {
    display: flex;
    align-items: center;
  }
`;
