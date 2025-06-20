import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';

import { Typography } from './Typography';

export type Block = {
  title?: string;
  paragraph?: string;
  list?: string[];
  image?: string;
};

type ListProps = {
  className?: string;
  items: string[];
};

type Props = {
  className?: string;
  children: React.ReactNode;
};

type ImageProps = {
  src: string;
};

function Subtitle({ children }: Props): JSX.Element {
  return <StyledSubtitle variant="heading-4">{children}</StyledSubtitle>;
}

function Paragraph({ children }: Props): JSX.Element {
  return (
    <Typography variant="body-3" $color={Color.WHITE_87}>
      {children}
    </Typography>
  );
}

function Image({ src }: ImageProps): JSX.Element {
  return <StyledImage src={src} />;
}

function List({ className, items }: ListProps): JSX.Element {
  return (
    <StyledList className={className}>
      {items.map((item) => (
        <StyledListItem key={item}>
          <Paragraph>{item}</Paragraph>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledSubtitle = styled(Typography)`
  margin-bottom: 12px;
`;

const StyledList = styled.ul``;

const StyledListItem = styled.li`
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${Color.WHITE_87};
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
`;

export const BlockElement = {
  Title: Subtitle,
  Paragraph,
  List,
  Image,
};
