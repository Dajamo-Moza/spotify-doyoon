import React, { useEffect } from 'react';
import styled from 'styled-components';
import AlbumItem from '@/components/AlbumItem';
import { useAxiosGet } from '@/hooks/useAxios';
import { Album } from '@/types/common';

const AlbumList = (): JSX.Element => {
  const newAlbumList = useAxiosGet<Album[]>({
    initialValue: [],
    url: '/browse/new-releases',
    key: 'albums',
    params: {
      country: 'KR',
    },
  });

  return (
    <StyledAlbumList>
      {newAlbumList.length > 0 &&
        newAlbumList.map((item, index) => (
          <AlbumItem
            key={`album-item-${index}`}
            count={index}
            title={item.name}
            artist={item.artists[0].name}
            images={item.images}
          />
        ))}
    </StyledAlbumList>
  );
};

const StyledAlbumList = styled.div`
  display: flex;
  flex-basis: 70%;
`;

export default AlbumList;
