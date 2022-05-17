import type { RouteObject } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DocumentTitle } from '@wcj/tools-react-components';

import UrlEncode from '@wcj/tools-react-url-encode';
import TextCase from '@wcj/tools-react-text-case';
import ImageToBase64 from '@wcj/tools-react-image-to-base64';
import JSONFormat from '@wcj/tools-react-json-format';
import Hash from '@wcj/tools-react-hash';
import Layout from './app/Layout';

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export let routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <DocumentTitle title="URL Encode - Web Tools">
            <UrlEncode />
          </DocumentTitle>
        ),
      },
      {
        path: '/json-format',
        element: (
          <DocumentTitle title="JSON Format - Web Tools">
            <JSONFormat />
          </DocumentTitle>
        ),
      },
      {
        path: '/text-case',
        element: (
          <DocumentTitle title="Text Case - Web Tools">
            <TextCase />
          </DocumentTitle>
        ),
      },
      {
        path: '/image-to-base64',
        element: (
          <DocumentTitle title="Image To Base64 - Web Tools">
            <ImageToBase64 />
          </DocumentTitle>
        ),
      },
      {
        path: '/hash',
        element: (
          <DocumentTitle title="Hash - Web Tools">
            <Hash />
          </DocumentTitle>
        ),
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];
