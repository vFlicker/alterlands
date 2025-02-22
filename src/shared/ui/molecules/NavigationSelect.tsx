import { JSX } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { navigationItems } from '~/shared/libs/router';
import { Select } from '~/shared/ui/molecules/Select';

const options = navigationItems.map(({ title, route }) => ({
  label: title,
  value: route,
}));

function NavigationSelect(): JSX.Element {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Select
      options={options}
      value={pathname}
      variant="outlined"
      size="medium"
      optionSelect={(value) => navigate(value)}
    />
  );
}

export { NavigationSelect };
