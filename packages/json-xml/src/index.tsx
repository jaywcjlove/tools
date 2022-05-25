import { LayoutEditorConverter } from '@wcj/tools-react-components';
import { XMLParser, XMLBuilder, XMLValidator } from 'fast-xml-parser';
import { json } from '@codemirror/lang-json';
import { xml } from '@codemirror/lang-xml';
import * as sample from './sample';

export default function JSON2XML() {
  return (
    <LayoutEditorConverter
      sample={sample}
      leftProps={{
        title: 'JSON',
        extensions: [json()],
        onLeftInput: (val) => {
          const jsonobj = JSON.parse(val);
          const builder = new XMLBuilder({ format: true });
          const xmlStr = builder.build(jsonobj);
          return xmlStr;
        },
      }}
      rightProps={{
        title: 'XML',
        extensions: [xml()],
        onRightInput: (val) => {
          const parser = new XMLParser({});
          const result = XMLValidator.validate(val, {});
          if (typeof result !== 'boolean' && result.err) {
            throw new Error(`XML: ${result.err.msg}, line: ${result.err.line}, col: ${result.err.col}`);
          }
          const jsonStr = JSON.stringify(parser.parse(val), null, 2);
          return jsonStr;
        },
      }}
    />
  );
}
