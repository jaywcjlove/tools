import { useState, useRef, useEffect } from 'react';
import { Wrapper, Spacing, StyledLayout, CopyButton, Button } from '@wcj/tools-react-components';
import * as PDF from 'pdfjs-dist';
import styled, { css } from 'styled-components';

// @ts-ignore
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
PDF.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export interface ImageProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  ref?: React.LegacyRef<HTMLImageElement>;
  error?: boolean;
}

const InputPDF = styled.input``;
const Canvas = styled.canvas`
  border: 1px solid var(--color-border-default);
`;

export default function QRCodeGenerator() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [type, setType] = useState<'png' | 'jpg'>('png');
  const [saveAll, setSaveAll] = useState<boolean>(false);
  const [pdf, setPdf] = useState<PDF.PDFDocumentProxy>();
  const [name, setName] = useState<string>();
  const [pageNum, setPageNum] = useState<number>(1);
  const [pageNumInfo, setPageNumInfo] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    if (saveAll) {
      renderPage(() => {
        if (pageNum >= pdf!.numPages) {
          setSaveAll(false);
          return;
        }
        save();
        setPageNum(pageNum + 1);
        setSaveAll(true);
      });
    } else if (pdf && pageNum) {
      renderPage();
    }
  }, [pdf, pageNum, saveAll]);

  function renderPage(callback?: () => void) {
    pdf?.getPage(pageNum).then((page) => {
      let scale = 1.5;
      let viewport = page.getViewport({ scale: scale });
      canvas.current!.height = viewport.height;
      canvas.current!.width = viewport.width;
      canvas.current!.style.width = `${viewport.width}px`;
      canvas.current!.style.height = `${viewport.height}px`;
      const context = canvas.current!.getContext('2d');
      let renderContext = {
        canvasContext: context!,
        viewport: viewport,
      };
      page.render(renderContext).promise.then(callback);
    });
    setPageNumInfo(`${pageNum} / ${pdf!.numPages}`);
  }

  function showPDF(url: string) {
    let loadingTask = PDF.getDocument(url);
    loadingTask.promise.then(
      (doc) => {
        setLoading(false);
        setPdf(doc);
        setPageNum(1);
      },
      (reason) => {
        alert(reason);
      },
    );
  }
  const handleInput = (evn: React.ChangeEvent<HTMLInputElement>) => {
    if (!evn.target.files) return;
    const file = evn.target.files[0];
    setLoading(true);
    setPageNumInfo('');
    setName(file.name);
    let reader = new FileReader();
    reader.onload = (e) => showPDF(e.target?.result as string);
    reader.readAsDataURL(file);
  };
  function save() {
    let a = document.createElement('a');
    let event = new MouseEvent('click');
    a.download = name + '-' + pageNum + '.' + type;
    a.href = canvas.current!.toDataURL(type === 'png' ? 'image/png' : 'image/jpeg');
    a.dispatchEvent(event);
  }
  const savePage = () => {
    if (pageNum > pdf!.numPages) {
      alert('All saved successfully');
      return;
    }
    save();
  };
  function prevPage() {
    if (pageNum <= 1) {
      return;
    }
    setPageNum(pageNum - 1);
  }

  function nextPage() {
    if (pageNum >= pdf!.numPages) {
      return;
    }
    setPageNum(pageNum + 1);
  }
  return (
    <Wrapper>
      <StyledLayout title="Selected PDF File" overflow="initial">
        <Spacing>
          <InputPDF type="file" accept="application/pdf" onChange={handleInput} />
          {pageNumInfo && (
            <Spacing direction="row">
              <Button onClick={prevPage} disabled={pageNum === 1}>
                Previous page
              </Button>
              <Button onClick={nextPage} disabled={!pdf || pageNum >= pdf.numPages}>
                Next page
              </Button>
              <Button onClick={savePage}>Save this page</Button>
              <Button
                onClick={() => {
                  setPageNum(1);
                  setSaveAll(true);
                }}
              >
                Save all
              </Button>
            </Spacing>
          )}
          {pageNumInfo && (
            <div>
              {name}, Page: {pageNumInfo}
            </div>
          )}
          {loading === true && <div>Loading...</div>}
          {loading === false && <Canvas ref={canvas} />}
        </Spacing>
      </StyledLayout>
    </Wrapper>
  );
}
