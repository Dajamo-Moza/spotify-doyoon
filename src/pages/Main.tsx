import React from 'react';
import Layout from '@/components/Layout';
import SideBar from '@/components/Sidebar';
import AlbumList from '@/components/AlbumList';
import PlaylistModal from '@/components/PlaylistModal';

function Main() {
  return (
    <Layout>
      <SideBar />
      <AlbumList />
      <PlaylistModal />
    </Layout>
  );
}

export default Main;
