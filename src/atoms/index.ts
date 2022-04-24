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

export const isPlaylistModalOpenState = atom<boolean>({
  key: 'isPlaylistModalOpen',
  default: false,
});

export const currentSavingIdState = atom<string>({
  key: 'currentSavingIdState',
  default: null,
});
