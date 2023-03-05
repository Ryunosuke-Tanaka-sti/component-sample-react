import { Outlet, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { LinkPage } from '@/components/layout/LinksPage';
import { AzureADB2CPage } from '@/components/pages/AADB2C/AzureADPage';
import { MyPage as MypageAADB2C } from '@/components/pages/AADB2C/MyPage';

import {
  RouterAuthenticatedCheck as RouterAuthenticatedCheckAADB2C,
  RouterHasAuthenticated as RouterHasAuthenticatedAADB2C,
} from './RouterAuthenticateConfigAADB2C';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinkPage />}>
          <Route index element={<>とりま動いたから良しとしようや</>} />

          <Route
            path="/azure"
            element={<RouterAuthenticatedCheckAADB2C component={<Outlet />} />}
          >
            <Route index element={<AzureADB2CPage />} />
            <Route
              path="mypage"
              element={
                <RouterHasAuthenticatedAADB2C component={<MypageAADB2C />} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
