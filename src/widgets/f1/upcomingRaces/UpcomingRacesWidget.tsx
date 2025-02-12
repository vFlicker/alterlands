import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Input } from '~/shared/ui/atoms/Input';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { UpcomingRace } from './UpcomingRaces';
import { UpcomingRacesData } from './upcomingRacesTypes';

type UpcomingRacesWidgetProps = {
  widgetTitle: string;
  data: UpcomingRacesData[];
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

      <StyledUpcomingRacesWrapper>
        <StyledUpcomingRaceList>
          {data.map((upcomingRace) => (
            <StyledUpcomingRace key={upcomingRace.id} {...upcomingRace} />
          ))}
        </StyledUpcomingRaceList>

        <Input
          placeholder="Write comment..."
          rightIcon={<Icon name="icon-send" />}
        />
      </StyledUpcomingRacesWrapper>
    </StyledUpcomingRacesWidgetWrapper>
  );
}

export { UpcomingRacesWidget };

const StyledUpcomingRacesWidgetWrapper = styled.div``;

const StyledUpcomingRacesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledUpcomingRaceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const StyledUpcomingRace = styled(UpcomingRace)`
  &:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      width: 100%;
      height: 1px;
      background-color: ${Color.WHITE_16};
    }
  }
`;
