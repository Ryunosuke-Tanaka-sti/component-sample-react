import { Outlet, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { LinkPage } from '@/components/layout/LinksPage';
import { AzureADPage } from '@/components/pages/AADB2C/AzureADPage';
import { MyPage as MypageAADB2C } from '@/components/pages/AADB2C/MyPage';
import { ErrorBoundaryPage } from '@/components/pages/ErrorBoundaryPage';
import { FirebasePage } from '@/components/pages/FirebasePage/FirebasePage';
import { MyPage as MyPageFirebase } from '@/components/pages/FirebasePage/MyPage';
import { StoragePage } from '@/components/pages/StoragePage';
import { SwrPage } from '@/components/pages/SwrPage';

import {
  RouterAuthenticatedCheck as RouterAuthenticatedCheckAADB2C,
  RouterHasAuthenticated as RouterHasAuthenticatedAADB2C,
} from './RouterAuthenticateConfigAADB2C';
import {
  RouterAuthenticatedCheck as RouterAuthenticatedCheckFirebase,
  RouterHasAuthenticated as RouterHasAuthenticatedFirebase,
} from './RouterAuthenticateConfigFirebase';

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
            element={
              <RouterAuthenticatedCheckFirebase component={<Outlet />} />
            }
          >
            <Route index element={<FirebasePage />} />
            <Route
              path="mypage"
              element={
                <RouterHasAuthenticatedFirebase
                  component={<MyPageFirebase />}
                />
              }
            />
          </Route>
          <Route path="swr" element={<SwrPage />} />
          <Route
            path="/azure"
            element={<RouterAuthenticatedCheckAADB2C component={<Outlet />} />}
          >
            <Route index element={<AzureADPage />} />
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
