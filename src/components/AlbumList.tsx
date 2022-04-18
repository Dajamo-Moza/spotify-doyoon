import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import AlbumItem from '@/components/AlbumItem';
import { getAxiosData } from '@/utils/index';
import { Album } from '@/types/common';
import { currentOpenAlbumState } from '@/atoms/index';
import TrackList from './TrackList';
import { useRecoilValue } from 'recoil';

const AlbumList = (): JSX.Element => {
  const [albumList, setAlbumList] = useState<Album[]>([]);
  const currentOpenAlbum = useRecoilValue(currentOpenAlbumState);

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
            {currentOpenAlbum === index && <TrackList key={`track-list-${index}`} />}
          </Fragment>
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
