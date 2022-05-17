import type { RouteObject } from 'react-router-dom';
import { DocumentTitle } from '@wcj/tools-react-components';

import UrlEncode from '@wcj/tools-react-url-encode';
import TextCase from '@wcj/tools-react-text-case';
import ImageToBase64 from '@wcj/tools-react-image-to-base64';
import JSONFormat from '@wcj/tools-react-json-format';
import Hash from '@wcj/tools-react-hash';
import GeneratePassword from '@wcj/tools-react-generate-password';
import HtmlToMarkdown from '@wcj/tools-react-html-to-markdown';
import MarkdownToHtml from '@wcj/tools-react-markdown-to-html';
import HTMLEscape from '@wcj/tools-react-html-escape';
import Base64Encoder from '@wcj/tools-react-base64-encoder';
import QRCodeGenerator from '@wcj/tools-react-qrcode-generator';
import Layout from './app/Layout';
import { NoMatch } from './app/NoMatch';
import Home from './app/Home';

export let routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <DocumentTitle title="Home - Web Tools">
            <Home />
          </DocumentTitle>
        ),
      },
      {
        path: '/url-encode',
        element: (
          <DocumentTitle title="URL Encoder/Decoder - Web Tools">
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
      {
        path: '/generate-password',
        element: (
          <DocumentTitle title="Generate Password - Web Tools">
            <GeneratePassword />
          </DocumentTitle>
        ),
      },
      {
        path: '/html-to-markdown',
        element: (
          <DocumentTitle title="HTML To Markdown - Web Tools">
            <HtmlToMarkdown />
          </DocumentTitle>
        ),
      },
      {
        path: '/markdown-to-html',
        element: (
          <DocumentTitle title="Markdown To HTML - Web Tools">
            <MarkdownToHtml />
          </DocumentTitle>
        ),
      },
      {
        path: '/html-escape',
        element: (
          <DocumentTitle title="HTML Escape/Unescape - Web Tools">
            <HTMLEscape />
          </DocumentTitle>
        ),
      },
      {
        path: '/base64-encoder',
        element: (
          <DocumentTitle title="Base64 Encoder/Decoder - Web Tools">
            <Base64Encoder />
          </DocumentTitle>
        ),
      },
      {
        // "href": "/qrcode-generator",
        // "label": "QRCode Generator"
        path: '/qrcode-generator',
        element: (
          <DocumentTitle title="QRCode Generator - Web Tools">
            <QRCodeGenerator />
          </DocumentTitle>
        ),
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];
