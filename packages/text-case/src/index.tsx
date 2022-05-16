import { useState } from "react";
import { Wrapper, Textarea, StyledLayout } from "@wcj/tools-react-components";

export default function TextCase() {
  const [value, setValue] = useState<string>();
  return (
    <Wrapper>
      <StyledLayout title="Input">
        <Textarea
          spellCheck={false}
          value={value}
          onInput={(evn) => setValue((evn.target as HTMLTextAreaElement).value)}
        />
      </StyledLayout>
      <StyledLayout title="Result">
        <div>test</div>
      </StyledLayout>
    </Wrapper>
  );
}
