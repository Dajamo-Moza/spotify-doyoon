import React from 'react';
import styled from 'styled-components';
import GutterBox from '@/components/common/GutterBox';
import { AlbumImage } from '@/types/common';
import DynamicImage from './common/DynamicImage';

const AlbumItem = ({
  count,
  title,
  artist,
  images,
}: {
  count: number;
  title: string;
  artist: string;
  images: AlbumImage[];
}): JSX.Element => {
  return (
    <StyledAlbumItem>
      <DynamicImage images={images} />
      <GutterBox margin={{ right: 'size56' }}>
        <Headline>{count}</Headline>
      </GutterBox>
      <div>
        <Title>{title}</Title>
        <Desc>{artist}</Desc>
      </div>
    </StyledAlbumItem>
  );
};

const StyledAlbumItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-weight: 700;
  padding-bottom: ${(props) => props.theme.gutter.size56};
  border-bottom: 0.1rem solid black;
`;

const Headline = styled.p`
  font-size: ${(props) => props.theme.font.size80};
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.font.size22};
  margin-bottom: ${(props) => props.theme.font.size20};
`;

const Desc = styled.h3`
  font-size: ${(props) => props.theme.font.size16};
`;

export default AlbumItem;
