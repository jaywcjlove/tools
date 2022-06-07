import { useState, Fragment, useEffect } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, Button } from '@wcj/tools-react-components';
import { useTranslation } from 'react-i18next';
import simplifiedChinese from 'togscc/data/simplified.convert.json';
import traditionalChinese from 'togscc/data/traditional.convert.json';

import * as sample from './sample';

export default function SimplifiedTraditionalChinese() {
  const { t } = useTranslation(['simplified-traditional-chinese', 'common']);
  const [traditional, setTraditional] = useState<string>();
  const [simplified, setSimplified] = useState<string>();
  const [type, setType] = useState<'traditional' | 'simplified'>('traditional');

  useEffect(() => {
    setSimplified(
      (traditional || '')
        .split('')
        .map((str) => traditionalChinese[str] || str)
        .join(''),
    );
  }, [traditional]);

  useEffect(() => {
    setTraditional(
      (simplified || '')
        .split('')
        .map((str) => {
          if (Array.isArray(simplifiedChinese[str])) {
            return simplifiedChinese[str][0];
          }
          return simplifiedChinese[str] || str;
        })
        .join(''),
    );
  }, [simplified]);

  return (
    <Wrapper>
      <StyledLayout
        title={t('Traditional Chinese')}
        extra={
          <Fragment>
            {traditional && <CopyButton value={traditional} />}
            <Button
              onClick={() => {
                setTraditional(sample.traditional);
                setType('traditional');
              }}
            >
              {t('Sample', { ns: 'common' })}
            </Button>
          </Fragment>
        }
      >
        <Textarea
          spellCheck={false}
          value={traditional}
          onFocus={() => setType('traditional')}
          onChange={(evn) => {
            if (type === 'traditional') {
              setTraditional((evn.target as HTMLTextAreaElement).value);
            }
          }}
        />
      </StyledLayout>
      <StyledLayout
        title={t('Simplified Chinese')}
        extra={
          <Fragment>
            {simplified && <CopyButton value={simplified} />}
            <Button
              onClick={() => {
                setSimplified(sample.simplified);
              }}
            >
              {t('Sample', { ns: 'common' })}
            </Button>
          </Fragment>
        }
      >
        <Textarea
          spellCheck={false}
          value={simplified}
          onFocus={() => setType('simplified')}
          onChange={(evn) => {
            if (type === 'simplified') {
              setSimplified((evn.target as HTMLTextAreaElement).value);
            }
          }}
        />
      </StyledLayout>
    </Wrapper>
  );
}
