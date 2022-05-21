import { useEffect, useRef, useState } from 'react';
import { Wrapper, StyledLayout, CopyButton } from '@wcj/tools-react-components';
import MDEditor from '@uiw/react-md-editor';

export interface SimpleMarkdownEditorProps {}

export default function SimpleMarkdownEditor(props: SimpleMarkdownEditorProps) {
  const [value, setValue] = useState('**Hello world!!!**');
  const [height, setHeight] = useState(500);
  const ref = useRef<any>(null);

  const handleResize = () => {
    if (ref.current) {
      setHeight(ref.current.clientHeight - 40);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
    if (ref.current) {
      setHeight(ref.current.clientHeight - 40);
    }
  }, [ref]);

  return (
    <Wrapper>
      <StyledLayout overflow="initial" ref={ref} title="Markdown Editor" extra={value && <CopyButton value={value} />}>
        <MDEditor value={value} height={height} onChange={(val) => setValue(val || '')} />
      </StyledLayout>
    </Wrapper>
  );
}
