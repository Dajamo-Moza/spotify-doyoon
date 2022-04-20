import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { trackListState } from '@/atoms/index';
import TrackItem from './TrackItem';

const TrackList = () => {
  const trackList = useRecoilValue(trackListState);
  return (
    <StyledTrackList>
      {trackList.length > 0 && trackList.map((track) => <TrackItem key={track.id} name={track.name} />)}
    </StyledTrackList>
  );
};

const StyledTrackList = styled.ul`
  width: 100%;
  padding: ${({ theme }) => theme.gutter.size12} 0;
`;

export default TrackList;
