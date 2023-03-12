import { Outlet } from 'react-router-dom';

import { LinkComponent } from './LinkComponent';

export const LinkPage = () => {
  return (
    <>
      <header className="my-10">
        <ol className="flex flex-row gap-3">
          <LinkComponent url="/" />
          <LinkComponent url="/storage" />
          <LinkComponent url="/errorBoundary" />
          <LinkComponent url="/swr" />
          <LinkComponent url="/firebase" />
          <LinkComponent url="/azure" />
          <LinkComponent url="/axios" />
          <LinkComponent url="/microCMS" />
          <LinkComponent url="/popup" />
          <LinkComponent url="/cat" />
        </ol>
      </header>
      <main className="relative">
        <Outlet />
      </main>
    </>
  );
};
