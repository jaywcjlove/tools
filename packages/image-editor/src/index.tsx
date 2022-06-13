import { useEffect, useRef } from 'react';
import { StyledLayout } from '@wcj/tools-react-components';
import styled from 'styled-components';
import TuiImageEditor from 'tui-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import { darkTheme } from './dark';

export interface ResultProps {
  title?: string;
  className?: string;
}

export const Wrapper = styled.main`
  padding: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  gap: 25px;
`;

const EditorImage = styled.div``;

export default function ImageToBase64() {
  const $editor = useRef(null);
  const $imageEditorInst = useRef<TuiImageEditor>();

  useEffect(() => {
    if ($editor.current) {
      $imageEditorInst.current = new TuiImageEditor($editor.current, {
        includeUI: {
          theme: darkTheme, // or whiteTheme
          initMenu: 'filter',
          menuBarPosition: 'bottom',
        },
        cssMaxWidth: 1000, // Component default value: 1000
        cssMaxHeight: 800, // Component default value: 800
        selectionStyle: {
          cornerSize: 10,
          rotatingPointOffset: 70,
        },
      });
    }
  }, []);

  return (
    <Wrapper>
      <StyledLayout style={{ gap: 0 }}>
        <EditorImage ref={$editor}></EditorImage>
      </StyledLayout>
    </Wrapper>
  );
}
