import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { dividerDotCss } from '~/shared/ui/dividerDotCss';
import { withAttrs } from '~/shared/ui/withAttrs';

type TrendsWidgetProps = {
  data: {
    id: number;
    title: string;
    postsCount: string;
    votesCount: string;
  }[];
  className?: string;
};

function TrendsWidget({ className, data }: TrendsWidgetProps): JSX.Element {
  return (
    <StyledTrendsWidgetWrapper className={className}>
      {data.map((topic) => (
        <TrendItem key={topic.id} {...topic} />
      ))}
    </StyledTrendsWidgetWrapper>
  );
}

type TrendItemProps = {
  id: number;
  title: string;
  postsCount: string;
  votesCount: string;
};

function TrendItem({
  title,
  postsCount,
  votesCount,
}: TrendItemProps): JSX.Element {
  return (
    <StyledItemWrapper>
      <StyledData>
        <StyledTitle>{title}</StyledTitle>
        <StyledAdditionalInfo>
          <StyledText>{postsCount} posts</StyledText>
          <StyledText>{votesCount} votes</StyledText>
        </StyledAdditionalInfo>
      </StyledData>
      <LabelButton color="white">Explore</LabelButton>
    </StyledItemWrapper>
  );
}

export { TrendsWidget };

const StyledTrendsWidgetWrapper = styled.div`
  display: grid;
  gap: 8px;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: ${Radius.RADIUS_4};
  background-color: ${Color.WHITE_5};
`;

const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledTitle = withAttrs({ variant: 'heading-5', as: 'h2' }, Typography);

const StyledAdditionalInfo = styled.div`
  display: flex;
  gap: 24px;

  & > p:not(:last-child) {
    position: relative;
    &::after {
      ${dividerDotCss}
    }
  }
`;

const StyledText = withAttrs(
  { variant: 'body-3', as: 'p', $color: Color.WHITE_64 },
  Typography,
);
