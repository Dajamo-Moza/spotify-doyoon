import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import AlbumItem from '@/components/AlbumItem';
import { currentOpenIndexState } from '@/atoms/index';
import { useRecoilValue } from 'recoil';
import { getAxiosData } from '@/utils/index';
import { Album } from '@/types/common';

const AlbumList = (): JSX.Element => {
  const [albumList, setAlbumList] = useState<Album[]>([]);

  const currentOpenIndex = useRecoilValue<number>(currentOpenIndexState);

  const getAlbumListData = async () => {
    const data = await getAxiosData<Album[]>({
      url: '/browse/new-releases',
      key: 'albums',
      params: {
        country: 'KR',
      },
    });

    setAlbumList(
      data.map((item) => {
        return {
          ...item,
          isCurrentOpen: false,
        };
      })
    );
  };

  useEffect(() => {
    getAlbumListData();
  }, []);

  useEffect(() => {
    if (!albumList.length) return;
    const newList = albumList.map((item, index) => {
      if (index === currentOpenIndex) {
        return { ...albumList[currentOpenIndex], isCurrentOpen: true };
      }
      return { ...item, isCurrentOpen: false };
    });

    setAlbumList(newList);
  }, [currentOpenIndex]);

  return (
    <StyledAlbumList>
      {albumList.length > 0 &&
        albumList.map((item, index) => (
          <AlbumItem
            key={`album-item-${item.id}`}
            id={item.id}
            index={index}
            count={index + 1}
            title={item.name}
            artist={item?.artists[0]?.name}
            images={item.images}
            isCurrentOpen={item.isCurrentOpen}
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
