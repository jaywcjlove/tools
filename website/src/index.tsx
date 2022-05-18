import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './i18n.config';
import App from './app';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
