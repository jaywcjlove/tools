import { Fragment } from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import '@wcj/dark-mode';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Layout.module.less';
import { ReactComponent as ShareIcon } from '../assets/share.svg';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import menus from '../menu.json';

const Sup = styled.sup`
  position: absolute;
  font-weight: normal;
  font-size: 12px;
  margin-top: -4px;
`;

export default function Layout() {
  // @ts-ignore
  const version = VERSION;
  return (
    <Fragment>
      <GitHubCorners size={36} href="https://github.com/jaywcjlove/tools" />
      <div className={styles.warpper}>
        <aside>
          <header>
            <h1>
              <Link to="/">
                <LogoIcon width={21} />
                <span>
                  Web Tools<Sup>{version}</Sup>
                </span>
              </Link>
            </h1>
            <dark-mode permanent></dark-mode>
          </header>
          <nav>
            {menus.map((item, idx) => {
              if (item.divider) {
                return <div key={idx} className={styles.divider}></div>;
              }
              if (/https?:/.test(item.href || '')) {
                return (
                  <a key={idx} href={item.href} target="_blank" rel="noreferrer">
                    <span>{item.label}</span>
                    <ShareIcon height={18} />
                  </a>
                );
              }
              return (
                <NavLink key={idx} to={item.href || ''}>
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </aside>
        <article>
          <Outlet />
        </article>
      </div>
    </Fragment>
  );
}
