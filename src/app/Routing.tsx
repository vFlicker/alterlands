import { JSX } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { F1Page } from '~/pages/f1';
import { UiKitPage } from '~/pages/UiKitPage';
import { UkrainePage } from '~/pages/ukraine';
import { UserPage } from '~/pages/user/UserPage';
import { UsPoliticsPage } from '~/pages/usPolitics';
import { AppRoute } from '~/shared/libs/router';

function Routing(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.ROOT}
        element={<Navigate to={AppRoute.UKRAINE} replace />}
      />

      <Route path={AppRoute.UKRAINE} element={<UkrainePage />} />
      <Route path={AppRoute.F1} element={<F1Page />} />
      <Route path={AppRoute.US_POLITICS} element={<UsPoliticsPage />} />
      <Route path={AppRoute.USER} element={<UserPage />} />
      <Route path={AppRoute.UI_KIT} element={<UiKitPage />} />
    </Routes>
  );
}

export { Routing };
