import styled, { css } from 'styled-components';

export interface SpacingProps {
  gutter?: number;
  direction?: React.CSSProperties['flexDirection'];
}

export const Spacing = styled.div<SpacingProps>`
  display: flex;
  width: 100%;
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
