import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PlaylistItem = ({ name }: { name: string }) => {
  return <StyledPlaylistItem>{name}</StyledPlaylistItem>;
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
