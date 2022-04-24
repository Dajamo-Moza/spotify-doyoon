import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { currentSavingIdState } from '@/atoms/index';
import { postAxiosData } from '@/utils/index';

const PlaylistItem = ({ id, name }: { id: string; name: string }) => {
  const currentSaving = useRecoilValue<string>(currentSavingIdState);

  const onAddTrackToPlaylist = (currentSavingTrackId: string) => {
    postAxiosData({
      url: `/playlists/${id}/tracks`,
      query: {
        uris: `spotify:track:${currentSavingTrackId}`,
      },
    });
  };

  return (
    <StyledPlaylistItem>
      <button onClick={() => onAddTrackToPlaylist(currentSaving)}>{name}</button>
    </StyledPlaylistItem>
  );
};

const StyledPlaylistItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  text-indent: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  height: 4rem;
  cursor: pointer;

  &:not(li:last-of-type) {
    margin-bottom: ${({ theme }) => theme.gutter.size8};
  }

  &:hover {
    background-color: #d3f2e3;

    &:after {
      position: fixed;
      right: 5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.primary};
      content: 'SAVE';
    }
  }
`;

export default PlaylistItem;
