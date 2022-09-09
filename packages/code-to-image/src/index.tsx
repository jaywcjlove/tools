import React, { CSSProperties } from 'react';
import CodeImage from '@wcj/code-image';

const style: CSSProperties = { position: 'relative', height: '100%' };

export default function CodeToImage() {
  return (
    <div style={style}>
      <CodeImage />
    </div>
  );
}
