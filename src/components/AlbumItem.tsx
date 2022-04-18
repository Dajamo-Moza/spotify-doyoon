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
        <Info>
          <Title>{title}</Title>
          <Desc>{artist}</Desc>
        </Info>
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
  border-right: 0.1rem solid ${(props) => props.theme.color.black};
`;

const ItemDesc = styled.div`
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
  font-size: ${(props) => props.theme.font.size80};
  margin-right: ${(props) => props.theme.gutter.size56};
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.font.size22};
  margin-bottom: ${(props) => props.theme.gutter.size12};
`;

const Desc = styled.h3`
  font-size: ${(props) => props.theme.font.size16};
`;

export default AlbumItem;
