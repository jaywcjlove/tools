import { Fragment, createContext, useContext, useReducer, useRef, useCallback } from 'react';
import { Wrapper, StyledLayout, CopyButton, Button, CodeEditor, ErrorLayout } from './';
import { ReactCodeMirrorRef, ReactCodeMirrorProps } from '@uiw/react-codemirror';

interface ValueContextData extends InitialState {
  dispatch?: React.Dispatch<InitialState>;
}
interface InitialState {
  val?: string;
  json?: string;
  error?: string;
  input?: 'val' | 'json';
  leftProps?: LeftProps;
  rightProps?: RightProps;
  sample?: {
    val?: string;
    json?: string;
  };
  state?: InitialState;
}
const ValueContext = createContext<ValueContextData>({});
const useValue = () => {
  return useContext(ValueContext);
};
const reducer = (state: InitialState, action: InitialState) => {
  return {
    ...state,
    ...action,
  };
};

interface BaseProps {
  title?: string;
  extra?: React.ReactNode;
}

interface LeftProps extends ReactCodeMirrorProps, BaseProps {
  onLeftInput: (value: string, type: InitialState['input']) => string;
}
interface RightProps extends ReactCodeMirrorProps, BaseProps {
  onRightInput: (value: string, type: InitialState['input']) => string;
}

export interface LayoutEditorConverterProps {
  val?: string;
  json?: string;
  leftProps: LeftProps;
  rightProps: RightProps;
  sample?: {
    val?: string;
    json?: string;
  };
}

export function LayoutEditorConverter(props: LayoutEditorConverterProps) {
  const [state, dispatch] = useReducer(reducer, { val: '', json: '', ...props });
  return (
    <ValueContext.Provider value={{ ...state, state, dispatch }}>
      <Wrapper>
        <LeftLayout />
        <RightLayout />
      </Wrapper>
      {state.error && <ErrorLayout>{state.error}</ErrorLayout>}
    </ValueContext.Provider>
  );
}

function LeftLayout() {
  const { json: jsonStr, leftProps, sample = {}, state, input, dispatch } = useValue();
  const { title, extra, onLeftInput, ...other } = leftProps || {};
  const editor = useRef<ReactCodeMirrorRef>(null);

  const leftInput = useCallback((val: string) => (onLeftInput ? onLeftInput(val, 'json') : ''), [state]);

  const handleInput = (val: string) => {
    try {
      const jsonTrans = leftInput(val);
      dispatch!({ input: 'json', json: val, val: jsonTrans });
    } catch (err) {
      if (err instanceof Error) {
        dispatch!({ error: `${err.message}` });
      }
    }
  };

  return (
    <StyledLayout
      title={title || 'JSON'}
      extra={
        <Fragment>
          {extra}
          {jsonStr && <CopyButton value={jsonStr} />}
          {sample.json && (
            <Button
              onClick={() => {
                editor.current?.view?.focus();
                handleInput(sample.json || '');
              }}
            >
              Sample
            </Button>
          )}
        </Fragment>
      }
    >
      <CodeEditor
        value={jsonStr}
        ref={editor}
        readOnly={input !== 'json'}
        height="calc(100vh - 87px)"
        {...other}
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
  const { val: valStr, rightProps, sample = {}, input, dispatch } = useValue();
  const { title, extra, onRightInput, ...other } = rightProps || {};
  const editor = useRef<ReactCodeMirrorRef>(null);
  const handleInput = (val: string) => {
    try {
      const valTrans = onRightInput ? onRightInput(val, 'val') : '';
      dispatch!({ input: 'val', val: val, json: valTrans });
    } catch (err) {
      if (err instanceof Error) {
        dispatch!({ error: `${err.message}` });
      }
    }
  };

  return (
    <StyledLayout
      title={title || 'Value'}
      extra={
        <Fragment>
          {extra}
          {valStr && <CopyButton value={valStr} />}
          {sample.val && (
            <Button
              onClick={() => {
                editor.current?.view?.focus();
                handleInput(sample.val || '');
              }}
            >
              Sample
            </Button>
          )}
        </Fragment>
      }
    >
      <CodeEditor
        value={valStr}
        ref={editor}
        readOnly={input !== 'val'}
        height="calc(100vh - 87px)"
        {...other}
        onFocus={() => dispatch!({ input: 'val' })}
        onChange={(value) => {
          if (input === 'val') {
            handleInput(value);
          }
        }}
      />
    </StyledLayout>
  );
}
