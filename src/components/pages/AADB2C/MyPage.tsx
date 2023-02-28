import { useAADB2CAuth } from '@/hooks/useAADB2CAuth';

export const MyPage = () => {
  const { userId } = useAADB2CAuth();
  return (
    <>
      <main className="flex flex-col gap-5">{userId}</main>
    </>
  );
};
