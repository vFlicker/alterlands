import { JSX } from 'react';

import { logoImage } from '../assets/images';

type LogotypeProps = {
  className?: string;
};

function Logotype({ className }: LogotypeProps): JSX.Element {
  return (
    <div className={className}>
      <img width="166" height="38" src={logoImage} alt="Alterlands" />
    </div>
  );
}

export { Logotype };
