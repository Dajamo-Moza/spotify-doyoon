import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled.div`
  width: 100vw;
  padding: ${({ theme: { gutter } }) => `${gutter.size136} ${gutter.size88} ${gutter.size28}`};
  background-color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.font.size16};
`;

export default Layout;
