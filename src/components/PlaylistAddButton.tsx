import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import PlusIcon from '@/assets/plus.svg';
import { postAxiosData } from '@/utils/axiosHandler';
import { isInputVisibleState } from '../atoms';

interface PlaylistAddButtonProps {
  onClick: () => void;
}

const PlaylistAddButton = () => {
  const [isInputVisible, setIsInputVisible] = useRecoilState<boolean>(isInputVisibleState);

  const onClickAddBtn = () => {
    // TODO: Add logic to get userId info

    setIsInputVisible(true);
  };

  return (
    <StyledPlaylistAddButton onClick={() => onClickAddBtn()}>
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
