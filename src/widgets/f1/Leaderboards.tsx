import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { TypographyVariantToCss } from '~/shared/ui/atoms/Typography';

type LeaderboardsProps = {
  drivers: {
    position: number;
    name: string;
    photo: string;
    countryFlag: string;
    points: number;
  }[];
};

function Leaderboards({ drivers }: LeaderboardsProps): JSX.Element {
  return (
    <StyledTable>
      <StyledHeader>
        <StyledCol>№</StyledCol>
        <StyledCol>Photo</StyledCol>
        <StyledCol>Name</StyledCol>
        <StyledCol>Country</StyledCol>
        <StyledCol>Points</StyledCol>
      </StyledHeader>
      <StyledBody>
        {drivers.map((driver) => (
          <StyledRow key={driver.position}>
            <StyledCol>{driver.position}</StyledCol>
            <StyledCol>
              <StyledPhoto src={driver.photo} alt={driver.name} />
            </StyledCol>
            <StyledCol>{driver.name}</StyledCol>
            <StyledCol>
              {' '}
              <StyledFlag src={driver.countryFlag} alt="Flag" />
            </StyledCol>
            <StyledCol>{driver.points}</StyledCol>
          </StyledRow>
        ))}
      </StyledBody>
    </StyledTable>
  );
}

export { Leaderboards };

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 26px 120px 130px 60px 40px;
  justify-items: center;
  gap: 29px;

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
  grid-template-columns: 26px 120px 130px 60px 40px;
  align-items: center;
  justify-items: center;
  gap: 29px;

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
  width: 120px;
  height: 72px;
`;

const StyledFlag = styled.img`
  width: 32px;
  height: 20px;
  border-radius: 2px;
`;
