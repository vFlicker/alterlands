import styled from '@emotion/styled';
import { JSX } from 'react';

import { IconName } from '~/shared/theme/icons';
import { Icon } from '~/shared/ui/Icon';

import { iconUkraine } from '../assets/images';

function Icons(): JSX.Element {
  return (
    <StyledBlock>
      <StyledIcon name={IconName.ICON_ARROW_BIG} />
      <StyledIcon name={IconName.ICON_BANKNOTE} />
      <StyledIcon name={IconName.ICON_BIG_DOTE} />
      <StyledIcon name={IconName.ICON_CALENDAR} />
      <StyledIcon name={IconName.ICON_CHEVRON} />
      <StyledIcon name={IconName.ICON_CIRCLE_DOLLAR_SIGN} />
      <StyledIcon name={IconName.ICON_CLOSE} />
      <StyledIcon name={IconName.ICON_DOTS} />
      <StyledIcon name={IconName.ICON_EDIT} />
      <StyledIcon name={IconName.ICON_EDUCATION} />
      <StyledIcon name={IconName.ICON_EYE} />
      <StyledIcon name={IconName.ICON_FILTER} />
      <StyledIcon name={IconName.ICON_FULL_SCREEN} />
      <StyledIcon name={IconName.ICON_INFO} />
      <StyledIcon name={IconName.ICON_JOB} />
      <StyledIcon name={IconName.ICON_LAYOUT_DASHBOARD} />
      <StyledIcon name={IconName.ICON_MAXIMIZE} />
      <StyledIcon name={IconName.ICON_MESSAGE_CIRCLE} />
      <StyledIcon name={IconName.ICON_MINIMIZE} />
      <StyledIcon name={IconName.ICON_MINIMIZE_1} />
      <StyledIcon name={IconName.ICON_MONITOR_SMARTPHONE} />
      <StyledIcon name={IconName.ICON_MUSIC} />
      <StyledIcon name={IconName.ICON_NOTIFICATION} />
      <StyledIcon name={IconName.ICON_PIN} />
      <StyledIcon name={IconName.ICON_PLANE} />
      <StyledIcon name={IconName.ICON_PLAY} />
      <StyledIcon name={IconName.ICON_PLUS} />
      <StyledIcon name={IconName.ICON_REDIRECT} />
      <StyledIcon name={IconName.ICON_REPLAY} />
      <StyledIcon name={IconName.ICON_REPOST} />
      <StyledIcon name={IconName.ICON_SEARCH} />
      <StyledIcon name={IconName.ICON_SEND} />
      <StyledIcon name={IconName.ICON_SETTINGS} />
      <StyledIcon name={IconName.ICON_SMALL_DOTE} />
      <StyledIcon name={IconName.ICON_SOME_ELEMENTS} />
      <StyledIcon name={IconName.ICON_STAR} />
      <StyledIcon name={IconName.ICON_TROPHY} />
      <StyledIcon name={IconName.ICON_USERS} />
      <StyledIcon name={IconName.ICON_VERIFIED} />
      <StyledIcon name={IconName.ICON_VIDEO} />
      <StyledIcon name={IconName.ICON_VOTE} />
      <StyledIcon name={IconName.ICON_WALLET} />
      <img src={iconUkraine} alt="flag of Ukraine" />
    </StyledBlock>
  );
}

export { Icons };

const StyledBlock = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-width: 400px;
  padding: 6px;
  background-color: white;
`;

const StyledIcon = styled(Icon)`
  &:hover {
    stroke: red;
  }
`;
