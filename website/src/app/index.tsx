import { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '../Router';

export default function App() {
  const element = useRoutes(routes);
  return <Fragment>{element}</Fragment>;
}
