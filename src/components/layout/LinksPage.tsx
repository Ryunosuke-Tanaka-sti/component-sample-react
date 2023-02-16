import { Link } from 'react-router-dom';

export const LinkPage = () => {
  return (
    <>
      <ol className="flex flex-row gap-3">
        <Link
          to={'/'}
          className="rounded-xl border-2 border-black bg-slate-300/50 py-2 px-8"
        >
          Home
        </Link>
        <Link
          to={'/storage'}
          className="rounded-xl border-2 border-black bg-slate-300/50 py-2 px-8"
        >
          storage
        </Link>
        <Link
          to={'/firebase'}
          className="rounded-xl border-2 border-black bg-slate-300/50 py-2 px-8"
        >
          firebase
        </Link>
      </ol>
    </>
  );
};
