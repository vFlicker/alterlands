import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Button } from '~/shared/ui/atoms/Button';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import {
  Typography,
  TypographyVariantToCss,
} from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { AmountCard } from './AmountCard';
import { AmountCardData } from './topBarTypes';

type Property = {
  name: string;
  value: string;
  link?: string;
};

type TopBarProps = {
  title: string;
  avatarUrl: string;
  flagUrl: string;
  properties: Property[];
  amountCards: AmountCardData[];
  className?: string;
};

function TopBar({
  className,
  title,
  avatarUrl,
  amountCards,
  properties,
  flagUrl,
}: TopBarProps): JSX.Element {
  return (
    <StyledTopBarWrapper className={className}>
      <StyledLeftWrapper>
        <StyledAvatar src={avatarUrl} />
        <StyledInfoWrapper>
          <StyledCountryName>
            {title} <StyledFlag src={flagUrl} alt="ua" />
          </StyledCountryName>
          <StyledPropertyList>
            {properties.map(({ name, value, link }) => (
              <StyledPropertyItem key={name}>
                <StyledPropertyName>{name}</StyledPropertyName>
                <StyledPropertyValue>
                  {value}
                  {link && (
                    <StyledLinkButton
                      color="transparent"
                      size="small"
                      variant="filled"
                    >
                      <Icon name="icon-redirect" />
                    </StyledLinkButton>
                  )}
                </StyledPropertyValue>
              </StyledPropertyItem>
            ))}
          </StyledPropertyList>
        </StyledInfoWrapper>
      </StyledLeftWrapper>

      <StyledActionWrapper>
        <StyledActionButton size="medium" color="accent" variant="outlined">
          Details
        </StyledActionButton>
        <StyledActionButton size="medium" color="accent" variant="outlined">
          Offer
        </StyledActionButton>
        <StyledActionButton size="medium" color="accent" variant="filled">
          Follow
        </StyledActionButton>
      </StyledActionWrapper>

      <StyledCardsWrapper>
        {amountCards.map((cardData) => (
          <AmountCard key={cardData.id} {...cardData} />
        ))}
      </StyledCardsWrapper>
    </StyledTopBarWrapper>
  );
}

export { TopBar };

const StyledTopBarWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content) 1fr;
  grid-template-rows: auto auto;
  gap: 48px;

  padding: 24px;
  border-radius: ${Radius.RADIUS_16};

  background-color: ${Color.DARK};

  @media (max-width: 1850px) {
    gap: 36px;
  }
`;

const StyledLeftWrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / 3;
  align-self: center;

  display: flex;
  gap: 24px;

  @media (max-width: 1850px) {
    grid-row: 1;
    grid-column: 1;
  }
`;

const StyledActionWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;
  justify-self: right;

  display: flex;
  gap: 8px;

  @media (max-width: 1850px) {
    grid-row: 1;
    grid-column: 2;
    align-items: flex-start;
  }
`;

const StyledActionButton = styled(Button)`
  width: 120px;
`;

const StyledCardsWrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
  justify-content: end;

  display: flex;
  gap: 16px;

  @media (max-width: 1850px) {
    grid-column: 1 / 3;
  }
`;

const StyledAvatar = styled.img`
  width: 200px;
  height: 198px;
  border-radius: ${Radius.RADIUS_8};
  object-fit: cover;
`;

const StyledInfoWrapper = styled.div``;

const StyledCountryName = withAttrs(
  { variant: 'heading-2' },
  styled(Typography)`
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 24px;
  `,
);

const StyledPropertyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledPropertyItem = styled.li`
  display: grid;
  gap: 4px;
  grid-template-columns: 72px 1fr;
`;

const StyledPropertyName = styled.div`
  color: ${Color.WHITE_64};
  ${TypographyVariantToCss['body-3']};
`;

const StyledPropertyValue = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  ${TypographyVariantToCss['body-2']}
`;

const StyledLinkButton = withAttrs(
  { color: 'transparent', variant: 'filled', size: 'small' },
  styled(IconButton)`
    width: 16px;
    height: 16px;

    svg {
      width: inherit;
      height: inherit;
      stroke: ${Color.WHITE_42};
    }

    &:hover {
      svg {
        stroke: ${Color.WHITE_98};
      }
    }
  `,
);

const StyledFlag = styled.img`
  width: 24px;
  height: 24px;
`;
