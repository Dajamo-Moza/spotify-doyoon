import React, { Fragment, useEffect, useState } from 'react';
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

      setAlbumList(albumListData);
    };
    getAlbumListData();
  }, []);

  return (
    <StyledAlbumList>
      {albumList.length > 0 &&
        albumList.map((item, index) => (
          <Fragment key={`album-item-${item.id}`}>
            <AlbumItem
              key={`album-item-${item.id}`}
              id={item.id}
              index={index}
              count={index + 1}
              title={item.name}
              artist={item.artists[0].name}
              images={item.images}
            />
          </Fragment>
        ))}
    </StyledAlbumList>
  );
};

const StyledAlbumList = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 70%;

  li {
    padding: 0.2rem 0;

    &:not(:last-child) {
      border-bottom: 0.1rem solid ${({ theme }) => theme.color.black};
    }
  }
`;

export default AlbumList;
