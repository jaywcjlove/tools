import { useState } from 'react';
import { Wrapper, Textarea, StyledLayout, CopyButton, CodeEditor } from '@wcj/tools-react-components';
import { json as jsonLang } from '@codemirror/lang-json';
import styled, { createGlobalStyle } from 'styled-components';
import ExifReader, { Tags, XmpTags, IccTags } from 'exifreader';

export interface ResultProps {
  title?: string;
  className?: string;
}

const GlobalStyle = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] body {
    --color-border-text-case: #30363d;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] body {
    --color-border-text-case: #d0d7de;
  }
`;

const Image = styled.img`
  max-width: 100%;
  padding-top: 16px;
`;

const InputFile = styled.input`
  width: 100%;
  display: block;
`;

const Table = styled.table`
  margin-top: 18px;
  border-spacing: 0;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid var(--color-border-default);
    padding: 5px 8px;
  }
  tbody th {
    text-align: right;
  }
`;

export default function ExifViewer() {
  const [result, setResult] = useState('');
  const [tags, setTags] = useState<Tags & XmpTags & IccTags>();
  const handleChange = (evn: React.ChangeEvent<HTMLInputElement>) => {
    const files = (evn.target as HTMLInputElement).files || [];
    const file = files[0];
    if (file) {
      ExifReader.load(file).then((data) => {
        // The MakerNote tag can be really large. Remove it to lower
        // memory usage if you're parsing a lot of files and saving the tags.
        delete data['MakerNote'];
        // If you want to extract the thumbnail you can use it like
        // this:
        if (data['Thumbnail'] && data['Thumbnail'].image) {
          setResult('data:image/jpg;base64,' + data['Thumbnail'].base64);
        }
        setTags(data);
      });
    }
  };
  const tagsToStr = JSON.stringify(tags || {}, null, 2);
  return (
    <Wrapper>
      <GlobalStyle />
      <StyledLayout title="Choose an image file from your computer:">
        <InputFile type="file" accept="image/*, .heic" onChange={handleChange} />
        {result && <Image src={result} />}
        {tags && (
          <Table>
            <thead>
              <tr>
                <th>Tag name</th>
                <th>Tag description</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(tags).map((keyname, key) => {
                return (
                  <tr key={key}>
                    <th>{keyname}</th>
                    <td>{tags[keyname].description}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </StyledLayout>
      {tags && (
        <StyledLayout title="Result" extra={tags && <CopyButton value={tagsToStr} />}>
          <CodeEditor extensions={[jsonLang()]} readOnly value={tagsToStr} />
        </StyledLayout>
      )}
    </Wrapper>
  );
}
