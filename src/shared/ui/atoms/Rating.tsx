/* eslint-disable prettier/prettier */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { commonImage } from '~/shared/assets/images/common';

import { visuallyHiddenCss } from '../css/visuallyHiddenCss';

type RatingProps = {
  size: `${RatingSize}`;
  value: number;
  className?: string;
};

const enum RatingSize {
  MEDIUM = 'medium',
}

function Rating({ className, value, size }: RatingProps): JSX.Element {
  return (
    <StyledRating className={className} size={size}>
      <StyledStarIcon value={value}></StyledStarIcon>
      <StyledText>Rating</StyledText>
    </StyledRating>
  );
}

export { Rating, RatingSize };

const calculateWidthPercentage = (rating: number): string => {
  const clampedRating = Math.max(0, Math.min(rating, 5));
  return `${(clampedRating / 5) * 100}%`;
};

const StyledStarIcon = styled.span<Pick<RatingProps, 'value'>>`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: ${({ value: rating }) => calculateWidthPercentage(rating)};
  height: 100%;
  overflow: hidden;

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    background: url("${commonImage.activeStars}") transparent no-repeat center;
  }
`;

const SizeMixin = (width: number, height: number) => css`
  width: ${width}px;
  height: ${height}px;

  &::before {
    width: ${width}px;
    background-size: ${width}px ${height}px;
  }

  ${StyledStarIcon}::before {
    width: ${width}px;
    background-size: ${width}px ${height}px;
  }
`;

const RatingSizeToCSS = {
  [RatingSize.MEDIUM]: SizeMixin(120, 24),
};

const StyledRating = styled.div<Pick<RatingProps, 'size'>>`
  position: relative;
  display: block;
  font-size: 0;

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    background: url("${commonImage.inactiveStars}") transparent no-repeat center;
  }

  ${({ size }) => RatingSizeToCSS[size]}
`;


const StyledText = styled.span`
  ${visuallyHiddenCss}
`;
