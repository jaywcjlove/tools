import { Fragment, useCallback, useEffect, useState } from 'react';
import {
  Wrapper,
  StyledLayout,
  CopyButton,
  Button,
  InputButton,
  Spacing,
  CodeLineCopy,
} from '@wcj/tools-react-components';
import npmBadgen from './npm.badgen.json';
import npmShields from './npm.shields.json';
import githubBadgen from './github.badgen.json';
import githubShields from './github.shields.json';
import githubOther from './github.other.json';
import dockerBadgen from './docker.badgen.json';
import dockerShields from './docker.shields.json';
import { CustomBadge } from './CustomBadge';

import { changeStyle } from './utils';

interface Data {
  url: string;
  label: string;
  user?: string;
  repo?: string;
}

type Category = 'github' | 'npm' | 'docker';
export type Type = 'badgen' | 'shields';

export type ShieldsStyle = 'flat' | 'plastic' | 'flat-square' | 'for-the-badge' | 'social' | null;
type BadgenStyle = 'flat' | 'classic' | null;
export type Style = ShieldsStyle | BadgenStyle;

const placeholder: Record<Category, string> = {
  github: 'Enter `username/repository` name',
  npm: 'Enter package name',
  docker: 'Enter Image name E.g: `nginx`, `bitnami/nginx`',
};

export interface GenerateBadgesProps {}
export default function GenerateBadges(props: GenerateBadgesProps) {
  const [value, setValue] = useState<string>('jaywcjlove/tools');
  const [style, setStyle] = useState<Style>();
  const [custom, setCustom] = useState<boolean>(false);
  const [category, setCategory] = useState<Category>('github');
  const [type, setType] = useState<Type>('shields');
  const [result, setResult] = useState<Data[]>([]);
  const handleInput = () => {
    const [user, repo] = value.split('/');
    const data: Data[] = [];
    let rawData: Data[] = [];
    if (category === 'github') {
      if (type === 'shields') {
        rawData = [...githubShields, ...githubOther];
      }
      if (type === 'badgen') {
        rawData = [...githubBadgen, ...githubOther];
      }
    }
    if (category === 'npm') {
      if (type === 'shields') {
        rawData = [...npmShields];
      }
      if (type === 'badgen') {
        rawData = [...npmBadgen];
      }
    }
    if (category === 'docker') {
      if (type === 'shields') {
        rawData = [...dockerShields];
      }
      if (type === 'badgen') {
        rawData = [...dockerBadgen];
      }
    }
    rawData.forEach((item) => {
      let url = '';
      if (
        category === 'github' &&
        ((repo && /{{:repo}}/gi.test(item.url)) ||
          (user && /{{:user}}/gi.test(item.url) && !/{{:repo}}/gi.test(item.url)))
      ) {
        url = item.url.replace(/{{:user}}/gi, user).replace(/{{:repo}}/gi, repo);
      }
      if (category === 'npm' && /{{:pkg}}/.test(item.url)) {
        url = item.url.replace(/{{:pkg}}/gi, repo ? `${user}/${repo}` : user);
      }
      if (category === 'docker' && /{{:library}}/.test(item.url)) {
        if (type === 'badgen' && !repo && !/{{:user}}/.test(item.url)) {
          url = item.url.replace(/{{:library}}/gi, user);
        }
        if (type === 'badgen' && user && repo && /{{:user}}/.test(item.url)) {
          url = item.url.replace(/{{:user}}/gi, user).replace(/{{:library}}/gi, repo);
        }
        if (type === 'shields' && !repo) {
          url = item.url.replace(/{{:user}}/gi, '_').replace(/{{:library}}/gi, user);
        }
        if (type === 'shields' && user && repo) {
          url = item.url.replace(/{{:user}}/gi, user).replace(/{{:library}}/gi, user);
        }
      }
      if (url) {
        const raw = changeStyle(url, type, style);
        data.push({ url: raw, label: item.label, user, repo });
      }
    });
    setResult(data);
  };

  useEffect(() => {
    handleInput();
  }, [type, style]);

  const ExtraLayout = useCallback(
    () => (
      <Fragment>
        <select
          defaultValue={category}
          onChange={(evn) => {
            setValue('');
            setCategory(evn.target.value as Category);
            setResult([]);
          }}
        >
          <option value="github">github</option>
          <option value="npm">npm</option>
          <option value="docker">docker</option>
        </select>
        <select
          defaultValue={type}
          onChange={(evn) => {
            setType(evn.target.value as Type);
          }}
        >
          <option value="badgen">badgen</option>
          <option value="shields">shields</option>
        </select>
        <select defaultValue={style || ''} onChange={(evn) => setStyle(evn.target.value as Style)}>
          <option value="">default</option>
          {type === 'badgen' && <option value="classic">classic</option>}
          {type === 'shields' && (
            <Fragment>
              <option value="plastic">plastic</option>
              <option value="flat-square">flat-square</option>
              <option value="for-the-badge">for-the-badge</option>
              <option value="social">social</option>
            </Fragment>
          )}
          <option value="flat">flat</option>
        </select>
      </Fragment>
    ),
    [category, type, style],
  );

  return (
    <Wrapper>
      <StyledLayout
        title="Generate Badges"
        overflow="initial"
        extra={
          <Fragment>
            <Button onClick={() => setCustom(!custom)}>{custom ? 'Default Badges' : 'Custom Badges'}</Button>
            {value && <CopyButton value={value} />}
          </Fragment>
        }
      >
        {custom ? (
          <CustomBadge />
        ) : (
          <Spacing>
            <InputButton
              value={value}
              placeholder={placeholder[category]}
              extra={<ExtraLayout />}
              onClick={handleInput}
              onChange={(evn) => setValue(evn.target.value)}
            >
              Generate Badges
            </InputButton>
            {result &&
              result.map((item, idx) => {
                return (
                  <CodeLineCopy
                    key={`${item.user}${item.repo || idx}${idx}`}
                    label={<img src={item.url} alt={item.label} />}
                  >
                    {`![${item.label}](${item.url})`}
                  </CodeLineCopy>
                );
              })}
          </Spacing>
        )}
      </StyledLayout>
    </Wrapper>
  );
}
