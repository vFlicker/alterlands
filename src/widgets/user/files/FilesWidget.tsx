import styled from '@emotion/styled';
import { JSX } from 'react';

import { mrBeastImage } from '~/shared/assets/images/user/mrBeast';
import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

type FilesWidgetProps = {
  className?: string;
};

const menuItems = [
  {
    image: mrBeastImage.file.image,
    title: 'Add',
    date: '7 Mar 2025',
  },
  {
    image: mrBeastImage.file.folder,
    title: 'Pyramids',
    date: '2 Mar 2025',
  },
  {
    image: mrBeastImage.file.folder,
    title: 'Money',
    date: '27 Feb 2025',
  },
  {
    image: mrBeastImage.file.folder,
    title: 'Help',
    date: '21 Feb 2025',
  },
  {
    image: mrBeastImage.file.music,
    title: 'Ideas',
    date: '31 Dec 2024',
  },
  {
    image: mrBeastImage.file.folder,
    title: 'Pranks',
    date: '18 Dec 2025',
  },
];

function FilesWidget({ className }: FilesWidgetProps): JSX.Element {
  return (
    <StyledFilesWidgetWrapper className={className}>
      <WidgetHeader
        title="Files"
        actions={
          <StyledIconButton>
            <Icon name="icon-lock" />
          </StyledIconButton>
        }
      />

      <div>
        <div>
          You see this content because MrBeast has added you to the
          <span>YouTube Work</span> group
        </div>

        <StyledList>
          {menuItems.map(({ date, image, title }) => (
            <StyledItem key={title}>
              <StyledImage src={image} />
              <StyledTitle>{title}</StyledTitle>
              <StyledDate>{date}</StyledDate>
            </StyledItem>
          ))}
        </StyledList>
      </div>
    </StyledFilesWidgetWrapper>
  );
}

export { FilesWidget };

const StyledFilesWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledIconButton = withAttrs(
  {
    size: 'small',
    variant: 'outlined',
    color: 'transparent',
  },
  styled(IconButton)`
    svg {
      stroke: ${Color.WHITE_64};

      &:hover {
        stroke: ${Color.WHITE_98};
      }
    }
  `,
);

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_8};
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;

  &:not(:last-child) {
    ${separatorLineCss(0, Color.WHITE_16)}
  }
`;

const StyledImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const StyledTitle = withAttrs({ variant: 'body-2' }, Typography);

const StyledDate = withAttrs(
  { variant: 'body-5', $color: Color.WHITE_70 },
  styled(Typography)`
    margin-left: auto;
  `,
);
