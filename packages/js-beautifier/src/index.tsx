import { Fragment, useRef, useState } from 'react';
import {
  StyledLayout,
  CopyButton,
  ResultCode,
  Spacing,
  CodeEditor,
  Button,
  Wrapper,
  ErrorLayout,
} from '@wcj/tools-react-components';
import { javascript } from '@codemirror/lang-javascript';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { minify, MinifyOptions } from 'uglify-js-export';
import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';
import * as sample from './sample';

const Info = styled.span`
  color: var(--color-fg-subtle);
`;

const defaultOptions: MinifyOptions = {
  mangle: true,
  toplevel: false,
  ie8: false,
  keep_fnames: false,
  parse: {
    bare_returns: false,
    html5_comments: true,
    shebang: true,
  },
  compress: {
    arguments: true,
    assignments: true,
    booleans: true,
    collapse_vars: true,
    comparisons: true,
    conditionals: true,
    dead_code: true,
    directives: true,
    drop_console: true,
    drop_debugger: true,
    evaluate: true,
    expression: true,
    functions: true,
    global_defs: {},
    hoist_exports: true,
    hoist_funs: false,
    hoist_props: true,
    hoist_vars: false,
    if_return: true,
    imports: true,
    inline: true,
    join_vars: true,
    // ⚠️
    keep_fargs: 'strict',
    // ⚠️
    pure_getters: 'strict',
    keep_fnames: false,
    keep_infinity: false,
    loops: true,
    merge_vars: true,
    negate_iife: true,
    objects: true,
    passes: 1,
    properties: true,
    // ⚠️
    pure_funcs: null,
    reduce_funcs: true,
    reduce_vars: true,
    sequences: true,
    side_effects: true,
    strings: true,
    switches: true,
    templates: true,
    unsafe: false,
    toplevel: false,
    top_retain: null,
    typeofs: true,
    unsafe_comps: false,
    unsafe_Function: false,
    unsafe_math: false,
    unsafe_proto: false,
    unsafe_regexp: false,
    unsafe_undefined: false,
    unused: true,
    varify: true,
    webkit: false,
  },
};
// --------
// /**
//  * Pass `true` to return compressor warnings in result.warnings.
//  * Use the value `verbose` for more detailed warnings.
//  * @default false
//  */
//  warnings?: boolean | 'verbose' | undefined;
//  /**
//   * Pass `false` to skip mangling names, or pass an object to specify mangle options (see below).
//   * @default true
//   */
//  mangle?: boolean | MangleOptions | undefined;
//  /**
//   * Pass an object if you wish to specify additional output options.
//   * The defaults are optimized for best compression
//   */
//  output?: OutputOptions | undefined;
//  /**
//   * Pass an object if you wish to specify source map options.
//   * @default false
//   */
//  sourceMap?: boolean | SourceMapOptions | undefined;
//  /**
//   * Pass an empty object {} or a previously used nameCache object
//   * if you wish to cache mangled variable and property names across multiple invocations of minify().
//   * Note: this is a read/write property. `minify()` will read the name cache state of this object
//   * and update it during minification so that it may be reused or externally persisted by the user
//   */
//  nameCache?: object | undefined;
type Type = 'formatter' | 'minify';

interface CheckboxProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
const Checkbox: React.FC<React.PropsWithChildren<CheckboxProps>> = ({ children, ...other }) => {
  return (
    <label>
      <span>
        <input type="checkbox" {...other} />
        {children}
      </span>
    </label>
  );
};

