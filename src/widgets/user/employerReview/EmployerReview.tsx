import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Icon } from '~/shared/ui/atoms/Icon';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

type EmployerReviewWidgetProps = {
  className?: string;
};

const menuItems = [
  {
    iconName: 'icon-users',
    title: '155 employees',
    votes: '',
  },
  {
    iconName: 'icon-job',
    title: '15 open positions',
    votes: '',
  },
  {
    iconName: '',
    title: 'Recommended by 100 people',
    votes: '155 votes',
  },
  {
    iconName: '',
    title: 'Dream Employer: 125',
    votes: '200 votes',
  },
] as const;

function EmployerReviewWidget({
  className,
}: EmployerReviewWidgetProps): JSX.Element {
  return (
    <StyledEmployerReviewWidgetWrapper className={className}>
      <WidgetHeader title="Employer review" />

      <StyledList>
        {menuItems.map(({ title, votes, iconName }) => (
          <StyledItem key={title}>
            {iconName && <StyledIcon name={iconName} />}
            <StyledTitle>{title}</StyledTitle>
            <StyledVotes>{votes}</StyledVotes>
          </StyledItem>
        ))}
      </StyledList>
    </StyledEmployerReviewWidgetWrapper>
  );
}

export { EmployerReviewWidget };

const StyledEmployerReviewWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_8};
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;

  &:not(:last-child) {
    ${separatorLineCss(0, Color.WHITE_16)}
  }
`;

const StyledIcon = styled(Icon)`
  margin-right: 12px;
`;

const StyledTitle = withAttrs({ variant: 'body-3' }, Typography);

const StyledVotes = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  styled(Typography)`
    margin-left: auto;
  `,
);
