import styled from '@emotion/styled';
import { JSX } from 'react';

import { Tab } from '~/shared/ui/atoms/Tab';

import { communityPageData } from './communityPageData';

function CommunityPage(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledTabsWrapper>
        {communityPageData.menu.first.map((text, index) => (
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
    </StyledWrapper>
  );
}

export { CommunityPage };

const StyledWrapper = styled.div``;

const StyledTabsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

const StyledTab = styled(Tab)`
  padding: 8px 32px;
`;
