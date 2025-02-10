import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

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

  & > * {
    padding: 20px 16px;
    border-radius: ${Radius.RADIUS_16};
    background-color: ${Color.DARK};
  }
`;

export const Masonic = {
  List: StyledMasonicList,
  Item: StyledMasonicItem,
};
