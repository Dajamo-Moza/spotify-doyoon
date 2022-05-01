import React from 'react';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import SideBar from '@/components/Sidebar';
import AlbumList from '@/components/AlbumList';
import PlaylistModal from '@/components/PlaylistModal';
import { useRecoilValue } from 'recoil';
import { isPlaylistModalOpenState } from '@/atoms/index';

function Main() {
  const isModalOpen = useRecoilValue<boolean>(isPlaylistModalOpenState);

  return (
    <>
      <CoverBackground isModalOpen={isModalOpen} />
      <Layout>
        <SideBar />
        <AlbumList />
        <PlaylistModal />
      </Layout>
    </>
  );
}

const CoverBackground = styled.div<{ isModalOpen: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: black;
  opacity: 0.3;
`;

export default Main;
