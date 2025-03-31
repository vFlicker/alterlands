import { JSX } from 'react';

import { commonImage } from '~/shared/assets/images/common';

type ColorfulRatingProps = {
  value: 1 | 2 | 3 | 4 | 5;
  className?: string;
};

const starsPaths = Object.values(commonImage.colorfulStar);

function ColorfulRating({
  className,
  value,
}: ColorfulRatingProps): JSX.Element {
  const index = value - 1;

  return (
    <div className={className}>
      <img src={starsPaths[index]} alt={`rating is ${value}`} />
    </div>
  );
}

export { ColorfulRating };
