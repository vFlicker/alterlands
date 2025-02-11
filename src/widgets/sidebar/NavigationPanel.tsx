import styled from '@emotion/styled';
import { JSX } from 'react';

import { favoriteImages } from '~/shared/assets/images/favorites';
import { SideBarWidgetHeader } from '~/shared/ui/molecules/SideBarWidgetHeader';

function NavigationPanel(): JSX.Element {
  return (
    <StyledNavigationPanelWrapper>
      <SideBarWidgetHeader title="Navigation panel" onButtonClick={() => {}} />

      <StyledNavigationList>
        {favoriteImages.map((image, index) => (
          <StyledNavigationItem key={image}>
            <img src={image} alt={`image-${index}`} />
          </StyledNavigationItem>
        ))}
      </StyledNavigationList>
    </StyledNavigationPanelWrapper>
  );
}

export { NavigationPanel };

const StyledNavigationPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledNavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 0 12px;
`;

const StyledNavigationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 57px;
  height: 57px;
`;
