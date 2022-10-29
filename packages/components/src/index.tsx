import styled, { css } from 'styled-components';

export * from './Document';
export * from './Divider';
export * from './Result';
export * from './Button';
export * from './CodeLineCopy';
export * from './CheckboxOption';
export * from './Spacing';
export * from './Select';
export * from './Input';
export * from './StyledLayout';
export * from './Textarea';
export * from './utils';
export * from './ErrorLayout';
export * from './CodeEditor';
export * from './LayoutEditorConverter';

export const Wrapper = styled.main`
  padding: 25px;
  width: 100%;
  min-height: 100%;
  display: flex;
  gap: 25px;
`;
