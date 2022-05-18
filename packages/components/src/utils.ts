import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] body {
    --color-border-result-code: #30363d;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] body {
    --color-border-result-code: #d0d7de;
  }
`;
