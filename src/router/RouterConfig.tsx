import { Outlet, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { LinkPage } from '@/components/layout/LinksPage';
import { ErrorBoundaryPage } from '@/components/pages/ErrorBoundaryPage';
import { FirebasePage } from '@/components/pages/FirebasePage/FirebasePage';
import { MyPage } from '@/components/pages/FirebasePage/MyPage';
import { StoragePage } from '@/components/pages/StoragePage';
import { SwrPage } from '@/components/pages/SwrPage';

import {
  RouterAuthenticatedCheck,
  RouterHasAuthenticated,
} from './RouterAuthenticateConfig';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinkPage />}>
          <Route index element={<>とりま動いたから良しとしようや</>} />
          <Route path="/storage" element={<StoragePage />} />
          <Route path="/errorBoundary" element={<ErrorBoundaryPage />} />
          <Route
            path="/firebase"
            element={<RouterAuthenticatedCheck component={<Outlet />} />}
          >
            <Route index element={<FirebasePage />} />
            <Route
              path="mypage"
              element={<RouterHasAuthenticated component={<MyPage />} />}
            />
          </Route>
          <Route path="swr" element={<SwrPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
