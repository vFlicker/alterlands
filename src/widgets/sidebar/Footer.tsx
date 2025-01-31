import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Typography } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

function Footer(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledLinks>
        <StyledLink href="#">Privacy Policy</StyledLink>
        <StyledLink href="#">Cookies</StyledLink>
        <StyledLink href="#">Support us</StyledLink>
        <StyledLink href="#">Contact us</StyledLink>
      </StyledLinks>
      <StyledCopyrightText>© 2025 Alterlands</StyledCopyrightText>
    </StyledWrapper>
  );
}

export { Footer };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;

  & > *:nth-child(3n + 1):not(:last-child),
  & > *:nth-child(3n + 2):not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: -8px;

      display: block;
      width: 1px;
      height: 16px;

      background-color: ${Color.WHITE_16};
    }
  }
`;

const StyledLink = styled.a`
  flex-shrink: 0;

  color: ${Color.WHITE_42};

  font-size: 12px;
  line-height: 1.42;
  font-weight: 400;

  &:hover {
    color: ${Color.WHITE_98};
  }
`;

const StyledCopyrightText = withAttrs(
  { variant: 'body-5', $color: Color.WHITE_42 },
  Typography,
);
