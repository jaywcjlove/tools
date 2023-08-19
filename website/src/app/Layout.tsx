import { Fragment } from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import '@wcj/dark-mode';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import styles from './Layout.module.less';
import { ReactComponent as ShareIcon } from '../assets/share.svg';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { useMenus } from '../menus';
import { TransSelect } from '../components/TransSelect';
import { LogoIcon as Logo } from '../components/Logo';

const Divider = styled.div`
  border-top: 1px solid var(--color-border-muted);
`;

const Sup = styled.sup`
  position: absolute;
  font-weight: normal;
  font-size: 12px;
  margin-top: -4px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  dark-mode {
    font-size: 14px;
    line-height: 12px;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  -webkit-line-clamp: 1;
`;

const LabelText = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Article = styled.article`
  overflow: auto;
  flex: 1;
`;

export default function Layout() {
  const menus = useMenus();
  const { t } = useTranslation();
  const version = VERSION;
  return (
    <Fragment>
      <GitHubCorners size={36} href="https://github.com/jaywcjlove/tools" />
      <div className={styles.warpper}>
        <aside className="siderbar">
          <header>
            <h1>
              <Link to="/">
                <LogoIcon width={21} />
                <span>
                  {t('title')}
                  <Sup>{version}</Sup>
                </span>
              </Link>
            </h1>
            <HeaderRight>
              <TransSelect />
              <dark-mode permanent></dark-mode>
            </HeaderRight>
          </header>
          <nav>
            {menus.map((item, idx) => {
              if (item.divider) {
                return <Divider key={idx}></Divider>;
              }
              if (/https?:/.test(item.href || '')) {
                return (
                  <a key={idx} href={item.href} target="_blank" rel="noreferrer" title={item.label}>
                    <Label>
                      <Logo
                        size="14px"
                        padding="0"
                        style={{ backgroundColor: 'transparent', borderRadius: 0 }}
                        src={item.logo || `${item.label.toLocaleLowerCase().replace(/\s/g, '-')}.svg`}
                        alt={item.label}
                      />
                      <LabelText>{item.label}</LabelText>
                    </Label>
                    <ShareIcon height={18} />
                  </a>
                );
              }
              return (
                <NavLink key={idx} to={item.href || ''} title={item.label}>
                  <Label>
                    <Logo
                      size="14px"
                      padding="0"
                      style={{ backgroundColor: 'transparent', borderRadius: 0 }}
                      src={item.logo}
                      alt={item.label}
                    />
                    <span>{item.label}</span>
                  </Label>
                </NavLink>
              );
            })}
          </nav>
        </aside>
        <Article className="content">
          <Outlet />
        </Article>
      </div>
    </Fragment>
  );
}
