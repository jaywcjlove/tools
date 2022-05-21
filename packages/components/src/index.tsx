import styled, { css } from 'styled-components';

export * from './Document';
export * from './Result';
export * from './Button';
export * from './CodeLineCopy';
export * from './Spacing';
export * from './Input';
export * from './StyledLayout';
export * from './Textarea';
export * from './utils';
export * from './ErrorLayout';

export const Wrapper = styled.main`
  padding: 25px;
  width: 100%;
  min-height: 100%;
  display: flex;
  gap: 25px;
`;
