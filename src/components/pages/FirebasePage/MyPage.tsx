import { useRecoilValue } from 'recoil';

import { userUidState } from '@/provider/firebaseStore';

export const MyPage = () => {
  const uid = useRecoilValue(userUidState);
  return (
    <>
      <main className="flex flex-col gap-5">
        {uid ? '見せられないけど取得できているよ' : '取得失敗してない？'}
      </main>
    </>
  );
};
