import styled from '@emotion/styled';
import { JSX } from 'react';

import { Button } from '~/shared/ui/atoms/Button';
import { Icon } from '~/shared/ui/atoms/Icon';
import { Tab } from '~/shared/ui/atoms/Tab';
import { PersonalFileWidget } from '~/widgets/user/personalFileWidget';
import { TopBar } from '~/widgets/user/topBar';
import { Trophy } from '~/widgets/user/trophy/TrophyWidget';

import { currentUserPageData } from './currentUserPageData';

function CurrentUserPage(): JSX.Element {
  return (
    <StyledUserPageContainer>
      <TopBar userRole="owner" {...currentUserPageData.header} />
      <StyledTopWrapper>
        <PersonalFileWidget files={currentUserPageData.personalFiles} />
        <StyledMenuWrapper>
          <StyledTabsWrapper>
            {currentUserPageData.menu.first.map((text, index) => (
              <Tab
                key={text}
                color="default"
                variant="underline"
                selected={index === 0}
              >
                {text}
              </Tab>
            ))}
          </StyledTabsWrapper>

          <Button
            size="medium"
            variant="filled"
            color="accent"
            leftIcon={<Icon name="icon-plus" />}
          >
            Publish
          </Button>
        </StyledMenuWrapper>
      </StyledTopWrapper>

      <Trophy userRole="owner" {...currentUserPageData.trophy} />
    </StyledUserPageContainer>
  );
}

export { CurrentUserPage };

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

const StyledTabsWrapper = styled.div`
  display: flex;
`;

const StyledMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
