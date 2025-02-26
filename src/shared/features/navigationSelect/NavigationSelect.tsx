import { JSX } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { navigationItems } from '~/shared/libs/router';
import { Select } from '~/shared/ui/molecules/Select';

type NavigationSelectProps = {
  className?: string;
};

const options = navigationItems.map(({ title, route }) => ({
  label: title,
  value: route,
}));

function NavigationSelect({ className }: NavigationSelectProps): JSX.Element {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Select
      className={className}
      options={options}
      value={pathname}
      variant="outlined"
      size="medium"
      optionSelect={(value) => navigate(value)}
    />
  );
}

export { NavigationSelect };
