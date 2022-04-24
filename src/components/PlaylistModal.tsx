import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlaylistItem from '@/components/PlaylistItem';
import { getAxiosData } from '@/utils/getData';

interface PlayList {
  id: string;
  name: string;
}

const PlaylistModal = () => {
  const [playList, setPlayList] = useState<PlayList[]>([]);
  const getPlayListData = async () => {
    const data = await getAxiosData<PlayList[]>({
      url: '/me/playlists',
      params: {
        limit: 8,
      },
    });
    setPlayList(data);
  };

  useEffect(() => {
    getPlayListData();
  }, []);

  return (
    <StyledPlaylistModal>
      <Title>MY PLALISTS</Title>
      {playList?.length > 0 && playList.map((item) => <PlaylistItem name={item.name} />)}
    </StyledPlaylistModal>
  );
};

const StyledPlaylistModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  background-color: #3a3a3a;
  width: 40rem;
  min-height: 50rem;
  padding: 4rem;
`;

const Title = styled.h2`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size20};
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ theme }) => theme.gutter.size28};
`;

export default PlaylistModal;
