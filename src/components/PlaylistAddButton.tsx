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
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.gutter.size16};
  color: ${({ theme }) => theme.color.primary};
  svg > path {
    fill: ${({ theme }) => theme.color.primary};
  }
`;

export default PlaylistAddButton;
