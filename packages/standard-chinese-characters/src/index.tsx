import { memo } from 'react';
import { Wrapper, StyledLayout, Spacing } from '@wcj/tools-react-components';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import characters from 'togscc';
import { HansIcon } from './Icon';

const HansWarpper = styled.div`
  width: 42px;
  border-radius: 2px;
  display: initial;
`;

const HansInner = styled.div`
  height: 100%;
  width: 100%;
  height: 42px;
`;

const HansPinyin = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 6px;
`;

const HansContent = styled.div`
  text-align: center;
  color: var(--color-border-default);
`;

const Hans = memo<React.PropsWithChildren<{ pinyin: string | string[] }>>(({ children, pinyin }) => {
  return (
    <HansWarpper>
      <HansPinyin>{Array.isArray(pinyin) ? pinyin.join(',') : pinyin}</HansPinyin>
      <HansInner>{children}</HansInner>
    </HansWarpper>
  );
});

export default function StandardChineseCharacters() {
  const { t } = useTranslation(['standard-chinese-characters', 'common']);

  return (
    <Wrapper>
      <StyledLayout overflow="initial" title={t('Table of General Standard Chinese Characters', {})}>
        <Spacing style={{ flexWrap: 'wrap', flexDirection: 'row', gap: '40px 61px', paddingBottom: 120 }}>
          {Object.keys(characters).map((keyname, idx) => {
            return (
              <Hans key={idx} pinyin={characters[keyname]}>
                <HansIcon>{keyname}</HansIcon>
                <HansContent>{idx + 1}</HansContent>
              </Hans>
            );
          })}
        </Spacing>
      </StyledLayout>
    </Wrapper>
  );
}
