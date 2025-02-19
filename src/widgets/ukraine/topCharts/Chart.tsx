import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Avatar } from '~/shared/ui/atoms/Avatar';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorDotCss } from '~/shared/ui/css/separatorDotCss';
import { withAttrs } from '~/shared/ui/withAttrs';

import { ChartData } from './topChartsTypes';

type ChartProps = ChartData & {
  className?: string;
};

function Chart({
  className,
  albumsCount,
  fullName,
  imageUrl,
  songsCount,
}: ChartProps): JSX.Element {
  return (
    <StyledCartWrapper className={className}>
      <StyledLeftWrapper>
        <Avatar src={imageUrl} size="large" />
        <StyledFullName>{fullName}</StyledFullName>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledText>Songs {songsCount}</StyledText>
        <StyledText>Albums {albumsCount}</StyledText>
      </StyledRightWrapper>
    </StyledCartWrapper>
  );
}

export { Chart };

const StyledCartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
`;

const StyledFullName = withAttrs({ variant: 'body-3' }, Typography);

const StyledLeftWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  gap: 26px;
`;

const StyledText = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  styled(Typography)`
    ${separatorDotCss}
  `,
);
