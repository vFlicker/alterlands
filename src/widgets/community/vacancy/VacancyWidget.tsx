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
  theme: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
};

function VacancyWidget({
  className,
  widgetTitle,
  theme,
  data,
  onClick,
}: VacancyWidgetProps): JSX.Element {
  return (
    <StyledVacancyWidgetWrapper className={className} theme={theme}>
      <WidgetHeader title={widgetTitle} />

      <StyledVacancyList>
        {data.map((vacancy) => (
          <StyledVacancy
            theme={theme}
            key={vacancy.id}
            {...vacancy}
            onClick={onClick}
          />
        ))}
      </StyledVacancyList>
    </StyledVacancyWidgetWrapper>
  );
}

export { VacancyWidget };

const StyledVacancyWidgetWrapper = styled.div<{ theme: 'light' | 'dark' }>`
  padding: 20px 16px;
  border-radius: ${Radius.RADIUS_16};

  border: 1px solid
    ${({ theme }) => (theme === 'dark' ? 'transparent' : Color.WHITE_16)};

  background-color: ${({ theme }) =>
    theme === 'dark' ? Color.DARK : 'transparent'};
`;

const StyledVacancyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledVacancy = styled(Vacancy)`
  &:not(:last-child) {
    ${({ theme }) =>
      theme === 'dark'
        ? separatorLineCss(16, Color.WHITE_8)
        : separatorLineCss(16, Color.WHITE_16)}
  }
`;
