import React from 'react';
import styled from 'styled-components';
import PlusIcon from '@/assets/plus.svg';

interface PlaylistAddButtonProps {
  onClick: () => void;
}

const PlaylistAddButton = (props: PlaylistAddButtonProps) => {
  return (
    <StyledPlaylistAddButton>
      <PlusIcon />
      NEW PLAYLIST
    </StyledPlaylistAddButton>
  );
};

const StyledPlaylistAddButton = styled.button`
  border: 1px solid red;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
  svg > path {
    fill: ${({ theme }) => theme.color.primary};
  }
`;

export default PlaylistAddButton;
