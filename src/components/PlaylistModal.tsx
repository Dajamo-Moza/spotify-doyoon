import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlaylistItem from '@/components/PlaylistItem';
import { getAxiosData } from '@/utils/getData';
import CloseIcon from '@/assets/close.svg';
import { useRecoilState } from 'recoil';
import { isPlaylistModalOpenState } from '@/atoms/index';

interface PlayList {
  id: string;
  name: string;
}

const PlaylistModal = () => {
  const [playList, setPlayList] = useState<PlayList[]>([]);
  const [isModalOpen, setIsModalOpen] = useRecoilState<boolean>(isPlaylistModalOpenState);

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
    <StyledPlaylistModal isModalOpen={isModalOpen}>
      <Title>MY PLALISTS</Title>
      <AbsoluteBox>
        <CloseIcon onClick={() => setIsModalOpen(false)} />
      </AbsoluteBox>
      {playList?.length > 0 && playList.map((item) => <PlaylistItem name={item.name} />)}
    </StyledPlaylistModal>
  );
};

const StyledPlaylistModal = styled.div<{ isModalOpen: boolean }>`
  display: ${({ isModalOpen }) => (isModalOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  margin-top: ${({ theme }) => theme.gutter.size8};
  margin-bottom: ${({ theme }) => theme.gutter.size28};
`;

const AbsoluteBox = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
`;

export default PlaylistModal;
