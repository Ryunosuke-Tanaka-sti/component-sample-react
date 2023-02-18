import { Link, Outlet } from 'react-router-dom';

export const LinkPage = () => {
  return (
    <>
      <header className="my-10">
        <ol className="flex flex-row gap-3">
          <Link
            to={'/'}
            className="rounded-xl border-2 border-black bg-slate-300/50 py-2 px-8"
          >
            Home
          </Link>

          <Link
            to={'/firebase'}
            className="rounded-xl border-2 border-black bg-slate-300/50 py-2 px-8"
          >
            firebase
          </Link>
          <Link
            to={'/firebase/mypage'}
            className="rounded-xl border-2 border-black bg-slate-300/50 py-2 px-8"
          >
            firebase
          </Link>
        </ol>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
