import { Fragment, useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, ResultCode, Button } from '@wcj/tools-react-components';
import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toTitleCase,
  toUpperCase,
  toDotCase,
  toLowerCase,
  toPathCase,
  swapCase,
} from './utils';

export * from './utils';

const sample = `Hello World!\nCamel Case`;

function handle(fun: (val?: string) => string | undefined, value: string = '') {
  return value
    .split('\n')
    .filter(Boolean)
    .map((str) => fun(str))
    .join('\n');
}

export default function TextCase() {
  const [value, setValue] = useState<string>();
  const camelCase = handle(toCamelCase, value);
  const pascalCase = handle(toPascalCase, value);
  const snakeCase = handle(toSnakeCase, value);
  const kebabCase = handle(toKebabCase, value);
  const titleCase = handle(toTitleCase, value);
  const swapCaseStr = handle(swapCase, value);
  const pathCase = handle(toPathCase, value);
  const upperCase = handle(toUpperCase, value);
  const lowerCase = handle(toLowerCase, value);
  const dotCase = handle(toDotCase, value);
  return (
    <Wrapper>
      <StyledLayout
        title="Input"
        extra={
          <Fragment>
            <Button onClick={() => setValue(sample)}>Sample</Button>
            {value && <CopyButton value={value} />}
          </Fragment>
        }
      >
        <Textarea
          spellCheck={false}
          value={value}
          onInput={(evn) => setValue((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title="Result">
        <div style={{ height: '100%' }}>
          <ResultCode title="Camel Case" extra={camelCase && <CopyButton value={camelCase} />}>
            {camelCase}
          </ResultCode>
          <ResultCode title="Pascal Case" extra={pascalCase && <CopyButton value={pascalCase} />}>
            {pascalCase}
          </ResultCode>
          <ResultCode title="Snake Case" extra={snakeCase && <CopyButton value={snakeCase} />}>
            {snakeCase}
          </ResultCode>
          <ResultCode title="Kebab Case" extra={kebabCase && <CopyButton value={kebabCase} />}>
            {kebabCase}
          </ResultCode>
          <ResultCode title="Title Case" extra={titleCase && <CopyButton value={titleCase} />}>
            {titleCase}
          </ResultCode>
          <ResultCode title="Swap Case" extra={swapCaseStr && <CopyButton value={swapCaseStr} />}>
            {swapCaseStr}
          </ResultCode>
          <ResultCode title="Path Case" extra={pathCase && <CopyButton value={pathCase} />}>
            {pathCase}
          </ResultCode>
          <ResultCode title="Upper Case" extra={upperCase && <CopyButton value={upperCase} />}>
            {upperCase}
          </ResultCode>
          <ResultCode title="Lower Case" extra={lowerCase && <CopyButton value={lowerCase} />}>
            {lowerCase}
          </ResultCode>
          <ResultCode title="Dot Case" extra={dotCase && <CopyButton value={dotCase} />}>
            {dotCase}
          </ResultCode>
        </div>
      </StyledLayout>
    </Wrapper>
  );
}
