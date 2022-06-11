import { forwardRef, useEffect, useState } from 'react';
import CodeMirror, { ReactCodeMirrorRef, ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';

const defalutTheme = document.documentElement.getAttribute('data-color-mode') as Theme;
type Theme = ReactCodeMirrorProps['theme'];

export const CodeEditor = forwardRef<ReactCodeMirrorRef, ReactCodeMirrorProps>((props, ref) => {
  const borderRadius = EditorView.theme({
    '.cm-scroller, &': {
      borderRadius: '6px',
    },
    '&': {
      border: '1px solid var(--color-border-default)',
    },
  });
  const { extensions = [], theme: pTheme } = props;
  const [theme, setTheme] = useState<Theme>(pTheme || defalutTheme);
  useEffect(() => {
    const val = document.documentElement.getAttribute('data-color-mode') as Theme;
    setTheme(val);
    document.addEventListener('colorschemechange', (e) => {
      setTheme((e as any).detail.colorScheme);
    });
  }, []);
  return (
    <CodeMirror ref={ref} {...props} style={{ padding: 1 }} extensions={[borderRadius, ...extensions]} theme={theme} />
  );
});
