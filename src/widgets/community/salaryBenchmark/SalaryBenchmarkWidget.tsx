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
  data: {
    hasActions: boolean;
    hasOptions: boolean;
    description: string;
    items: SalaryBenchmarkData[];
  };
  theme: 'light' | 'dark';
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
  theme,
  widgetTitle,
}: SalaryBenchmarkWidgetProps): JSX.Element {
  const { hasActions, description, items, hasOptions } = data;

  return (
    <StyledSalaryBenchmarkWidgetWrapper theme={theme} className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={
          hasActions ? (
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
          ) : undefined
        }
      />

      <SalaryBenchmark
        hasOptions={hasOptions}
        description={description}
        data={items}
      />
    </StyledSalaryBenchmarkWidgetWrapper>
  );
}

export { SalaryBenchmarkWidget };

const StyledSalaryBenchmarkWidgetWrapper = styled.div<{
  theme: 'light' | 'dark';
}>`
  padding: 20px 16px;
  border-radius: ${Radius.RADIUS_16};

  border: 1px solid
    ${({ theme }) => (theme === 'dark' ? 'transparent' : Color.WHITE_16)};

  background-color: ${({ theme }) =>
    theme === 'dark' ? Color.DARK : 'transparent'};
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
