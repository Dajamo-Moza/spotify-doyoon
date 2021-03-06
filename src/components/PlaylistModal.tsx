import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isPlaylistModalOpenState, isInputVisibleState, playlistNameState } from '@/atoms/index';
import { getAxiosData, postAxiosData } from '@/utils/axiosHandler';
import CloseIcon from '@/assets/close.svg';
import PlaylistItem from '@/components/PlaylistItem';
import PlaylistAddButton from '@/components/PlaylistAddButton';
interface PlayList {
  id: string;
  name: string;
}

const PlaylistModal = () => {
  const [playList, setPlayList] = useState<PlayList[]>([]);
  const [isModalOpen, setIsModalOpen] = useRecoilState<boolean>(isPlaylistModalOpenState);
  const [isInputVisible, setIsInputVisible] = useRecoilState<boolean>(isInputVisibleState);
  const [playlistName, setPlaylistName] = useRecoilState<string>(playlistNameState);

  useEffect(() => {
    getPlayListData();
  }, []);

  const getPlayListData = async () => {
    // TODO: 다른사람이 만든 플레이리스트는 보여주지 않아야함
    const data = await getAxiosData<PlayList[]>({
      url: '/me/playlists',
      params: {
        limit: 8,
      },
    });
    setPlayList(data);
  };

  const onInputNewPlaylist = (e: FormEvent<HTMLInputElement>) => {
    setPlaylistName(e.currentTarget.value);
  };

  const saveNewPlaylist = async () => {
    // TODO: Add logic to get userId info
    const userId = 'mtc7tndk6967yf89bf4oa8f9t';

    await postAxiosData({
      url: `/users/${userId}/playlists`,
      body: {
        name: playlistName,
      },
    });

    setIsInputVisible(false);
    getPlayListData();
  };

  return (
    <StyledPlaylistModal isModalOpen={isModalOpen}>
      <Title>MY PLAYLISTS</Title>
      <AbsoluteBox>
        <CloseIcon onClick={() => setIsModalOpen(false)} />
      </AbsoluteBox>
      {isInputVisible ? (
        <>
          <NewPlaylistInput onInput={onInputNewPlaylist} />
          <SubmitButton onClick={saveNewPlaylist}>OK</SubmitButton>
        </>
      ) : (
        playList?.length > 0 && playList.map((item) => <PlaylistItem key={item.id} id={item.id} name={item.name} />)
      )}
      {!isInputVisible && <PlaylistAddButton />}
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

const NewPlaylistInput = styled.input`
  width: 100%;
  height: 4rem;
  text-indent: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.black};
`;

const SubmitButton = styled.button`
  margin-top: ${({ theme }) => theme.gutter.size16};
  color: ${({ theme }) => theme.color.primary};
`;

export default PlaylistModal;
