import { Outlet } from 'react-router-dom';

import { LinkComponent } from './LinkComponent';

export const LinkPage = () => {
  return (
    <>
      <header className="my-10">
        <ol className="flex flex-row gap-3">
          <LinkComponent text="Home" url="/" />
          <LinkComponent text="popup" url="/popup" />
        </ol>
      </header>
      <main className="relative">
        <Outlet />
      </main>
    </>
  );
};
