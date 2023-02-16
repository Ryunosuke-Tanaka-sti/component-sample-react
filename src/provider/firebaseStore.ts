import { atom } from 'recoil';

export const userUidState = atom<string>({
  key: 'userUidState',
});
export const authenticatedState = atom<boolean>({
  key: 'authenticatedState',
  default: false,
});
