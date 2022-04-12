import { atom, atomFamily } from 'recoil';
import { TodoContent } from '../../types';

export const todoContentState = atom<TodoContent[]>({
  key: 'todoContents',
  default: [],
});

export const todoCompleteState = atomFamily<boolean, string>({
  key: 'todoCompleteState',
  default: false,
});

export const fontSizeState = atom<number>({
  key: 'FontSize',
  default: 12,
});
