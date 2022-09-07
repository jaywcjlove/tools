import React, { useState, Fragment, useRef } from 'react';
import { Wrapper, StyledLayout, Button } from '@wcj/tools-react-components';
import CodeMirror from '@uiw/react-codemirror';
import { langs, langNames, LanguageName } from '@uiw/codemirror-extensions-langs';
import * as themes from '@uiw/codemirror-themes-all';
import styled from 'styled-components';
import { EditorView } from '@codemirror/view';
import domToImage from 'dom-to-image-more';

const sample = `<h2>Web tool</h2>
<p>Hello World</p>
<pre><code class="language-css">body { color: 'red'; }
</code></pre>
`;

const Canvas = styled.div`
  border: 3px dashed #e3ebf6;
  display: inline-block;
  &::before {
    content: 'CANVAS';
    top: -21px;
    left: -4px;
    position: absolute;
    font-size: 0.8rem;
  }
`;
const EditorWarpper = styled.div`
  padding: 50px;
  & > * {
    box-shadow: rgb(0 0 0 / 55%) 0px 10px 30px 0px;
    border-radius: 5px;
    display: inline-block;
    overflow: hidden;
  }
`;

const HeaderTools = styled.div`
  padding-bottom: 10px;
`;

export default function Html2Markdown() {
  const $dom = useRef<HTMLDivElement>(null);
  const [markdown, setMarkdown] = useState<string>(sample);
  const [languge, setLanguge] = useState<LanguageName>('javascript');
  const [theme, setTheme] = useState<keyof typeof themes>('githubDark');
  const handleInput = () => setMarkdown(sample);
  const handleChange = (value: string) => setMarkdown(value);
  const borderRadius = EditorView.theme({
    '.cm-scroller, &': {
      borderRadius: '6px',
    },
    '& .cm-gutters': {
      borderRight: '0',
    },
  });
  const selectLangChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguge(ev.target.value as LanguageName);
  };
  const selectThemeChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('ev.target.value:::', ev.target.value);
    setTheme(ev.target.value as keyof typeof themes);
  };
  const downloadHandel = () => {
    const scale = 2;
    const elm = $dom.current;
    domToImage
      .toPng($dom.current, {
        height: elm!.offsetHeight * scale,
        style: {
          transform: `scale(${scale}) translate(${elm!.offsetWidth / 2 / scale}px, ${elm!.offsetHeight / 2 / scale}px)`,
        },
        width: elm!.offsetWidth * scale,
      })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = dataUrl;
        link.click();
      });
  };
  const extensions = [borderRadius];
  if (langs[languge]) {
    extensions.push(langs[languge]());
  }
  return (
    <Wrapper>
      <StyledLayout
        title="Code To Image"
        extra={
          <Fragment>
            <Button onClick={handleInput}>Sample</Button>
            <Button onClick={downloadHandel}>DownLoad</Button>
          </Fragment>
        }
      >
        <HeaderTools>
          <select value={languge} onChange={selectLangChange}>
            {langNames.sort().map((keyname, index) => {
              return (
                <option value={keyname} key={index}>
                  {keyname}
                </option>
              );
            })}
          </select>
          <select value={theme} onChange={selectThemeChange}>
            {Object.keys(themes).map((keyname, index) => {
              return (
                <option value={keyname} key={index}>
                  Theme: {keyname}
                </option>
              );
            })}
          </select>
        </HeaderTools>
        <Canvas>
          <EditorWarpper ref={$dom}>
            <CodeMirror theme={themes[theme]} value={markdown} extensions={extensions} onChange={handleChange} />
          </EditorWarpper>
        </Canvas>
      </StyledLayout>
    </Wrapper>
  );
}
