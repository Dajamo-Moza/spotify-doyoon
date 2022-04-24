import React from 'react';
import styled from 'styled-components';
import PlusIcon from '@/assets/plus.svg';

const PlaylistAddButton = () => {
  return (
    <StyledPlaylistAddButton>
      <PlusIcon />
      NEW PLAYLIST
    </StyledPlaylistAddButton>
  );
};

const StyledPlaylistAddButton = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
  svg > path {
    fill: ${({ theme }) => theme.color.primary};
  }
`;

export default PlaylistAddButton;
