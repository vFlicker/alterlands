import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';

import { Icon } from '../atoms/Icon';
import { IconButton } from '../atoms/IconButton';
import { withAttrs } from '../withAttrs';

function SliderFooter(): JSX.Element {
  return (
    <StyledSliderFooterWrapper>
      <StyledButtonWrapper>
        <StyledArrowButton size="small" variant="filled" color="transparent">
          <Icon name="icon-chevron-left" />
        </StyledArrowButton>
        <StyledSliderButtonList>
          {[1, 2, 3, 4].map((page) => (
            <StyledSliderButton key={page} isActive={page === 1} type="button">
              {page}
            </StyledSliderButton>
          ))}
        </StyledSliderButtonList>
        <StyledArrowButton size="small" variant="filled" color="transparent">
          <Icon name="icon-chevron-right" />
        </StyledArrowButton>
      </StyledButtonWrapper>
      <StyledListSize>
        Show 20 per page
        <StyledShowMoreButton>
          <Icon name="icon-chevron-down" />
        </StyledShowMoreButton>
      </StyledListSize>
    </StyledSliderFooterWrapper>
  );
}

export { SliderFooter };

const StyledSliderFooterWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledSliderButtonList = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledSliderButton = styled.button<{ isActive: boolean }>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  color: ${Color.WHITE_64};
  cursor: pointer;

  &:hover {
    background-color: ${Color.WHITE_16};
  }

  &:not(:last-child)::after {
    content: '';

    position: absolute;
    right: -4px;

    width: 1px;
    height: 24px;

    background-color: ${Color.WHITE_16};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${Color.WHITE_98};

      background-color: ${Color.ACCENT};

      &:hover {
        background-color: ${Color.ACCENT};
      }

      &::after {
        content: '';
        display: none;
      }
    `}
`;

const StyledArrowButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${Color.WHITE_98};
`;

const StyledListSize = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
  gap: 10px;

  color: ${Color.WHITE_64};
`;

const StyledShowMoreButton = withAttrs(
  {
    size: 'small',
    variant: 'filled',
    color: 'transparent',
  },
  IconButton,
);
