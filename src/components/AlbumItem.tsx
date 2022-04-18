import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import DynamicImage from './common/DynamicImage';
import { AlbumImage, Track } from '@/types/common';
import { trackListState } from '@/atoms/index';
import { getAxiosData } from '@/utils/index';

interface AlbumItemProps {
  id: string;
  count: number;
  title: string;
  artist: string;
  images: AlbumImage[];
}

const AlbumItem = ({ id, count, title, artist, images }: AlbumItemProps): JSX.Element => {
  const [trackList, setTrackList] = useRecoilState<Track[]>(trackListState);
  const [isItemOpen, setIsItemOpen] = useState(false);

  const onOpenTrackList = () => {
    setIsItemOpen(!isItemOpen);
  };

  useEffect(() => {
    const getTrackListData = async () => {
      if (!isItemOpen) return;

      try {
        const trackListData = await getAxiosData<Track[]>({
          url: `/albums/${id}`,
          key: 'tracks',
          params: {
            market: 'KR',
          },
        });
        setTrackList(trackListData);
      } catch (err) {
        console.error(err);
      }
    };

    getTrackListData();
  }, [isItemOpen]);

  return (
    <StyledAlbumItem>
      <ImageContainer>
        <DynamicImage images={images} />
      </ImageContainer>
      <AlbumDesc onClick={onOpenTrackList}>
        <Headline>{count}</Headline>
        <Info>
          <Title>{title}</Title>
          <Desc>{artist}</Desc>
        </Info>
      </AlbumDesc>
    </StyledAlbumItem>
  );
};

const StyledAlbumItem = styled.div`
  display: flex;
  width: 100%;
  font-weight: 700;
`;

const ImageContainer = styled.div`
  box-sizing: content-box;
  padding: ${(props) => `${props.theme.gutter.size8} ${props.theme.gutter.size20}`};
  width: 14rem;
  height: 14rem;
  flex-shrink: 0;
  border-right: 0.1rem solid ${(props) => props.theme.color.black};
`;

const AlbumDesc = styled.div`
  cursor: pointer;
  display: flex;
  flex-basis: 100%;
  padding: ${(props) => `0 ${props.theme.gutter.size36}`};
  border-bottom: 0.1rem solid ${(props) => props.theme.color.black};
  margin-left: ${(props) => props.theme.gutter.size20};
`;

const Info = styled.div`
  transform: translateY(1.1em);
`;

const Headline = styled.p`
  flex: 0 0 12rem;
  font-size: ${(props) => props.theme.font.size80};
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.font.size22};
  margin-bottom: ${(props) => props.theme.gutter.size12};
`;

const Desc = styled.h3`
  font-size: ${(props) => props.theme.font.size16};
`;

export default AlbumItem;
