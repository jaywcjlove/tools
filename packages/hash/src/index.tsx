import { useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, ResultCode } from '@wcj/tools-react-components';
import md5 from 'crypto-js/md5';
import sha256 from 'crypto-js/sha256';
import sha512 from 'crypto-js/sha512';
import sha1 from 'crypto-js/sha1';

export default function Hash() {
  const [value, setValue] = useState('');
  const handleChange = (evn: React.ChangeEvent<HTMLTextAreaElement>) => {
    const str = (evn.target as HTMLTextAreaElement).value || '';
    if (str) {
      setValue(str);
    }
  };
  const md5_Str = value ? md5(value).toString() : '';
  const sha1_Str = value ? sha1(value).toString() : '';
  const sha256_Str = value ? sha256(value).toString() : '';
  const sha512_Str = value ? sha512(value).toString() : '';
  return (
    <Wrapper>
      <StyledLayout title="Input" extra={value && <CopyButton value={value} />}>
        <Textarea spellCheck={false} onChange={handleChange} defaultValue={value} />
      </StyledLayout>
      <StyledLayout title="Result">
        <ResultCode title="MD5" extra={md5_Str && <CopyButton value={md5_Str} />}>
          {md5_Str}
        </ResultCode>
        <ResultCode title="SHA1" extra={sha1_Str && <CopyButton value={sha1_Str} />}>
          {sha1_Str}
        </ResultCode>
        <ResultCode title="SHA256" extra={sha256_Str && <CopyButton value={sha256_Str} />}>
          {sha256_Str}
        </ResultCode>
        <ResultCode title="SHA512" extra={sha512_Str && <CopyButton value={sha512_Str} />}>
          {sha512_Str}
        </ResultCode>
      </StyledLayout>
    </Wrapper>
  );
}
