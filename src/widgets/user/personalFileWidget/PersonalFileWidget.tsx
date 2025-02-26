import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { SizeButton } from '~/shared/ui/atoms/SizeButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { Modal } from '~/shared/ui/molecules/Modal';
import { withAttrs } from '~/shared/ui/withAttrs';

import { PersonalFile } from './PersonalFile';
import { PersonalFileData } from './personalFileTypes';

type PersonalFileWidgetProps = {
  files: PersonalFileData[];
  className?: string;
};

function PersonalFileWidget({
  className,
  files,
}: PersonalFileWidgetProps): JSX.Element {
  const [showModal, setShowDialogModal] = useState(false);

  const notesCount = files.reduce((acc, file) => acc + file.items.length, 0);
  const issuesCount = files.reduce(
    (acc, file) => acc + file.items.filter((item) => item.importantText).length,
    0,
  );

  return (
    <>
      <StyledPersonalFileWidgetWrapper className={className}>
        <StyledTextWrapper>
          <StyledTitle>Personal file:</StyledTitle>
          <StyledNotes>{notesCount} notes,</StyledNotes>
          <StyledIssues>{issuesCount} issue</StyledIssues>
        </StyledTextWrapper>
        <SizeButton onClick={() => setShowDialogModal(true)} />
      </StyledPersonalFileWidgetWrapper>

      <Modal isOpen={showModal} onClose={() => setShowDialogModal(false)}>
        <PersonalFile files={files} />
      </Modal>
    </>
  );
}

export { PersonalFileWidget };

const StyledPersonalFileWidgetWrapper = styled.div`
  display: inline-flex;
  gap: 24px;
  padding: 8px 16px;
  border-radius: ${Radius.RADIUS_100};
  background-color: ${Color.WHITE_8};
`;

const StyledTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledTitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyledNotes = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_87 },
  Typography,
);

const StyledIssues = withAttrs(
  { variant: 'body-3', $color: Color.RED_7 },
  styled(Typography)`
    text-decoration: underline;
  `,
);
