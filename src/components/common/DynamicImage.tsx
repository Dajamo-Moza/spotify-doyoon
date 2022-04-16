import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { AlbumImage } from '@/types/common';

const DynamicImage = ({ images }: { images: AlbumImage[] }): JSX.Element => {
  return <StyledDynamicImage src={images[1].url} />;
};

interface DynamicImageProps {
  src: string;
}

const StyledDynamicImage = styled.img<DynamicImageProps>`
  width: 100%;
  height: 100%;
`;

export default DynamicImage;
