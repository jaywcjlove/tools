import { memo } from 'react';
import { Wrapper, StyledLayout, Spacing } from '@wcj/tools-react-components';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import characters from 'togscc';
import { HansIcon } from './Icon';

const HansWarpper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 2px;
`;

const HansInner = styled.div`
  height: 100%;
  width: 100%;
`;

const Hans = memo<React.PropsWithChildren<any>>(({ children }) => {
  return (
    <HansWarpper>
      <HansInner>{children}</HansInner>
    </HansWarpper>
  );
});

export default function AmountInRMB() {
  const { t } = useTranslation(['standard-chinese-characters', 'common']);

  return (
    <Wrapper>
      <StyledLayout overflow="initial" title={t('Table of General Standard Chinese Characters', {})}>
        <Spacing style={{ paddingTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
          {Object.keys(characters).map((keyname, idx) => {
            return (
              <Hans key={idx}>
                <HansIcon>{keyname}</HansIcon>
              </Hans>
            );
          })}
        </Spacing>
      </StyledLayout>
    </Wrapper>
  );
}
