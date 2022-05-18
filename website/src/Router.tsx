import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { DocumentTitle } from '@wcj/tools-react-components';
import Layout from './app/Layout';
import { NoMatch } from './app/NoMatch';
import { Loading } from './app/Loading';

const HomePage = React.lazy(() => import('./app/Home'));
const UrlEncode = React.lazy(() => import('@wcj/tools-react-url-encode'));
const TextCase = React.lazy(() => import('@wcj/tools-react-text-case'));
const ImageToBase64 = React.lazy(() => import('@wcj/tools-react-image-to-base64'));
const JSONFormat = React.lazy(() => import('@wcj/tools-react-json-format'));
const Hash = React.lazy(() => import('@wcj/tools-react-hash'));
const GeneratePassword = React.lazy(() => import('@wcj/tools-react-generate-password'));
const HtmlToMarkdown = React.lazy(() => import('@wcj/tools-react-html-to-markdown'));
const MarkdownToHtml = React.lazy(() => import('@wcj/tools-react-markdown-to-html'));
const HTMLEscape = React.lazy(() => import('@wcj/tools-react-html-escape'));
const Base64Encoder = React.lazy(() => import('@wcj/tools-react-base64-encoder'));
const QRCodeGenerator = React.lazy(() => import('@wcj/tools-react-qrcode-generator'));

export let routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="Home - Web Tools">
              <HomePage />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/url-encode',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="URL Encoder/Decoder - Web Tools">
              <UrlEncode />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/json-format',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="JSON Format - Web Tools">
              <JSONFormat />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/text-case',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="Text Case - Web Tools">
              <TextCase />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/image-to-base64',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="Image To Base64 - Web Tools">
              <ImageToBase64 />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/hash',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="Hash - Web Tools">
              <Hash />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/generate-password',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="Generate Password - Web Tools">
              <GeneratePassword />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/html-to-markdown',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="HTML To Markdown - Web Tools">
              <HtmlToMarkdown />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/markdown-to-html',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="Markdown To HTML - Web Tools">
              <MarkdownToHtml />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/html-escape',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="HTML Escape/Unescape - Web Tools">
              <HTMLEscape />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/base64-encoder',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="Base64 Encoder/Decoder - Web Tools">
              <Base64Encoder />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      {
        path: '/qrcode-generator',
        element: (
          <React.Suspense fallback={<Loading />}>
            <DocumentTitle title="QRCode Generator - Web Tools">
              <QRCodeGenerator />
            </DocumentTitle>
          </React.Suspense>
        ),
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];
