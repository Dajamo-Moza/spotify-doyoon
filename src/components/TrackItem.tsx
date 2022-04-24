import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeartIcon from '@/assets/heart.svg';
import { useRecoilState } from 'recoil';
import { isPlaylistModalOpenState, currentSavingIdState } from '@/atoms/index';

const TrackItem = ({ name, id }: { name: string; id: string }) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState<boolean>(isPlaylistModalOpenState);
  const [currentSaving, setCurrentSaving] = useRecoilState<string>(currentSavingIdState);

  const saveTrackHandler = () => {
    setIsModalOpen(true);
    setCurrentSaving(id);
  };

  return (
    <StyledTrackItem>
      <p>{name}</p>
      <HeartIcon onClick={saveTrackHandler} />
    </StyledTrackItem>
  );
};

const StyledTrackItem = styled.li`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`;

export default TrackItem;
