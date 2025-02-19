import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { UpcomingRace } from './UpcomingRace';
import { UpcomingRaceData } from './upcomingRacesTypes';

type UpcomingRacesWidgetProps = {
  widgetTitle: string;
  data: UpcomingRaceData[];
  className?: string;
};

function UpcomingRacesWidget({
  className,
  data,
  widgetTitle,
}: UpcomingRacesWidgetProps): JSX.Element {
  return (
    <StyledUpcomingRacesWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={
          <IconButton size="small" variant="filled" color="transparent">
            <Icon name="icon-maximize" />
          </IconButton>
        }
      />

      <StyledUpcomingRaceList>
        {data.map((upcomingRace) => (
          <StyledUpcomingRace key={upcomingRace.id} {...upcomingRace} />
        ))}
      </StyledUpcomingRaceList>
    </StyledUpcomingRacesWidgetWrapper>
  );
}

export { UpcomingRacesWidget };

const StyledUpcomingRacesWidgetWrapper = styled.div``;

const StyledUpcomingRaceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledUpcomingRace = styled(UpcomingRace)`
  padding-bottom: 8px;

  &:not(:last-child) {
    ${separatorLineCss(8)}
  }
`;
