import styled from '@emotion/styled';
import { Children, JSX, PropsWithChildren } from 'react';

type MasonicListProps = PropsWithChildren<{
  className?: string;
}>;

function MasonicList({ className, children }: MasonicListProps): JSX.Element {
  const itemCount = Children.count(children);

  return (
    <StyledMasonicList className={className} itemCount={itemCount}>
      {children}
    </StyledMasonicList>
  );
}

const StyledMasonicList = styled.div<{ itemCount: number }>`
  display: grid;
  grid-template-columns: ${({ itemCount = 3 }) =>
    itemCount === 2 ? '2fr 1fr' : '1fr 1fr 1fr'};
  gap: 16px;

  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledMasonicItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Masonic = {
  List: MasonicList,
  Item: StyledMasonicItem,
};
