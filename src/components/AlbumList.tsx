import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import AlbumItem from '@/components/AlbumItem';
import { getAxiosData } from '@/utils/index';
import { Album } from '@/types/common';

const AlbumList = (): JSX.Element => {
  const [albumList, setAlbumList] = useState<Album[]>([]);

  useEffect(() => {
    const getAlbumListData = async () => {
      const albumListData = await getAxiosData<Album[]>({
        url: '/browse/new-releases',
        key: 'albums',
        params: {
          country: 'KR',
        },
      });

      console.log(albumListData);
      setAlbumList(albumListData);
    };
    getAlbumListData();
  }, []);

  return (
    <StyledAlbumList>
      {albumList.length > 0 &&
        albumList.map((item, index) => (
          <AlbumItem
            key={`album-item-${item.id}`}
            id={item.id}
            count={index + 1}
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
  flex-direction: column;
  flex-basis: 70%;
`;

export default AlbumList;
