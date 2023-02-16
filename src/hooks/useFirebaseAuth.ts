import { signInWithRedirect, signOut } from 'firebase/auth';

import { auth, provider } from './authFirebase';

export const useFirebaseAuth = () => {
  const signInAction = () => {
    signInWithRedirect(auth, provider).catch((err) => {
      alert(err);
    });
  };
  const singOutAction = () => {
    signOut(auth);
  };

  return { signInAction, singOutAction };
};
