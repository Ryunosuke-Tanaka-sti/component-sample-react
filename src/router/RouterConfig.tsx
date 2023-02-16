import { Outlet, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { LinkPage } from '@/components/layout/LinksPage';
import { FirebasePage } from '@/components/pages/FirebasePage';
import { MyPage } from '@/components/pages/HasAuthenticated/MyPage';
import { StoragePage } from '@/components/pages/StoragePage';

import {
  RouterAuthenticatedCheck,
  RouterHasAuthenticated,
} from './RouterAuthenticateConfig';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LinkPage />} />
        <Route path="/storage" element={<StoragePage />} />
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
      </Routes>
    </BrowserRouter>
  );
};
