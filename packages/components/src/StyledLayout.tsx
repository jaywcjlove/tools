import { PropsWithChildren, forwardRef, useImperativeHandle } from 'react';
import styled, { css } from 'styled-components';

export interface LayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  className?: string;
  extra?: React.ReactNode;
}

export const Context = styled.div`
  padding-top: 10px;
  flex: 1;
  font-weight: normal;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Extra = styled.div`
  display: flex;
  gap: 10px;
`;

export const Layout = forwardRef<HTMLDivElement, PropsWithChildren<LayoutProps>>((props, ref) => {
  const { title, extra, children, ...other } = props;
  return (
    <div ref={ref} {...other}>
      <Title>
        <span> {title} </span>
        <Extra>{extra}</Extra>
      </Title>
      <Context>{children}</Context>
    </div>
  );
});

export const StyledLayout = styled(Layout)`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
`;
