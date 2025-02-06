import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { TypographyVariantToCss } from '~/shared/ui/atoms/Typography';

type TeamLeaderboardsProps = {
  teams: {
    position: number;
    logo: string;
    name: string;
    points: number;
  }[];
};

function TeamLeaderboards({ teams }: TeamLeaderboardsProps): JSX.Element {
  return (
    <StyledTable>
      <StyledHeader>
        <StyledCol>№</StyledCol>
        <StyledCol>Logo</StyledCol>
        <StyledCol>Team</StyledCol>
        <StyledCol>Points</StyledCol>
      </StyledHeader>
      <StyledBody>
        {teams.map((team) => (
          <StyledRow key={team.position}>
            <StyledCol>{team.position}</StyledCol>
            <StyledCol>
              <StyledPhoto src={team.logo} alt={team.name} />
            </StyledCol>
            <StyledCol>{team.name}</StyledCol>
            <StyledCol>{team.points}</StyledCol>
          </StyledRow>
        ))}
      </StyledBody>
    </StyledTable>
  );
}

export { TeamLeaderboards };

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 26px 80px 240px 40px;
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
  grid-template-columns: 26px 80px 240px 40px;
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
  width: 80px;
  height: 48px;
`;
