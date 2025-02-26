import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { LogData } from './personalFileTypes';

type LogItemProps = LogData & {
  className?: string;
};

function LogItem({
  className,
  date,
  text,
  additional,
  importantText,
  link,
  secondaryLink,
}: LogItemProps): JSX.Element {
  return (
    <StyledLogItemWrapper className={className}>
      <StyledDate>{date}</StyledDate>
      <StyledTextWrapper>
        {importantText && (
          <StyledImportantText>{importantText}</StyledImportantText>
        )}
        <StyledText>{text}</StyledText>
      </StyledTextWrapper>
      <StyledFooter>
        {link && <StyledLink>{link}</StyledLink>}
        {secondaryLink && (
          <StyledSecondaryLink>{secondaryLink}</StyledSecondaryLink>
        )}
        {additional && <StyledAdditional>{additional}</StyledAdditional>}
      </StyledFooter>
    </StyledLogItemWrapper>
  );
}

export { LogItem };

const StyledLogItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDate = withAttrs(
  { variant: 'body-5', $color: Color.WHITE_42 },
  styled(Typography)`
    margin-bottom: 4px;
  `,
);

const StyledTextWrapper = styled.div`
  margin-bottom: 2px;
`;

const StyledText = withAttrs({ variant: 'body-1', as: 'span' }, Typography);

const StyledImportantText = withAttrs(
  { variant: 'body-1', $color: Color.RED_7, as: 'span' },
  Typography,
);

const StyledFooter = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledLink = withAttrs(
  { variant: 'body-3', $color: Color.ACCENT },
  styled(Typography)`
    text-decoration: underline;
  `,
);

const StyledSecondaryLink = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_42 },
  styled(Typography)`
    text-decoration: underline;
  `,
);

const StyledAdditional = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_70 },
  Typography,
);
