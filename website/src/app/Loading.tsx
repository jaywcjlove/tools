import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Warpper = styled.div`
  padding: 25px;
`;

export const Loading = () => {
  const { t } = useTranslation();
  return <Warpper>{t('loading')}</Warpper>;
};
