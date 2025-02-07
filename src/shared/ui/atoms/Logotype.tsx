import { JSX } from 'react';

import { commonImage } from '~/shared/assets/images/common';

type LogotypeProps = {
  className?: string;
};

function Logotype({ className }: LogotypeProps): JSX.Element {
  return (
    <div className={className}>
      <img width="166" height="38" src={commonImage.logo} alt="Alterlands" />
    </div>
  );
}

export { Logotype };
