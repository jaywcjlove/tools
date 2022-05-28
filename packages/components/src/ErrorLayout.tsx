import styled from 'styled-components';

export const ErrorLayout = styled.pre`
  background-color: red;
  position: absolute;
  bottom: 0;
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
  white-space: pre-wrap;
  word-break: break-all;
  padding: 10px;
  border-radius: 4px;
  max-height: 230px;
  overflow: auto;
`;
