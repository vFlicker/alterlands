import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { Tab } from '~/shared/ui/atoms/Tab';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { withAttrs } from '~/shared/ui/withAttrs';

import { CrowdfundingData } from './crowdfundingTypes';

type CrowdfundingProps = {
  data: CrowdfundingData[];
  className?: string;
};

function Crowdfunding({ className, data }: CrowdfundingProps): JSX.Element {
  return (
    <StyledCrowdfundingWrapper className={className}>
      <StyledCrowdfundingList>
        {data.map(({ id, imageUrl, title }) => (
          <StyledCrowdfundingItem>
            <StyledItemImage key={id} src={imageUrl} alt={title} />
            <StyledItemTitle>{title}</StyledItemTitle>
          </StyledCrowdfundingItem>
        ))}
      </StyledCrowdfundingList>
      <StyledDataWrapper>
        <StyledHeader>
          <StyledTitle>Progress Bar – Phase 1</StyledTitle>
          <div>
            <LabelButton color="white">Product phases</LabelButton>
            <LabelButton color="blue">Learn more</LabelButton>
          </div>
        </StyledHeader>

        <StyledCenterWrapper>
          <StyledTabsWrapper>
            <Tab variant="default" color="default" selected>
              Monthly
            </Tab>
            <Tab variant="default" color="default">
              Total
            </Tab>
          </StyledTabsWrapper>

          <StyledInfoButton>
            <Icon name="icon-info" />
          </StyledInfoButton>
        </StyledCenterWrapper>

        <ProgressBarWrapper>
          <ProgressBarTrack>
            <ProgressBarFill style={{ width: '8%' }} />
          </ProgressBarTrack>
          <ProgressBarLabels>
            <ProgressBarLabel>$10</ProgressBarLabel>
            <ProgressBarLabel $color={Color.WHITE_64}>$25 000</ProgressBarLabel>
          </ProgressBarLabels>
        </ProgressBarWrapper>
      </StyledDataWrapper>
    </StyledCrowdfundingWrapper>
  );
}

export { Crowdfunding };

const StyledCrowdfundingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const StyledCrowdfundingList = styled.div`
  display: flex;
  gap: 24px;

  ${separatorLineCss(24, Color.WHITE_8)}
`;

const StyledCrowdfundingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const StyledItemTitle = withAttrs(
  { variant: 'body-4', $color: Color.WHITE_70 },
  Typography,
);

const StyledItemImage = styled.img`
  width: 72px;
  height: 72px;
`;

const StyledDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyledCenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTabsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const StyledInfoButton = withAttrs(
  { color: 'transparent', variant: 'filled', size: 'small' },
  styled(IconButton)`
    width: 20px;
    height: 20px;

    svg {
      width: inherit;
      height: inherit;
      stroke: ${Color.WHITE_42};
    }

    &:hover {
      svg {
        stroke: ${Color.WHITE_98};
      }
    }
  `,
);

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ProgressBarTrack = styled.div`
  position: relative;
  width: 100%;
  height: 24px;
  border-radius: ${Radius.RADIUS_4};
  background-color: ${Color.WHITE_16};
`;

const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: ${Radius.RADIUS_4};
  background-color: ${Color.ACCENT};
`;

const ProgressBarLabels = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
`;

const ProgressBarLabel = withAttrs({ variant: 'body-5' }, Typography);
