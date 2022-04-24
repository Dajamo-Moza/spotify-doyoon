import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PlaylistItem = ({ name }: { name: string }) => {
  return <StyledPlaylistItem>{name}</StyledPlaylistItem>;
};

const StyledPlaylistItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-indent: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  height: 4rem;
`;

export default PlaylistItem;
