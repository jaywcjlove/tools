import { useState } from 'react';
import {
  Wrapper,
  Textarea,
  StyledLayout,
  CopyButton,
  ResultCode,
  Spacing,
  CodeLineCopy,
} from '@wcj/tools-react-components';
import md5 from 'crypto-js/md5';
import sha224 from 'crypto-js/sha224';
import sha256 from 'crypto-js/sha256';
import sha512 from 'crypto-js/sha512';
import sha384 from 'crypto-js/sha384';
import sha1 from 'crypto-js/sha1';
import ripemd160 from 'crypto-js/ripemd160';

export default function Hash() {
  const [value, setValue] = useState('');
  const handleChange = (evn: React.ChangeEvent<HTMLTextAreaElement>) => {
    const str = (evn.target as HTMLTextAreaElement).value || '';
    setValue(str);
  };
  const md5_Str = value ? md5(value).toString() : '';
  const sha1_Str = value ? sha1(value).toString() : '';
  const sha224_Str = value ? sha224(value).toString() : '';
  const sha256_Str = value ? sha256(value).toString() : '';
  const sha512_Str = value ? sha512(value).toString() : '';
  const sha384_Str = value ? sha384(value).toString() : '';
  const ripemd160_Str = value ? ripemd160(value).toString() : '';
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
        <ResultCode title="SHA224" extra={sha224_Str && <CopyButton value={sha224_Str} />}>
          {sha224_Str}
        </ResultCode>
        <ResultCode title="SHA384" extra={sha384_Str && <CopyButton value={sha384_Str} />}>
          {sha384_Str}
        </ResultCode>
        <ResultCode title="SHA256" extra={sha256_Str && <CopyButton value={sha256_Str} />}>
          {sha256_Str}
        </ResultCode>
        <ResultCode title="SHA512" extra={sha512_Str && <CopyButton value={sha512_Str} />}>
          {sha512_Str}
        </ResultCode>
        <ResultCode title="RIPEMD160" extra={ripemd160_Str && <CopyButton value={ripemd160_Str} />}>
          {ripemd160_Str}
        </ResultCode>
      </StyledLayout>
    </Wrapper>
  );
}
