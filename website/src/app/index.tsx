import { DocumentTitle } from '@wcj/tools-react-components';
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
        <Route
          index
          element={
            <DocumentTitle title="URL Encode - Web Tools">
              <UrlEncode />
            </DocumentTitle>
          }
        />
        <Route
          path="/json-format"
          element={
            <DocumentTitle title="JSON Format - Web Tools">
              <JSONFormat />
            </DocumentTitle>
          }
        />
        <Route
          path="/text-case"
          element={
            <DocumentTitle title="Text Case - Web Tools">
              <TextCase />
            </DocumentTitle>
          }
        />
        <Route
          path="/image-to-base64"
          element={
            <DocumentTitle title="Image To Base64 - Web Tools">
              <ImageToBase64 />
            </DocumentTitle>
          }
        />
      </Route>
    </Routes>
  );
}
