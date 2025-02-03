import { JSX } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Formula1Page } from '~/pages/Formula1Page';
import { UiKitPage } from '~/pages/UiKitPage';
import { UkrainePage } from '~/pages/UkrainePage';
import { UsPoliticsPage } from '~/pages/UsPoliticsPage';
import { AppRoute } from '~/shared/libs/router';

function Routing(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.ROOT}
        element={<Navigate to={AppRoute.UI_KIT} replace />}
      />

      <Route path={AppRoute.UKRAINE} element={<UkrainePage />} />
      <Route path={AppRoute.FORMULA_1} element={<Formula1Page />} />
      <Route path={AppRoute.US_POLITICS} element={<UsPoliticsPage />} />
      <Route path={AppRoute.UI_KIT} element={<UiKitPage />} />
    </Routes>
  );
}

export { Routing };
