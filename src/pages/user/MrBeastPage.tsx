import styled from '@emotion/styled';
import { JSX } from 'react';

import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Tab } from '~/shared/ui/atoms/Tab';
import { withAttrs } from '~/shared/ui/withAttrs';
import { PersonalFileWidget } from '~/widgets/user/personalFileWidget';
import { TopBar } from '~/widgets/user/topBar';
import { Trophy } from '~/widgets/user/Trophy';

import { mrBeastPageData } from './mrBeastPageData';

function MrBeastPage(): JSX.Element {
  return (
    <StyledUserPageContainer>
      <TopBar userRole="viewer" {...mrBeastPageData.header} />
      <StyledTopWrapper>
        <StyledFileWidgetWrapper>
          <PersonalFileWidget files={mrBeastPageData.personalFiles} />
          <StyledTrophyButton active>
            <Icon name="icon-trophy" />
          </StyledTrophyButton>
        </StyledFileWidgetWrapper>
        <StyledMenuWrapper>
          <StyledTabsWrapper>
            {mrBeastPageData.menu.first.map((text) => (
              <Tab key={text} color="default" variant="underline">
                {text}
              </Tab>
            ))}
          </StyledTabsWrapper>
        </StyledMenuWrapper>
      </StyledTopWrapper>

      <Trophy userRole="viewer" {...mrBeastPageData.trophy} />
    </StyledUserPageContainer>
  );
}

export { MrBeastPage };

const StyledUserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: 100%;
  max-width: 952px;
  margin: 0 auto;
`;

const StyledTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: 100%;
  padding: 0 8px;
`;

const StyledFileWidgetWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledTabsWrapper = styled.div`
  display: flex;
`;

const StyledMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledTrophyButton = withAttrs(
  { variant: 'filled', color: 'accent', size: 'medium' },
  IconButton,
);
