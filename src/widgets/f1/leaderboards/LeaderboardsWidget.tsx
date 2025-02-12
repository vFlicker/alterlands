import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { TypographyVariantToCss } from '~/shared/ui/atoms/Typography';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { LeaderboardsData } from './leaderboardsTypes';

type LeaderboardsWidgetProps = {
  widgetTitle: string;
  data: LeaderboardsData[];
  className?: string;
};

function LeaderboardsWidget({
  widgetTitle,
  data,
  className,
}: LeaderboardsWidgetProps): JSX.Element {
  return (
    <StyledLeaderboardsWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledTable>
        <StyledHeader>
          <StyledCol>№</StyledCol>
          <StyledCol>Photo</StyledCol>
          <StyledCol>Name</StyledCol>
          <StyledCol>Country</StyledCol>
          <StyledCol>Points</StyledCol>
        </StyledHeader>
        <StyledBody>
          {data.map(({ countryFlag, name, photo, points, position }) => (
            <StyledRow key={position}>
              <StyledCol>{position}</StyledCol>
              <StyledCol>
                <StyledPhoto src={photo} alt={name} />
              </StyledCol>
              <StyledCol>{name}</StyledCol>
              <StyledCol>
                <StyledFlag src={countryFlag} alt="Flag" />
              </StyledCol>
              <StyledCol>{points}</StyledCol>
            </StyledRow>
          ))}
        </StyledBody>
      </StyledTable>
    </StyledLeaderboardsWidgetWrapper>
  );
}

export { LeaderboardsWidget };

const StyledLeaderboardsWidgetWrapper = styled.div``;

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 10px 80px 1fr 60px 40px;
  justify-items: center;
  gap: 16px;

  padding: 8px 12px;

  color: ${Color.WHITE_64};
  ${TypographyVariantToCss['body-5']}
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 10px 80px 1fr 60px 40px;
  align-items: center;
  justify-items: center;
  gap: 16px;

  padding: 8px 12px;
  background-color: ${Color.WHITE_5};

  ${TypographyVariantToCss['heading-5']}
`;

const StyledCol = styled.div`
  &:nth-child(3) {
    justify-self: self-start;
  }
`;

const StyledPhoto = styled.img`
  display: block;
  border-radius: ${Radius.RADIUS_8};
  width: 80px;
  height: 48px;
`;

const StyledFlag = styled.img`
  width: 32px;
  height: 20px;
  border-radius: 2px;
`;
