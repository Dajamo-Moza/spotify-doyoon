import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isPlaylistModalOpenState, currentSavingIdState } from '@/atoms/index';
import HeartIcon from '@/assets/heart.svg';
import DotsIcon from '@/assets/dots.svg';

const TrackItem = ({ name, id }: { name: string; id: string }) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState<boolean>(isPlaylistModalOpenState);
  const [currentSaving, setCurrentSaving] = useRecoilState<string>(currentSavingIdState);

  const saveTrackHandler = () => {
    setIsModalOpen(true);
    setCurrentSaving(id);
  };

  return (
    <StyledTrackItem>
      <TrackName>{name}</TrackName>
      <AbsoluteBox>
        <div className="dots-icon">
          <DotsIcon />
        </div>
        <HeartIcon onClick={saveTrackHandler} />
      </AbsoluteBox>
    </StyledTrackItem>
  );
};

const StyledTrackItem = styled.li`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const TrackName = styled.div`
  width: 29rem;
`;

const AbsoluteBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1rem;

  .dots-icon {
    margin-right: 1rem;
  }
`;

export default TrackItem;
