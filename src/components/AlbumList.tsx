import React from 'react';
import styled from 'styled-components';
import AlbumItem from '@/components/AlbumItem';

const AlbumList = (): JSX.Element => {
  const data = [
    {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX',
          },
          href: 'https://api.spotify.com/v1/artists/4Kxlr1PRlDKEB0ekOCyHgX',
          id: '4Kxlr1PRlDKEB0ekOCyHgX',
          name: 'BIGBANG',
          type: 'artist',
          uri: 'spotify:artist:4Kxlr1PRlDKEB0ekOCyHgX',
        },
      ],
      available_markets: [''],
      external_urls: {
        spotify: 'https://open.spotify.com/album/2oCAY48bhZvQte0l7apmYC',
      },
      href: 'https://api.spotify.com/v1/albums/2oCAY48bhZvQte0l7apmYC',
      id: '2oCAY48bhZvQte0l7apmYC',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273bedf5e13937a9527ae87889d',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02bedf5e13937a9527ae87889d',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851bedf5e13937a9527ae87889d',
          width: 64,
        },
      ],
      name: 'Still Life',
      release_date: '2022-04-05',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:2oCAY48bhZvQte0l7apmYC',
    },
  ];

  return (
    <StyledAlbumList>
      {data.length > 0 &&
        data.map((item, index) => (
          <AlbumItem
            key={`album-item-${index}`}
            count={index}
            title={item.name}
            artist={item.artists[0].name}
            images={item.images}
          />
        ))}
    </StyledAlbumList>
  );
};

const StyledAlbumList = styled.div`
  display: flex;
  flex-basis: 70%;
`;

export default AlbumList;
