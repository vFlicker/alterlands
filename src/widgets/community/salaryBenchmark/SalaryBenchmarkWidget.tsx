import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { SalaryBenchmark } from './SalaryBenchmark';
import { SalaryBenchmarkData } from './salaryBenchmarkTypes';

type SalaryBenchmarkWidgetProps = {
  widgetTitle: string;
  data: SalaryBenchmarkData[];
  className?: string;
};

const actionButtonsNames = [
  'dollar',
  'middle-smile',
  'graph',
  'open-door',
] as const;

function SalaryBenchmarkWidget({
  className,
  data,
  widgetTitle,
}: SalaryBenchmarkWidgetProps): JSX.Element {
  return (
    <StyledSalaryBenchmarkWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={
          <StyledActionsWrapper>
            {actionButtonsNames.map((name) => (
              <StyledActionButton
                size="medium"
                color="neutral"
                variant="filled"
              >
                <Icon name={`icon-${name}`} />
              </StyledActionButton>
            ))}
          </StyledActionsWrapper>
        }
      />

      <SalaryBenchmark data={data} />
    </StyledSalaryBenchmarkWidgetWrapper>
  );
}

export { SalaryBenchmarkWidget };

const StyledSalaryBenchmarkWidgetWrapper = styled.div`
  padding: 20px 16px;
  border: 1px solid ${Color.WHITE_16};
  border-radius: ${Radius.RADIUS_16};
  background-color: transparent;
`;

const StyledActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledActionButton = styled(IconButton)`
  svg {
    stroke: ${Color.WHITE_42};
  }

  &:first-child {
    background-color: ${Color.WHITE_30};

    svg {
      stroke: ${Color.WHITE_98};
    }
  }
`;
