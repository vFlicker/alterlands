import styled from '@emotion/styled';

const StyledMasonic = styled.div`
  columns: 3;
  column-gap: 16px;

  & > * {
    break-inside: avoid;
    margin-bottom: 16px;
    width: 100%;
  }

  @media screen and (max-width: 1280px) {
    columns: 2;
  }
`;

export { StyledMasonic as Masonic };
