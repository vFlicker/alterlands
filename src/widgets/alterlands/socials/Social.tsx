import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { SocialData } from './socialTypes';

type SocialProps = SocialData & {
  className?: string;
};

function Social({ className, imageUrl, title }: SocialProps): JSX.Element {
  return (
    <StyledSocialWrapper className={className}>
      <StyledImage src={imageUrl} alt={title} />
      <StyledTitle>{title}</StyledTitle>
    </StyledSocialWrapper>
  );
}

export { Social };

const StyledSocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding-top: 4px;
`;

const StyledImage = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledTitle = withAttrs({ variant: 'body-4', as: 'p' }, Typography);
