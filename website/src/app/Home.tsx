import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMenus } from '../menus';
import { LogoIcon } from '../components/Logo';

const Warpper = styled.div`
  padding: 25px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 0;
`;

const MenuItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  & a {
    min-height: 50px;
    flex: 0 1 261px;
    background-color: var(--color-canvas-subtle);
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    &:hover {
      background-color: var(--color-neutral-muted);
    }
  }
  .detail {
    display: flex;
    font-size: 12px;
    padding-top: 6px;
    color: var(--color-fg-subtle);
  }
`;

export default function HomePage() {
  const menus = useMenus();
  const { t } = useTranslation();
  const tools = menus.filter((item) => !/^https?:/i.test(item.href || '') && !item.divider && item.href !== '/');
  const thirdParty = menus.filter((item) => /^https?:/i.test(item.href || ''));
  return (
    <Warpper>
      <Title>{t('tools')}</Title>
      <MenuItem>
        {tools.map((item, key) => {
          return (
            <Link key={key} to={item.href || ''}>
              <LogoIcon size="38px" src={item.logo} alt={item.label} />
              {item.label}
            </Link>
          );
        })}
      </MenuItem>
      <Title>{t('ThirdPartyTools')}</Title>
      <MenuItem>
        {thirdParty.map((item, key) => {
          return (
            <a key={key} href={item.href!} target="_blank" rel="noreferrer">
              <LogoIcon src={item.logo || `${item.label.toLocaleLowerCase().replace(/\s/g, '-')}`} alt={item.label} />
              <span>{item.label}</span>
              <span className="detail">{item.about}</span>
            </a>
          );
        })}
      </MenuItem>
    </Warpper>
  );
}
