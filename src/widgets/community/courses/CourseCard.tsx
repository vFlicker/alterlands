import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import {
  Typography,
  TypographyVariantToCss,
} from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { CourseData, CourseTier } from './courseTypes';

type CourseCardProps = CourseData & {
  className?: string;
};

function CourseCard({
  className,
  creatorName,
  creatorTier,
  examPrice,
  imageSrc,
  labels,
  price,
  title,
}: CourseCardProps): JSX.Element {
  return (
    <StyledCourseCardWrapper className={className}>
      <StyledImage src={imageSrc} />
      <StyledCreatorInfo>
        <StyledTier level={creatorTier}>{creatorTier}</StyledTier>
        <StyledCreatorName>{creatorName}</StyledCreatorName>
      </StyledCreatorInfo>
      <StyledTitle>{title}</StyledTitle>
      <StyledLabelsList>
        {labels.map((label) => (
          <StyledLabel key={label}>{label}</StyledLabel>
        ))}
      </StyledLabelsList>

      <StyledPriceWrapper>
        <StyledPrice>{price}</StyledPrice>
        <StyledExamPrice>Exam Fee: {examPrice}</StyledExamPrice>
      </StyledPriceWrapper>
    </StyledCourseCardWrapper>
  );
}

export { CourseCard };

const getTierColor = (level: CourseTier) => {
  const levels = {
    Pro: css`
      color: ${Color.PURPLE_1};
      background-color: ${Color.PURPLE_2};
    `,
    E: css`
      color: ${Color.GREEN_1};
      background-color: ${Color.GREEN_4};
    `,
    GE: css`
      color: ${Color.BLUE_1};
      background-color: ${Color.BLUE_4};
    `,
  };

  return levels[level];
};

const StyledCourseCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  padding: 8px;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_5};
`;

const StyledImage = styled.img`
  height: 120px;
  margin-bottom: 8px;
  border-radius: ${Radius.RADIUS_4};
  object-fit: cover;
`;

const StyledCreatorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
`;

const StyledTier = styled.div<{ level: CourseTier }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  border-radius: ${Radius.RADIUS_4};

  ${TypographyVariantToCss['body-5']}

  ${({ level }) => getTierColor(level)};
`;

const StyledCreatorName = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_70 },
  Typography,
);

const StyledTitle = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    margin-bottom: 12px;
  `,
);

const StyledLabelsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const StyledLabel = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 3px 12px;
  border: 1px solid ${Color.WHITE_30};
  border-radius: ${Radius.RADIUS_100};

  color: ${Color.WHITE_70};
  ${TypographyVariantToCss['body-5']}
  line-height: 1.5;
`;

const StyledPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: auto;
`;

const StyledPrice = withAttrs({ variant: 'heading-4' }, Typography);

const StyledExamPrice = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  Typography,
);
