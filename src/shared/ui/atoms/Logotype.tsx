import { JSX } from 'react';

import { Image } from '~/shared/assets/images';

type LogotypeProps = {
  className?: string;
};

function Logotype({ className }: LogotypeProps): JSX.Element {
  return (
    <div className={className}>
      <img width="166" height="38" src={Image.other.logo} alt="Alterlands" />
    </div>
  );
}

export { Logotype };
