import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Button } from '~/shared/ui/atoms/Button';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { BookData } from './bookTypes';

type BookProps = BookData & {
  className?: string;
};

function Book({ className, imageUrl, title }: BookProps): JSX.Element {
  return (
    <StyledBookWrapper className={className}>
      <StyledImage src={imageUrl} alt={title} />
      <StyledTitle>{title}</StyledTitle>
      <Button size="medium" color="accent" variant="outlined">
        Read
      </Button>
    </StyledBookWrapper>
  );
}

export { Book };

const StyledBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 8px 12px 8px;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_8};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: ${Radius.RADIUS_4};

  margin-bottom: 8px;
`;

const StyledTitle = withAttrs(
  { variant: 'body-1', as: 'h2' },
  styled(Typography)`
    margin-bottom: 24px;
  `,
);
