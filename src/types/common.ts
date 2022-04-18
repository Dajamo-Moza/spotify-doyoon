export interface TodoContent {
  id: string;
  title: string;
  description: string;
}

export interface AlbumImage {
  width: number;
  height: number;
  url: string;
}

export interface Artist {
  id: string;
  name: string;
}
export interface Album {
  id: string;
  name: string;
  release_date: string;
  artists: Artist[];
  images: AlbumImage[];
  total_tracks: number;
  tracks: Track[];
}

export interface Track {
  id: string;
  name: string;
  artists: Artist[];
}
