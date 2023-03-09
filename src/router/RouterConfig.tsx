import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { LinkPage } from '@/components/layout/LinksPage';
import { PopupPage } from '@/components/pages/PopupPage';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinkPage />}>
          <Route index element={<>とりま動いたから良しとしようや</>} />

          <Route path="popup" element={<PopupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
