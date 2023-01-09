import { LayoutEditorConverter } from '@wcj/tools-react-components';
import { parse, stringify } from 'yaml';
import { json } from '@codemirror/lang-json';
import { StreamLanguage } from '@codemirror/language';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import * as sample from './sample';

export default function JSON2XML() {
  return (
    <LayoutEditorConverter
      sample={sample}
      leftProps={{
        title: 'JSON',
        extensions: [json()],
        onLeftInput: (val) => {
          return stringify(JSON.parse(val));
        },
      }}
      rightProps={{
        title: 'YAML',
        extensions: [StreamLanguage.define(yaml)],
        onRightInput: (val) => {
          return JSON.stringify(parse(val), null, 2);
        },
      }}
    />
  );
}
