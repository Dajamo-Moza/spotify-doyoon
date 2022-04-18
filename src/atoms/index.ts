import { atom, atomFamily } from 'recoil';
import { Track } from '../types/common';

export const trackListState = atom<Track[]>({
  key: 'trackList',
  default: [],
});

export const currentOpenAlbumState = atom<number>({
  key: 'currentOpenAlbum',
  default: 0,
});
