import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import {
  Typography,
  TypographyVariantToCss,
} from '~/shared/ui/atoms/Typography';
import { SliderButtons } from '~/shared/ui/molecules/SliderButtons';
import { withAttrs } from '~/shared/ui/withAttrs';

interface TrophyProps {
  title: string;
  description: string;
  achievementTitle: string;
  achievementSubtitle: string;
  bigImage: string;
  smallImage: string;
  trophies: {
    image: string;
    times: number;
  }[];
  userRole: 'owner' | 'viewer';
  className?: string;
}

function Trophy({
  className,
  userRole,
  achievementTitle,
  achievementSubtitle,
  bigImage,
  description,
  smallImage,
  title,
  trophies,
}: TrophyProps): JSX.Element {
  const isOwner = userRole === 'owner';
  const emptySlots = 25 - trophies.length;
  const emptySpaces = isOwner ? Array(emptySlots).fill(null) : [];

  const rowsCount = Math.ceil((trophies.length + emptySpaces.length) / 5);
  const gridItems = [...trophies, ...emptySpaces];

  return (
    <StyledTrophyWrapper className={className}>
      <StyledGridSection>
        {!isOwner && <StyledGridTitle>Trophy</StyledGridTitle>}

        <StyledGrid rowsCount={rowsCount}>
          {gridItems.map((item, index) => (
            <StyledGridItem key={index}>
              {item?.times > 1 && <StyledCounter>x{item.times}</StyledCounter>}
              {item && <StyledGridIcon src={item.image} />}
            </StyledGridItem>
          ))}
        </StyledGrid>

        {isOwner && <StyledSliderButtons text="1 of 1" />}
      </StyledGridSection>

      <StyledAboutTrophyWrapper>
        <StyledTrophyIconWrapper>
          <StyledTrophyIcon src={bigImage} />
        </StyledTrophyIconWrapper>

        <StyledContent>
          <StyledTitle>{title}</StyledTitle>

          <StyledAchievement>
            <StyledAchievementIcon src={smallImage} />
            <StyledAchievementText>
              <StyledAchievementTitle>
                {achievementTitle}
              </StyledAchievementTitle>
              <StyledAchievementSubtitle>
                {achievementSubtitle}
              </StyledAchievementSubtitle>
            </StyledAchievementText>
          </StyledAchievement>
          <StyledDescription>{description}</StyledDescription>
        </StyledContent>
      </StyledAboutTrophyWrapper>
    </StyledTrophyWrapper>
  );
}

export { Trophy };

const StyledTrophyWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: start;
`;

const StyledGridSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;

  padding: 16px;
  border-radius: ${Radius.RADIUS_16};

  background-color: ${Color.DARK};
`;

const StyledSliderButtons = styled(SliderButtons)`
  margin-left: auto;
`;

const StyledGrid = styled.div<{ rowsCount: number }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(${({ rowsCount }) => rowsCount}, 1fr);
  gap: 8px;
`;

const StyledGridItem = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_8};
`;

const StyledCounter = styled.div`
  position: absolute;
  top: 4px;
  right: 8px;

  color: ${Color.WHITE_87};
  ${TypographyVariantToCss['body-2']}
`;

const StyledGridIcon = styled.img``;

const StyledAboutTrophyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 16px;
  border-radius: ${Radius.RADIUS_16};

  background-color: ${Color.DARK};
`;

const StyledTrophyIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 248px;
  height: 178px;
  border-radius: 8px;

  background-color: ${Color.WHITE_8};
`;

const StyledTrophyIcon = styled.img``;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledGridTitle = withAttrs({ variant: 'heading-3' }, Typography);
const StyledTitle = withAttrs({ variant: 'heading-4' }, Typography);

const StyledAchievement = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledAchievementIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${Radius.RADIUS_8};
  border: 1px solid ${Color.WHITE_16};
`;

const StyledAchievementText = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAchievementTitle = withAttrs({ variant: 'body-2' }, Typography);

const StyledAchievementSubtitle = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_42 },
  Typography,
);

const StyledDescription = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_87 },
  Typography,
);
