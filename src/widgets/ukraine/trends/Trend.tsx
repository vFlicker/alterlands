import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorDotCss } from '~/shared/ui/css/separatorDotCss';
import { withAttrs } from '~/shared/ui/withAttrs';

import { TrendData } from './trendsTypes';

type TrendProps = TrendData & {
  className?: string;
};

function Trend({
  className,
  title,
  postsCount,
  votesCount,
}: TrendProps): JSX.Element {
  return (
    <StyledTrendWrapper className={className}>
      <StyledData>
        <StyledTitle>{title}</StyledTitle>
        <StyledAdditionalInfo>
          <StyledText>{postsCount} posts</StyledText>
          <StyledText>{votesCount} votes</StyledText>
        </StyledAdditionalInfo>
      </StyledData>
      <LabelButton color="white">Explore</LabelButton>
    </StyledTrendWrapper>
  );
}

export { Trend };

const StyledTrendWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 8px 12px;
  border-radius: ${Radius.RADIUS_4};
  background-color: ${Color.WHITE_5};
`;

const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledTitle = withAttrs({ variant: 'heading-5', as: 'h2' }, Typography);

const StyledAdditionalInfo = styled.div`
  display: flex;
  gap: 26px;
`;

const StyledText = withAttrs(
  { variant: 'body-3', as: 'p', $color: Color.WHITE_64 },
  styled(Typography)`
    ${separatorDotCss}
  `,
);
