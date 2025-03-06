import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Chip } from '~/shared/ui/atoms/Chip';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { SecondaryButton } from '~/shared/ui/atoms/SecondaryButton';
import {
  Typography,
  TypographyVariantToCss,
} from '~/shared/ui/atoms/Typography';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { withAttrs } from '~/shared/ui/withAttrs';

function VoteWidget(): JSX.Element {
  return (
    <StyledVoteWidgetWrapper>
      <StyledHeader>
        <Chip color="orange" size="medium" intensive>
          Important
        </Chip>
        <StyledDate>3 days left</StyledDate>
        <StyledLabelButton>Explore</StyledLabelButton>
      </StyledHeader>
      <StyledTextWrapper>
        <StyledTitle>We need your voice!</StyledTitle>
        <StyledVotes>Total: 1,243 votes</StyledVotes>
      </StyledTextWrapper>
      <StyledContentWrapper>
        <StyledQuestion>
          Should we reduce our Global Fund spending to 5%?
        </StyledQuestion>
        <SecondaryButton color="green">Agree</SecondaryButton>
        <SecondaryButton color="red">Deny</SecondaryButton>
      </StyledContentWrapper>
    </StyledVoteWidgetWrapper>
  );
}

export { VoteWidget };

const StyledVoteWidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${widgetWrapperCss}
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledDate = withAttrs({ variant: 'body-2' }, Typography);
const StyledTitle = withAttrs({ variant: 'heading-3' }, Typography);

const StyledVotes = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  Typography,
);

const StyledLabelButton = withAttrs(
  { color: 'white' },
  styled(LabelButton)`
    margin-left: auto;
  `,
);

const StyledContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const StyledQuestion = styled.div`
  grid-column: span 2;

  padding: 24px 48px;
  border-radius: ${Radius.RADIUS_4};

  ${TypographyVariantToCss['heading-5']}
  text-align: center;

  background-color: ${Color.WHITE_16};
`;
