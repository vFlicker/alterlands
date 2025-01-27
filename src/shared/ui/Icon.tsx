import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { Color } from '~/shared/theme/colors';
import { IconName } from '~/shared/theme/icons';

type IconProps = PropsWithChildren<{
  className?: string;
  name: IconName;
  size?: IconSize;
}>;

const enum IconSize {
  Medium = 'medium',
}

function Icon(props: IconProps) {
  const xlinkHref = `#${props.name}`;

  return (
    <StyledIcon xmlns="http://www.w3.org/2000/svg" {...props}>
      <use xlinkHref={xlinkHref} />
    </StyledIcon>
  );
}

export { Icon, IconSize };

const IconNameToCSS = {
  [IconName.ICON_ARROW_BIG]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_BANKNOTE]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_BIG_DOTE]: css`
    fill: ${Color.WHITE_8};
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_CALENDAR]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_CHEVRON]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_CIRCLE_DOLLAR_SIGN]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_CLOSE]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_DOTS]: css`
    fill: ${Color.WHITE_8};
  `,
  [IconName.ICON_EDIT]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_EDUCATION]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_EYE]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_FILTER]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_FULL_SCREEN]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_INFO]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_JOB]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_LAYOUT_DASHBOARD]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_MAXIMIZE]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_MESSAGE_CIRCLE]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_MINIMIZE]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_MINIMIZE_1]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_MONITOR_SMARTPHONE]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_MUSIC]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_NOTIFICATION]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_PIN]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_PLANE]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_PLAY]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_PLUS]: css`
    fill: ${Color.WHITE_8};
  `,
  [IconName.ICON_REDIRECT]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_REPLAY]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_REPOST]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_SEARCH]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_SEND]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_SETTINGS]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_SMALL_DOTE]: css`
    fill: ${Color.WHITE_8};
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_SOME_ELEMENTS]: css`
    fill: ${Color.WHITE_8};
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_STAR]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_TROPHY]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_USERS]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_VERIFIED]: css`
    fill: ${Color.ACCENT};
  `,
  [IconName.ICON_VIDEO]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_VOTE]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
  [IconName.ICON_WALLET]: css`
    fill: none;
    stroke: ${Color.WHITE_8};
  `,
};

const IconSizeToCSS = {
  [IconSize.Medium]: css`
    width: 24px;
    height: 24px;
  `,
};

const StyledIcon = styled.svg<IconProps>(({ name, size }) => {
  const defaultIconSize = size || IconSize.Medium;

  return css`
    ${IconSizeToCSS[defaultIconSize]};
    ${IconNameToCSS[name]};
  `;
});
