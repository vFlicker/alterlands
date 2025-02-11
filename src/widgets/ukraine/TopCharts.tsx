import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Avatar } from '~/shared/ui/atoms/Avatar';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { dividerDotCss } from '~/shared/ui/dividerDotCss';
import { SliderButtons } from '~/shared/ui/molecules/SliderButtons';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

type TopChartsWidgetProps = {
  data: {
    id: number;
    imageUrl: string;
    fullName: string;
    songsCount: number;
    albumsCount: number;
  }[];
  className?: string;
};

const actionButtonIcons = [
  'icon-music',
  'icon-video',
  'icon-star',
  'icon-banknote',
] as const;

function TopChartsWidget({
  data,
  className,
}: TopChartsWidgetProps): JSX.Element {
  return (
    <StyledTopChartsWidget className={className}>
      <WidgetHeader
        title="Top charts"
        actions={
          <StyledActionsWrapper>
            {actionButtonIcons.map((iconName) => (
              <IconButton size="medium" color="neutral" variant="filled">
                <Icon name={iconName} />
              </IconButton>
            ))}
          </StyledActionsWrapper>
        }
      />

      <StyledWrapper>
        <StyledHeader>
          <StyledTitleWrapper>
            <IconButton size="small" color="transparent" variant="filled">
              <Icon name="icon-full-screen" />
            </IconButton>
            <StyledTitle>Top musicians</StyledTitle>
          </StyledTitleWrapper>
          <SliderButtons />
        </StyledHeader>
        <StyledList>
          {data.map(({ albumsCount, fullName, id, imageUrl, songsCount }) => (
            <StyledItem key={id}>
              <StyledLeftWrapper>
                <Avatar src={imageUrl} size="large" />
                <StyledFullName>{fullName}</StyledFullName>
              </StyledLeftWrapper>
              <StyledRightWrapper>
                <StyledText>Songs {songsCount}</StyledText>
                <StyledText>Albums {albumsCount}</StyledText>
              </StyledRightWrapper>
            </StyledItem>
          ))}
        </StyledList>
      </StyledWrapper>
    </StyledTopChartsWidget>
  );
}

export { TopChartsWidget };

const StyledTopChartsWidget = styled.div``;

const StyledActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledTitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_5};
`;

const StyledItem = styled.div`
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
  gap: 24px;

  & > *:not(:last-child) {
    position: relative;
    &::after {
      ${dividerDotCss}
    }
  }
`;

const StyledText = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  Typography,
);
