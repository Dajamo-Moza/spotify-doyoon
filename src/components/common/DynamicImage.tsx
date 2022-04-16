import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { AlbumImage } from '@/types/common';

const DynamicImage = ({ images }: { images: AlbumImage[] }): JSX.Element => {
  return <StyledDynamicImage images={images} />;
};

interface PropType {
  images: AlbumImage[];
}

const StyledDynamicImage = styled.div<PropType>`
  @media (min-width: 60.1rem) {
    border: 1px solid red;
    background: ${(props) => `url(${props.images[1].url})`};
    width: ${(props) => `${props.images[1].width / 10}rem`};
    height: ${(props) => `${props.images[1].height / 10}rem`};
  }
  @media (max-width: 60rem) {
    border: 1px solid pink;
    background: ${(props) => `url(${props.images[2].url})`};
    width: ${(props) => `${props.images[2].width / 10}rem`};
    height: ${(props) => `${props.images[2].height / 10}rem`};
  }

  width: ${(props) => `${props.images[0].width / 10}rem`};
  height: ${(props) => `${props.images[0].height / 10}rem`};
  background: ${(props) => `url(${props.images[0].url})`};
`;

export default DynamicImage;
