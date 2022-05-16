import { PropsWithChildren, useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.main`
  padding: 25px;
  width: 100%;
  min-height: 100%;
  display: flex;
  gap: 25px;
`;

export type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const Textarea = styled.textarea<TextareaProps>`
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  height: 100%;
  width: 100%;
`;

export interface LayoutProps {
  title?: string;
  className?: string;
}

export const Context = styled.div`
  padding-top: 10px;
  flex: 1;
  font-weight: normal;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
`;

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => (
  <label className={props.className}>
    <Title>{props.title}</Title>
    <Context>{props.children}</Context>
  </label>
);

export const StyledLayout = styled(Layout)`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
`;
