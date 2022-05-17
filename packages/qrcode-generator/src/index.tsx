import { useState, useRef } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, ResultCode } from '@wcj/tools-react-components';
import QRCode from 'qrcode';
import styled, { css } from 'styled-components';

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;

export interface ImageProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  ref?: React.LegacyRef<HTMLImageElement>;
  error?: boolean;
}

const Image = styled.img<ImageProps>`
  ${(props) =>
    props.error &&
    css`
      display: none;
    `}
`;

export default function QRCodeGenerator() {
  const [value, setValue] = useState<string>();
  const [error, setError] = useState<string>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const imgLightRef = useRef<HTMLImageElement>(null);
  const handleInput = (value: string = '') => {
    setValue(value);
    QRCode.toCanvas(canvasRef.current, value, (error) => {
      error ? setError(error.message) : setError('');
    });

    QRCode.toDataURL(value, { type: 'image/png', color: { dark: '#fff', light: '#333' } }, (err, url) => {
      err ? setError(err.message) : setError('');
      if (url) imgRef.current!.src = url;
    });

    QRCode.toDataURL(value, { type: 'image/png' }, (err, url) => {
      err ? setError(err.message) : setError('');
      if (url) imgLightRef.current!.src = url;
    });
  };
  return (
    <Wrapper>
      <StyledLayout title="Input" extra={value && <CopyButton value={value} />}>
        <Textarea
          spellCheck={false}
          value={value}
          onInput={(evn) => handleInput((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title="QR Code Image">
        <ResultCode style={!!error ? { display: 'none' } : {}}>
          <canvas ref={canvasRef} />
        </ResultCode>
        <ResultCode style={!!error ? { display: 'none' } : {}}>
          <Image error={!!error} ref={imgLightRef} />
          <Image error={!!error} ref={imgRef} />
        </ResultCode>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </StyledLayout>
    </Wrapper>
  );
}
