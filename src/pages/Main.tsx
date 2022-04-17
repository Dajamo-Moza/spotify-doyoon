import React from 'react';
import Layout from '@/components/Layout';
import SideBar from '@/components/Sidebar';
import AlbumList from '@/components/AlbumList';

function Main() {
  return (
    <Layout>
      <SideBar />
      <AlbumList />
    </Layout>
  );
}

export default Main;
