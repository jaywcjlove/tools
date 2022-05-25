import { LayoutEditorConverter } from '@wcj/tools-react-components';
import ini from 'ini';
import { StreamLanguage } from '@codemirror/language';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import { json } from '@codemirror/lang-json';
import * as sample from './sample';

export default function JSON2Ini() {
  return (
    <LayoutEditorConverter
      sample={sample}
      leftProps={{
        title: 'JSON',
        extensions: [json()],
        onLeftInput: (val) => {
          const iniStr = ini.stringify(JSON.parse(val));
          return iniStr;
        },
      }}
      rightProps={{
        title: 'INI',
        extensions: [StreamLanguage.define(yaml)],
        onRightInput: (val) => {
          const jsonStr = JSON.stringify(ini.parse(val), null, 2);
          return jsonStr;
        },
      }}
    />
  );
}
