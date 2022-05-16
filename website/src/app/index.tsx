import { Routes, Route } from 'react-router-dom';
import UrlEncode from '@wcj/tools-react-url-encode';
import TextCase from '@wcj/tools-react-text-case';
import ImageToBase64 from '@wcj/tools-react-image-to-base64';
import JSONFormat from '@wcj/tools-react-json-format';
import Layout from './Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UrlEncode />} />
        <Route path="/json-format" element={<JSONFormat />} />
        <Route path="/text-case" element={<TextCase />} />
        <Route path="/image-to-base64" element={<ImageToBase64 />} />
      </Route>
    </Routes>
  );
}
