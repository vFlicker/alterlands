import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Vacancy } from './Vacancy';
import { VacancyData } from './vacancyTypes';

type VacancyWidgetProps = {
  widgetTitle: string;
  data: VacancyData[];
  className?: string;
};

function VacancyWidget({
  className,
  widgetTitle,
  data,
}: VacancyWidgetProps): JSX.Element {
  return (
    <StyledVacancyWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledVacancyList>
        {data.map((vacancy) => (
          <StyledVacancy key={vacancy.id} {...vacancy} />
        ))}
      </StyledVacancyList>
    </StyledVacancyWidgetWrapper>
  );
}

export { VacancyWidget };

const StyledVacancyWidgetWrapper = styled.div`
  padding: 20px 16px;
  border: 1px solid ${Color.WHITE_16};
  border-radius: ${Radius.RADIUS_16};
  background-color: transparent;
`;

const StyledVacancyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledVacancy = styled(Vacancy)`
  &:not(:last-child) {
    ${separatorLineCss(16, Color.WHITE_16)}
  }
`;
