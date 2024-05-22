import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { pageRoutes } from '@/shared/config/routes/routeConfig';

const AppRouter = () => {
  const dataRoutes = Object.values(pageRoutes);

  return (
    <Suspense>
      <Routes>
        {dataRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
