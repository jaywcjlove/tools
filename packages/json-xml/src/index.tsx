import React, { createContext, Fragment, useRef, useContext, useEffect, useReducer, useState } from 'react';
import { Wrapper, StyledLayout, CopyButton, Button, ErrorLayout } from '@wcj/tools-react-components';
import { XMLParser, XMLBuilder, XMLValidator } from 'fast-xml-parser';
import CodeMirror, { ReactCodeMirrorRef, EditorView } from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { xml } from '@codemirror/lang-xml';
import * as sample from './sample';

const borderRadius = EditorView.theme({
  '.cm-scroller, &': {
    borderRadius: '3px',
  },
  '&': {
    border: '1px solid var(--color-border-default)',
  },
});

interface ValueContextData extends InitialState {
  dispatch?: React.Dispatch<InitialState>;
}
type Theme = 'dark' | 'light';
interface InitialState {
  xml?: string;
  json?: string;
  error?: string;
  theme?: Theme;
  input?: 'xml' | 'json';
}
const defalutTheme = document.documentElement.getAttribute('data-color-mode') as Theme;
const ValueContext = createContext<ValueContextData>({ theme: defalutTheme });
const useValue = () => {
  return useContext(ValueContext);
};
const reducer = (state: InitialState, action: InitialState) => {
  return {
    ...state,
    ...action,
  };
};

export default function JSONToXML() {
  const [state, dispatch] = useReducer(reducer, { xml: '', json: '' });

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-color-mode') as Theme;
    dispatch!({ theme });
    document.addEventListener('colorschemechange', (e) => {
      dispatch!({ theme: (e as any).detail.colorScheme });
    });
  }, []);
  return (
    <ValueContext.Provider value={{ ...state, dispatch }}>
      <Wrapper>
        <LeftLayout />
        <RightLayout />
      </Wrapper>
      <ErrorLayout>{state.error}</ErrorLayout>
    </ValueContext.Provider>
  );
}

function LeftLayout() {
  const { json: jsonStr, input, theme, dispatch } = useValue();
  const editor = useRef<ReactCodeMirrorRef>(null);
  function handleInput(val: string) {
    try {
      const jsonobj = JSON.parse(val);
      const builder = new XMLBuilder({ format: true });
      const xmlStr = builder.build(jsonobj);
      dispatch!({ input: 'json', json: val, xml: xmlStr, error: '' });
    } catch (err) {
      if (err instanceof Error) {
        dispatch!({ error: err.message });
      }
    }
  }

  return (
    <StyledLayout
      title="JSON"
      extra={
        <Fragment>
          {jsonStr && <CopyButton value={jsonStr} />}
          <Button
            onClick={() => {
              editor.current?.view?.focus();
              handleInput(sample.JSON);
            }}
          >
            Sample
          </Button>
        </Fragment>
      }
    >
      <CodeMirror
        value={jsonStr}
        ref={editor}
        theme={theme}
        readOnly={input !== 'json'}
        height="calc(100vh - 90px)"
        extensions={[json(), borderRadius]}
        onFocus={() => {
          dispatch && dispatch({ input: 'json' });
        }}
        onChange={(val) => {
          if (input === 'json') {
            handleInput(val);
          }
        }}
      />
    </StyledLayout>
  );
}

function RightLayout() {
  const { xml: xmlStr, input, theme, dispatch } = useValue();
  const editor = useRef<ReactCodeMirrorRef>(null);
  const validator = (xml: string = '') => {
    const val = XMLValidator.validate(xml, {});
    if (typeof val !== 'boolean' && val.err) {
      dispatch!({ error: `${val.err.msg}, line: ${val.err.line}, col: ${val.err.col}` });
    }
  };
  function handleInput(val: string) {
    const parser = new XMLParser({});
    const jsonStr = parser.parse(val);
    if (val) {
      validator(val);
    }
    dispatch!({ input: 'xml', xml: val, json: JSON.stringify(jsonStr, null, 2) });
  }

  return (
    <StyledLayout
      title="XML"
      extra={
        <Fragment>
          {xmlStr && <CopyButton value={xmlStr} />}
          <Button
            onClick={() => {
              editor.current?.view?.focus();
              handleInput(sample.XML);
            }}
          >
            Sample
          </Button>
        </Fragment>
      }
    >
      <CodeMirror
        value={xmlStr}
        ref={editor}
        theme={theme}
        readOnly={input !== 'xml'}
        height="calc(100vh - 90px)"
        extensions={[xml(), borderRadius]}
        onFocus={() => dispatch!({ input: 'xml' })}
        onChange={(val, viewUpdate) => {
          if (input === 'xml') {
            handleInput(val);
          }
        }}
      />
    </StyledLayout>
  );
}
