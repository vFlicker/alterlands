import styled from '@emotion/styled';
import { JSX } from 'react';

import { allNavigationImages } from '~/shared/assets/images';
import { ConfigurationHeader } from '~/shared/ui/ConfigurationHeader';

function NavigationPanel(): JSX.Element {
  return (
    <StyledWrapper>
      <ConfigurationHeader title="Navigation panel" onButtonClick={() => {}} />

      <StyledNavigationList>
        {allNavigationImages.map((image, index) => (
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
