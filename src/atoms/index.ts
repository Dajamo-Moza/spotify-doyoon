import { atom, atomFamily } from 'recoil';
import { Track } from '../types/common';

export const trackListState = atom<Track[]>({
  key: 'trackList',
  default: [],
});

export const currentOpenIndexState = atom<number | null>({
  key: 'currentOpenIndex',
  default: null,
});
