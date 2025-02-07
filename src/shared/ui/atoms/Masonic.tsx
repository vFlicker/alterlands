import styled from '@emotion/styled';

const StyledMasonicList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  List: StyledMasonicList,
  Item: StyledMasonicItem,
};
