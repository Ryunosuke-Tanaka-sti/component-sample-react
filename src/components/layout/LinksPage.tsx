import { Outlet } from 'react-router-dom';

import { LinkComponent } from './LinkComponent';

export const LinkPage = () => {
  return (
    <>
      <header className="my-10">
        <ol className="flex flex-row gap-3">
          <LinkComponent text="Home" url="/" />
          <LinkComponent text="Storage" url="/storage" />
          <LinkComponent text="errorBoundary" url="/errorBoundary" />
          <LinkComponent text="SWR" url="/swr" />
          <LinkComponent text="Firebase" url="/firebase" />
          <LinkComponent text="Azure" url="/azure" />
        </ol>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
