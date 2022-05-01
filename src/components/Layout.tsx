import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isPlaylistModalOpenState } from '@/atoms/index';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  const isModalOpen = useRecoilValue<boolean>(isPlaylistModalOpenState);

  return <StyledLayout isModalOpen={isModalOpen}>{children}</StyledLayout>;
};

const StyledLayout = styled.div<{ isModalOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: ${({ theme: { gutter } }) => `${gutter.size136} ${gutter.size88} ${gutter.size28}`};
  background-color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.font.size16};
  overflow: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : 'scroll')};
`;

export default Layout;
