import styled from '@emotion/styled';
import { JSX } from 'react';

import { Tab } from '~/shared/ui/atoms/Tab';
import { Typography } from '~/shared/ui/atoms/Typography';
import { Breadcrumbs } from '~/shared/ui/molecules/Breadcrumbs';
import { withAttrs } from '~/shared/ui/withAttrs';

type TopBarProps = {
  pageTitle: string;
  breadcrumbs: string[];
  menu: string[];
  className?: string;
};

function TopBar({
  className,
  pageTitle,
  breadcrumbs,
  menu,
}: TopBarProps): JSX.Element {
  return (
    <StyledTobBarWrapper className={className}>
      <StyledBreadcrumbs items={breadcrumbs} />
      <StyledPageTitle>{pageTitle}</StyledPageTitle>
      <StyledTabsWrapper>
        {menu.map((text, index) => (
          <StyledTab
            key={text}
            color="default"
            variant="underline"
            selected={index === 0}
          >
            {text}
          </StyledTab>
        ))}
      </StyledTabsWrapper>
    </StyledTobBarWrapper>
  );
}

export { TopBar };

const StyledTobBarWrapper = styled.div``;

const StyledBreadcrumbs = styled(Breadcrumbs)`
  margin-bottom: 28px;
  padding: 0 12px;
`;

const StyledPageTitle = withAttrs(
  { variant: 'heading-1' },
  styled(Typography)`
    margin-bottom: 48px;
    padding: 0 16px;
  `,
);

const StyledTabsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 0 12px;
`;

const StyledTab = styled(Tab)`
  padding: 8px 32px;
`;
