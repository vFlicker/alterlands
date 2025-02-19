import { JSX } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { F1Page } from '~/pages/f1Page';
import { UiKitPage } from '~/pages/UiKitPage';
import { UkrainePage } from '~/pages/ukrainePage';
import { UsPoliticsPage } from '~/pages/usPoliticsPage';
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
      <Route path={AppRoute.UI_KIT} element={<UiKitPage />} />
    </Routes>
  );
}

export { Routing };
