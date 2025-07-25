import { JSX } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AlterlandBudgetPage, AlterlandPage } from '~/pages/alterlands';
import { CommunityPage } from '~/pages/community';
import { PatchNotesPage, VacancyPage } from '~/pages/dynamicPages';
import { F1Page } from '~/pages/f1';
import { UiKitPage } from '~/pages/UiKitPage';
import { UkrainePage } from '~/pages/ukraine';
import { CurrentUserPage } from '~/pages/user/currentUser';
import { MrBeastPage } from '~/pages/user/mrBeast';
import { UsPoliticsPage } from '~/pages/usPolitics';
import { AppRoute } from '~/shared/libs/router';

import { useScrollToTop } from './hooks/useScrollToTop';

function Routing(): JSX.Element {
  useScrollToTop();

  return (
    <Routes>
      <Route
        path={AppRoute.ROOT}
        element={<Navigate to={AppRoute.ALTERLANDS_FEED} replace />}
      />

      <Route path={AppRoute.ALTERLANDS_FEED} element={<AlterlandPage />} />
      <Route
        path={AppRoute.ALTERLANDS_BUDGET}
        element={<AlterlandBudgetPage />}
      />
      <Route path={AppRoute.VACANCY} element={<VacancyPage />} />
      <Route path={AppRoute.PATCH_NOTES} element={<PatchNotesPage />} />
      <Route path={AppRoute.UKRAINE} element={<UkrainePage />} />
      <Route path={AppRoute.F1} element={<F1Page />} />
      <Route path={AppRoute.US_POLITICS} element={<UsPoliticsPage />} />
      <Route path={AppRoute.COMMUNITY} element={<CommunityPage />} />
      <Route path={AppRoute.CURRENT_USER} element={<CurrentUserPage />} />
      <Route path={AppRoute.MR_BEAST} element={<MrBeastPage />} />
      <Route path={AppRoute.UI_KIT} element={<UiKitPage />} />
    </Routes>
  );
}

export { Routing };