export default function JSBeautifier() {
  const { t } = useTranslation(['js-beautifier', 'common']);
  const editor = useRef<ReactCodeMirrorRef>(null);
  const [type, setType] = useState<Type>('minify');
  const [options, setOptions] = useState<MinifyOptions>(defaultOptions);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [tabWidth, setTabWidth] = useState(2);
  const handleFormat = () => {
    try {
      setError('');
      setValue(
        prettier.format(value, { parser: 'babel-ts', tabWidth: tabWidth, printWidth: 120, plugins: [parserBabel] }),
      );
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  const handleMinify = () => {
    try {
      setError('');
      const data = minify(value, options);
      if (data.error) {
        throw new Error(data.error.message);
      }
      setValue(data.code);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  return (
    <Wrapper>
      <StyledLayout
        title="JS Beautifier/Uglify"
        extra={
          <Fragment>
            {type === 'formatter' && value && (
              <Button onClick={() => handleFormat()}>{t('Formatter', { ns: 'common' })}</Button>
            )}
            {type === 'minify' && value && (
              <Button onClick={() => handleMinify()}>{t('Minify', { ns: 'common' })}</Button>
            )}
            {value && (
              <select value={type} onChange={(evn) => setType(evn.target.value as Type)}>
                <option value="formatter">{t('Formatter', { ns: 'common' })}</option>
                <option value="minify">{t('Minify', { ns: 'common' })}</option>
              </select>
            )}
            {value && type === 'formatter' && (
              <select onChange={(evn) => setTabWidth(Number(evn.target.value))}>
                <option value={2}>2 Tab Space</option>
                <option value={3}>3 Tab Space</option>
                <option value={4}>4 Tab Space</option>
                <option value={5}>5 Tab Space</option>
              </select>
            )}
            {value && <CopyButton value={value} />}
            <Button
              onClick={() => {
                editor.current?.view?.focus();
                if (type === 'formatter') {
                  setValue(sample.js);
                }
                if (type === 'minify') {
                  setValue(sample.val);
                }
              }}
            >
              {t('Sample', { ns: 'common' }).toString()}
            </Button>
          </Fragment>
        }
      >
        <CodeEditor
          value={value}
          ref={editor}
          height="calc(100vh - 87px)"
          extensions={[javascript()]}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </StyledLayout>
      {type === 'minify' && value && (
        <StyledLayout
          title={t('Options', { ns: 'common' }).toString()}
          style={{ maxWidth: 420 }}
          extra={
            <Fragment>
              <Button onClick={() => setOptions(defaultOptions)}>Reset</Button>
              <Button onClick={() => setOptions({})}>None</Button>
            </Fragment>
          }
        >
          <ResultCode codeProps={{ style: { height: 'calc(100vh - 87px)', overflow: 'auto', margin: 0 } }}>
            <Spacing>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!options.mangle}
                    onChange={({ target }) => setOptions({ ...options, mangle: target.checked })}
                  />
                  {t('mangle').toString()} <Info>{t('Pass `false` to skip mangling names').toString()}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!options.toplevel}
                    onChange={({ target }) => setOptions({ ...options, toplevel: target.checked })}
                  />
                  {t('toplevel').toString()}{' '}
                  <Info>
                    {t(
                      'Set to `true` if you wish to enable top level variable and function name mangling and to drop unused variables and functions.',
                    ).toString()}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!options.ie8}
                    onChange={({ target }) => setOptions({ ...options, ie8: target.checked })}
                  />
                  {t('ie8').toString()} <Info>{t('Set to true to support IE8').toString()}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!options.keep_fnames}
                    onChange={({ target }) => setOptions({ ...options, keep_fnames: target.checked })}
                  />
                  {t('keep_fnames').toString()}{' '}
                  <Info>
                    {t(
                      'Pass true to prevent discarding or mangling of function names. Useful for code relying on Function.prototype.name.',
                    ).toString()}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!options.parse?.bare_returns}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ parse: { ...options.parse, bare_returns: target.checked } } })
                    }
                  />
                  {t('parse.bare_returns').toString()}{' '}
                  <Info>{t('Support top level `return` statements').toString()}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!options.parse?.html5_comments}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ parse: { ...options.parse, html5_comments: target.checked } } })
                    }
                  />
                  {t('parse.html5_comments').toString()}
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!options.parse?.shebang}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ parse: { ...options.parse, shebang: target.checked } } })
                    }
                  />
                  {t('parse.shebang').toString()} <Info>{t('Support `#!command` as the first line').toString()}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).arguments}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, arguments: target.checked } } })
                    }
                  />
                  {t('compress.arguments').toString()}{' '}
                  <Info>
                    {t('Replace `arguments[index]` with function parameter name whenever possible.').toString()}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).assignments}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, assignments: target.checked } } })
                    }
                  />
                  {t('compress.assignments').toString()}{' '}
                  <Info>{t('Apply optimizations to assignment expressions').toString()}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).booleans}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, booleans: target.checked } } })
                    }
                  />
                  {t('compress.booleans').toString()}{' '}
                  <Info>
                    {t('Various optimizations for boolean context, for example `!!a ? b : c → a ? b : c`').toString()}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).collapse_vars}
                    onChange={({ target }) =>
                      setOptions({
                        ...options,
                        ...{ compress: { ...options.compress, collapse_vars: target.checked } },
                      })
                    }
                  />
                  {t('compress.collapse_vars')}{' '}
                  <Info>
                    {t(
                      'Apply certain optimizations to binary nodes, e.g. `!(a <= b) → a > b,` attempts to negate binary nodes, e.g. `a = !b && !c && !d && !e → a=!(b||c||d||e)` etc',
                    )}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).conditionals}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, conditionals: target.checked } } })
                    }
                  />
                  {t('compress.conditionals')}{' '}
                  <Info>{t('Apply optimizations for `if-s` and conditional expressions.')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).dead_code}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, dead_code: target.checked } } })
                    }
                  />
                  {t('compress.dead_code')} <Info>{t('Remove unreachable code')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).directives}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, directives: target.checked } } })
                    }
                  />
                  {t('compress.directives')} <Info>{t('remove redundant or non-standard directives')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).drop_console}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, drop_console: target.checked } } })
                    }
                  />
                  {t('compress.drop_console')} <Info>{t('Pass `true` to discard calls to console.* functions.')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).drop_debugger}
                    onChange={({ target }) =>
                      setOptions({
                        ...options,
                        ...{ compress: { ...options.compress, drop_debugger: target.checked } },
                      })
                    }
                  />
                  {t('compress.drop_debugger')} <Info>{t('Remove `debugger;` statements')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).evaluate}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, evaluate: target.checked } } })
                    }
                  />
                  {t('compress.evaluate')} <Info>{t('Attempt to evaluate constant expressions')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).expression}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, expression: target.checked } } })
                    }
                  />
                  {t('compress.expression')}{' '}
                  <Info>
                    {t(
                      'Pass `true` to preserve completion values from terminal statements without `return`, e.g. in bookmarklets.',
                    )}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).functions}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, functions: target.checked } } })
                    }
                  />
                  {t('compress.functions')}{' '}
                  <Info>{t('convert declarations from varto function whenever possible')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).hoist_exports}
                    onChange={({ target }) =>
                      setOptions({
                        ...options,
                        ...{ compress: { ...options.compress, hoist_exports: target.checked } },
                      })
                    }
                  />
                  {t('compress.hoist_exports')}{' '}
                  <Info>
                    {t('hoist `export` statements to facilitate various `compress` and `mangle` optimizations.')}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).hoist_funs}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, hoist_funs: target.checked } } })
                    }
                  />
                  {t('compress.hoist_funs')}
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).hoist_props}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, hoist_props: target.checked } } })
                    }
                  />
                  {t('compress.hoist_props')}{' '}
                  <Info>
                    {t(
                      'Hoist properties from constant object and array literals into regular variables subject to a set of constraints.',
                    )}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).hoist_vars}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, hoist_vars: target.checked } } })
                    }
                  />
                  {t('compress.hoist_vars')}{' '}
                  <Info>
                    {t(
                      'Hoist var declarations (this is `false` by default because it seems to increase the size of the output in general)',
                    )}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).if_return}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, if_return: target.checked } } })
                    }
                  />
                  {t('compress.if_return')} <Info>{t('Optimizations for if/return and if/continue')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).imports}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, imports: target.checked } } })
                    }
                  />
                  {t('compress.imports')} <Info>{t('drop unreferenced import symbols when used with `unused`')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).inline}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, inline: target.checked } } })
                    }
                  />
                  {t('compress.inline')} <Info>{t('Inline calls to function with simple/return statement')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).join_vars}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, join_vars: target.checked } } })
                    }
                  />
                  {t('compress.join_vars')} <Info>{t('join consecutive `var` statements')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).keep_fnames}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, keep_fnames: target.checked } } })
                    }
                  />
                  {t('compress.keep_fnames')}{' '}
                  <Info>{t('Pass true to prevent the compressor from discarding function names.')}</Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).keep_fnames}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, keep_fnames: target.checked } } })
                    }
                  />
                  {t('compress.keep_fnames')}{' '}
                  <Info>
                    {t(
                      'Pass true to prevent Infinity from being compressed into `1/0`, which may cause performance issues on `Chrome`',
                    )}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).loops}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, loops: target.checked } } })
                    }
                  />
                  {t('compress.loops')}{' '}
                  <Info>
                    {t(
                      'Optimizations for `do`, `while` and `for` loops when we can statically determine the condition.',
                    )}
                  </Info>
                </span>
              </label>
              <label>
                <span>
                  <input
                    type="checkbox"
                    checked={!!(options.compress || {}).merge_vars}
                    onChange={({ target }) =>
                      setOptions({ ...options, ...{ compress: { ...options.compress, merge_vars: target.checked } } })
                    }
                  />
                  {t('compress.merge_vars')} <Info>{t('combine and reuse variables.')}</Info>
                </span>
              </label>
              <Checkbox
                checked={!!(options.compress || {}).negate_iife}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, negate_iife: target.checked } } })
                }
              >
                {t('compress.negate_iife')}{' '}
                <Info>
                  {t(
                    'negate `Immediately-Called Function Expressions` where the return value is discarded, to avoid the parens that the code generator would insert.',
                  )}
                </Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).objects}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, objects: target.checked } } })
                }
              >
                {t('compress.objects')} <Info>{t('compact duplicate keys in object literals')}</Info>
              </Checkbox>
              <label>
                <span>
                  {t('compress.passes')}{' '}
                  <input
                    type="number"
                    value={(options.compress || {}).passes || 1}
                    onChange={({ target }) =>
                      setOptions({
                        ...options,
                        ...(target.value ? { compress: { ...options.compress, passes: Number(target.value) } } : {}),
                      })
                    }
                  />
                  <Info>{t('The maximum number of times to run compress.')}</Info>
                </span>
              </label>
              <Checkbox
                checked={!!(options.compress || {}).properties}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, properties: target.checked } } })
                }
              >
                {t('compress.properties')}{' '}
                <Info>
                  {t('Rewrite property access using the dot notation, for example `foo["bar"]` to `foo.bar`')}
                </Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).reduce_funcs}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, reduce_funcs: target.checked } } })
                }
              >
                {t('compress.reduce_funcs')}{' '}
                <Info>
                  {t(
                    'Allows single-use functions to be inlined as function expressions when permissible allowing further optimization.',
                  )}
                </Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).reduce_vars}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, reduce_vars: target.checked } } })
                }
              >
                {t('compress.reduce_vars')}{' '}
                <Info>{t('Improve optimization on variables assigned with and used as constant values.')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).sequences}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, sequences: target.checked } } })
                }
              >
                {t('compress.sequences')}{' '}
                <Info>{t('join consecutive simple statements using the comma operator.')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).side_effects}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, side_effects: target.checked } } })
                }
              >
                {t('compress.side_effects')}{' '}
                <Info>{t('Pass false to disable potentially dropping functions marked as "pure".')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).strings}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, strings: target.checked } } })
                }
              >
                {t('compress.strings')} <Info>{t('compact string concatenations')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).switches}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, switches: target.checked } } })
                }
              >
                {t('compress.switches')} <Info>{t('De-duplicate and remove unreachable `switch` branches.')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).templates}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, templates: target.checked } } })
                }
              >
                {t('compress.templates')}{' '}
                <Info>
                  {t(
                    'Compact template literals by embedding expressions and/or converting to string literals, e.g. `foo ${42}` → "foo 42"',
                  )}
                </Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).unsafe}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, unsafe: target.checked } } })
                }
              >
                {t('compress.unsafe')} <Info>{t('apply "unsafe" transformations')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).toplevel}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, toplevel: target.checked } } })
                }
              >
                {t('compress.toplevel')}{' '}
                <Info>
                  {t(
                    'Drop unreferenced functions ("funcs") and/or variables ("vars") in the top level scope (false by default, true to drop both unreferenced functions and variables)',
                  )}
                </Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).top_retain}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, top_retain: target.checked } } })
                }
              >
                {t('compress.top_retain')}{' '}
                <Info>
                  {t(
                    'Prevent specific toplevel functions and variables from unused removal (can be array, comma-separated, RegExp or function. Implies toplevel)',
                  )}
                </Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).typeofs}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, typeofs: target.checked } } })
                }
              >
                {t('compress.typeofs')} <Info>{t('Transforms typeof foo == "undefined" into foo === void 0.')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).unsafe_comps}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, unsafe_comps: target.checked } } })
                }
              >
                {t('compress.unsafe_comps')}{' '}
                <Info>
                  {t('Compress expressions like a `<= b` assuming none of the operands can be (coerced to) `NaN`.')}
                </Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).unsafe_Function}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, unsafe_Function: target.checked } } })
                }
              >
                {t('compress.unsafe_Function')}{' '}
                <Info>
                  {t('Compress and mangle `Function(args, code)` when both args and code are string literals.')}
                </Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).unsafe_math}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, unsafe_math: target.checked } } })
                }
              >
                {t('compress.unsafe_math')}{' '}
                <Info>
                  {t(
                    'Optimize numerical expressions like `2 * x * 3` into `6 * x`, which may give imprecise floating point results.',
                  )}
                </Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).unsafe_proto}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, unsafe_proto: target.checked } } })
                }
              >
                {t('compress.unsafe_proto')}{' '}
                <Info>{t('Optimize expressions like `Array.prototype.slice.call(a)` into `[].slice.call(a)`')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).unsafe_regexp}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, unsafe_regexp: target.checked } } })
                }
              >
                {t('compress.unsafe_regexp')}{' '}
                <Info>
                  {t('Enable substitutions of variables with `RegExp` values the same way as if they are constants.')}
                </Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).unsafe_undefined}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, unsafe_undefined: target.checked } } })
                }
              >
                {t('compress.unsafe_undefined')}{' '}
                <Info>{t('substitute void 0 if there is a variable named undefined in scope')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).unused}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, unused: target.checked } } })
                }
              >
                {t('compress.unused')} <Info>{t('drop unreferenced functions and variables')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).varify}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, varify: target.checked } } })
                }
              >
                {t('compress.varify')}{' '}
                <Info>{t('convert block-scoped declaractions into `var` whenever safe to do so')}</Info>
              </Checkbox>
              <Checkbox
                checked={!!(options.compress || {}).webkit}
                onChange={({ target }) =>
                  setOptions({ ...options, ...{ compress: { ...options.compress, webkit: target.checked } } })
                }
              >
                {t('compress.webkit')} <Info>{t('Support non-standard Safari/Webkit.')}</Info>
              </Checkbox>
            </Spacing>
          </ResultCode>
        </StyledLayout>
      )}
      {error && <ErrorLayout>{error}</ErrorLayout>}
    </Wrapper>
  );
}
