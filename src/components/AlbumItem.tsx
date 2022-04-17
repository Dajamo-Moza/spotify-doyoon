import React from 'react';
import styled from 'styled-components';
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
      <ImageContainer>
        <DynamicImage images={images} />
      </ImageContainer>
      <ItemDesc>
        <Headline>{count}</Headline>
        <div>
          <Title>{title}</Title>
          <Desc>{artist}</Desc>
        </div>
      </ItemDesc>
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
  padding: 0 ${(props) => props.theme.gutter.size20};
  width: 14rem;
  height: 12rem;
`;

const ItemDesc = styled.div`
  display: flex;
  flex-basis: 100%;
  padding: 0 ${(props) => props.theme.gutter.size36};
  border-left: 0.1rem solid ${(props) => props.theme.color.black};
  border-bottom: 0.1rem solid ${(props) => props.theme.color.black};
`;

const Headline = styled.p`
  font-size: ${(props) => props.theme.font.size80};
  margin-right: ${(props) => props.theme.gutter.size56};
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.font.size22};
  margin-bottom: ${(props) => props.theme.gutter.size20};
`;

const Desc = styled.h3`
  font-size: ${(props) => props.theme.font.size16};
`;

export default AlbumItem;
