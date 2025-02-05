import styled from '@emotion/styled';
import { JSX } from 'react';

import { Image } from '~/shared/assets/images';
import { SideBarWidgetHeader } from '~/shared/ui/molecules/SideBarWidgetHeader';

function NavigationPanel(): JSX.Element {
  return (
    <StyledWrapper>
      <SideBarWidgetHeader title="Navigation panel" onButtonClick={() => {}} />

      <StyledNavigationList>
        {Image.favorites.map((image, index) => (
          <StyledNavigationItem key={image}>
            <img src={image} alt={`image-${index}`} />
          </StyledNavigationItem>
        ))}
      </StyledNavigationList>
    </StyledWrapper>
  );
}

export { NavigationPanel };

const StyledWrapper = styled.div`
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
