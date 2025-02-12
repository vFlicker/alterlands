import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import {
  Typography,
  TypographyVariantToCss,
} from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { UpcomingRaceData } from './upcomingRacesTypes';

type UpcomingRaceProps = UpcomingRaceData & {
  className?: string;
};

function UpcomingRace({
  className,
  days,
  flagImage,
  month,
  description,
  title,
  trackImage,
}: UpcomingRaceProps): JSX.Element {
  return (
    <StyledUpcomingRaceWrapper className={className}>
      <StyledLeftCol>
        <StyledDays>{days}</StyledDays>
        <StyledMonth>{month}</StyledMonth>
      </StyledLeftCol>
      <StyledRightCol>
        <StyledInfoWrapper>
          <StyledTitle>
            <StyledFlagImage src={flagImage} />
            {title}
          </StyledTitle>
          <StyledText>{description}</StyledText>
        </StyledInfoWrapper>
        <StyledTrackImage src={trackImage} />
      </StyledRightCol>
    </StyledUpcomingRaceWrapper>
  );
}

export { UpcomingRace };

const StyledUpcomingRaceWrapper = styled.div`
  display: flex;
`;

const StyledLeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  margin-right: 8px;
  padding-right: 8px;
  border-right: 1px solid ${Color.WHITE_42};
`;

const StyledDays = withAttrs({ variant: 'heading-5' }, Typography);

const StyledMonth = styled.div`
  width: 100%;
  min-width: 92px;
  padding: 2px;
  border-radius: ${Radius.RADIUS_16};

  ${TypographyVariantToCss['body-3']};
  text-align: center;
  text-transform: uppercase;

  background-color: ${Color.ACCENT_4};
`;

const StyledRightCol = styled.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledTitle = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
);

const StyledFlagImage = withAttrs(
  { width: '28', height: '16', alt: 'Flag' },
  styled.img`
    border-radius: ${Radius.RADIUS_2};
  `,
);

const StyledText = withAttrs(
  { variant: 'body-4', $color: Color.WHITE_64 },
  Typography,
);

const StyledTrackImage = withAttrs(
  { width: '80', height: '60', alt: 'Track' },
  styled.img``,
);
