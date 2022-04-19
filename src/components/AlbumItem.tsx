import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import DynamicImage from './common/DynamicImage';
import { AlbumImage, Track } from '@/types/common';
import { currentOpenIndexState, trackListState } from '@/atoms/index';
import { getAxiosData } from '@/utils/index';
import TrackList from '@/components/TrackList';
interface AlbumItemProps {
  id: string;
  index: number;
  count: number;
  title: string;
  artist: string;
  images: AlbumImage[];
}

const AlbumItem = ({ id, index, count, title, artist, images }: AlbumItemProps): JSX.Element => {
  const [currentOpenIndex, setCurrentOpenIndex] = useRecoilState<number>(currentOpenIndexState);
  const [trackList, setTrackList] = useRecoilState<Track[]>(trackListState);
  const [isCurrentOpen, setIsCurrentOpen] = useState(false);

  const onOpenTrackList = (index: number) => {
    setCurrentOpenIndex(index);
  };

  useEffect(() => {
    if (!currentOpenIndex) return;

    setIsCurrentOpen(currentOpenIndex === index);
  }, [currentOpenIndex]);

  useEffect(() => {
    if (!isCurrentOpen) return;
    const getTrackListData = async () => {
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
  }, [isCurrentOpen]);

  return (
    <StyledAlbumItem isCurrentOpen={isCurrentOpen}>
      <TrackContainer isCurrentOpen={isCurrentOpen}>
        <ImageContainer isCurrentOpen={isCurrentOpen}>
          <DynamicImage images={images} />
        </ImageContainer>
        {isCurrentOpen && <TrackList key={`track-list-${index}`} />}
      </TrackContainer>
      <AlbumDesc onClick={() => onOpenTrackList(index)}>
        <Headline>{count}</Headline>
        <Info>
          <Title>{title}</Title>
          <Desc>{artist}</Desc>
        </Info>
      </AlbumDesc>
    </StyledAlbumItem>
  );
};

interface isCurrentOpenProps {
  isCurrentOpen: boolean;
}

const StyledAlbumItem = styled.div<isCurrentOpenProps>`
  display: flex;
  flex-direction: ${({ isCurrentOpen }) => (isCurrentOpen ? 'column-reverse' : 'row')};
  width: 100%;
  font-weight: 700;
`;

const TrackContainer = styled.div<isCurrentOpenProps>`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div<isCurrentOpenProps>`
  box-sizing: content-box;
  padding: ${(props) => `${props.theme.gutter.size8} ${props.theme.gutter.size20}`};
  flex-shrink: 0;
  width: ${({ isCurrentOpen }) => (isCurrentOpen ? '30rem' : '14rem')};
  height: ${({ isCurrentOpen }) => (isCurrentOpen ? '30rem' : '14rem')};
  border-right: ${({ theme, isCurrentOpen }) => !isCurrentOpen && `0.1rem solid ${theme.color.black}`};
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
