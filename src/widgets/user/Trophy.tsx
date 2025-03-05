import styled from '@emotion/styled';
import { JSX } from 'react';

import { userImage } from '~/shared/assets/images/user';
import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Typography } from '~/shared/ui/atoms/Typography';
import { SliderButtons } from '~/shared/ui/molecules/SliderButtons';
import { withAttrs } from '~/shared/ui/withAttrs';

interface TrophyProps {
  className?: string;
}

const gridItems = [
  { icon: userImage.trophy.graduationCap, alt: 'Education' },
  { icon: userImage.trophy.values, alt: 'Chart' },
  { icon: userImage.trophy.mission, alt: 'Trophy' },
  { icon: userImage.trophy.accessCard, alt: 'Checklist' },
  { icon: userImage.trophy.champagne, alt: 'Drink' },
  { icon: userImage.trophy.law, alt: 'Gavel' },
  { icon: userImage.trophy.piggyBank, alt: 'Savings' },
  { icon: userImage.trophy.petCare, alt: 'Charity' },
  ...Array(17).fill({ empty: true }),
];

function Trophy({ className }: TrophyProps): JSX.Element {
  return (
    <StyledTrophyWrapper className={className}>
      <StyledGridSection>
        <StyledGrid>
          {gridItems.map((item, index) => (
            <StyledGridItem key={index}>
              {item.icon && <StyledGridIcon src={item.icon} />}
            </StyledGridItem>
          ))}
        </StyledGrid>

        <StyledSliderButtons text="1 of 1" />
      </StyledGridSection>

      <StyledAboutTrophyWrapper>
        <StyledTrophyIconWrapper>
          <StyledTrophyIcon src={userImage.trophy.champagne} />
        </StyledTrophyIconWrapper>

        <StyledContent>
          <StyledTitle>Drink</StyledTitle>

          <StyledAchievement>
            <StyledAchievementIcon src={userImage.battleOfClans} />
            <StyledAchievementText>
              <StyledAchievementTitle>Battle of clans</StyledAchievementTitle>
              <StyledAchievementSubtitle>
                Gold invanotry
              </StyledAchievementSubtitle>
            </StyledAchievementText>
          </StyledAchievement>
          <StyledDescription>
            The Drink Trophy is a sleek, modern award designed to celebrate
            excellence in beverage crafting and innovation.
          </StyledDescription>
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

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
`;

const StyledGridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_8}; 
`;

const StyledGridIcon = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const StyledAboutTrophyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 16px;
  border-radius: ${Radius.RADIUS_16};

  background-color: ${Color.DARK};
`;

const StyledTrophyIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 28px 64px;
  border-radius: 8px;

  background-color: ${Color.WHITE_8};
`;

const StyledTrophyIcon = styled.img`
  width: 120px;
  height: 120px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

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
