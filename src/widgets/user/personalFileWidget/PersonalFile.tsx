import styled from '@emotion/styled';
import { JSX } from 'react';

import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { Spoiler } from '~/shared/ui/molecules/Spoiler';
import { withAttrs } from '~/shared/ui/withAttrs';

import { LogItem } from './LogItem';
import { PersonalFileData } from './personalFileTypes';

type PersonalFileProps = {
  files: PersonalFileData[];
  className?: string;
};

function PersonalFile({ className, files }: PersonalFileProps): JSX.Element {
  return (
    <StyledPersonalFileWrapper className={className}>
      <StyledTitle>Personal file</StyledTitle>

      <StyledSpoilerList>
        {files.map((file) => (
          <Spoiler key={file.title} title={file.title}>
            <StyledLogItemList>
              {file.items.map((item) => (
                <StyledLogItem key={item.date} {...item} />
              ))}
            </StyledLogItemList>
          </Spoiler>
        ))}
      </StyledSpoilerList>
    </StyledPersonalFileWrapper>
  );
}

export { PersonalFile };

const StyledPersonalFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const StyledTitle = withAttrs(
  { variant: 'heading-3' },
  styled(Typography)`
    position: relative;
    padding: 0 4px;
    ${separatorLineCss(8)}
  `,
);

const StyledSpoilerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledLogItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLogItem = styled(LogItem)`
  padding: 0 12px;
`;
