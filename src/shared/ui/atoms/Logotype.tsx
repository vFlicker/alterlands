import { JSX } from 'react';
import { Link } from 'react-router-dom';

import { commonImage } from '~/shared/assets/images/common';
import { AppRoute } from '~/shared/libs/router';

type LogotypeProps = {
  className?: string;
};

function Logotype({ className }: LogotypeProps): JSX.Element {
  return (
    <Link to={AppRoute.ALTERLANDS_FEED} className={className}>
      <img width="166" height="38" src={commonImage.logo} alt="Alterlands" />
    </Link>
  );
}

export { Logotype };
