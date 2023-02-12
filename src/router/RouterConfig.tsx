import { LinkPage } from '@/components/layout/LinksPage';
import { StoragePage } from '@/components/pages/StoragePage';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LinkPage />} />
        <Route path="/storage" element={<StoragePage />} />
      </Routes>
    </BrowserRouter>
  );
};
