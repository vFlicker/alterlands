import styled from '@emotion/styled';
import { JSX } from 'react';

import { Button } from '~/shared/ui/atoms/Button';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { SecondaryButton } from '~/shared/ui/atoms/SecondaryButton';
import { Typography } from '~/shared/ui/atoms/Typography';

function Buttons(): JSX.Element {
  return (
    <StyledWrapper>
      <Typography variant="heading-3">Buttons</Typography>

      <StyledButtonsWrapper>
        <Button size="medium" color="accent" variant="filled">
          accent filled
        </Button>
        <Button size="medium" color="secondary" variant="filled">
          secondary filled
        </Button>
        <Button size="medium" color="neutral" variant="filled">
          neutral filled
        </Button>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <Button size="medium" color="accent" variant="filled" disabled>
          accent filled disabled
        </Button>
        <Button size="medium" color="secondary" variant="filled" disabled>
          secondary filled disabled
        </Button>
        <Button size="medium" color="neutral" variant="filled" disabled>
          neutral filled disabled
        </Button>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <Button size="medium" color="accent" variant="outlined">
          accent outlined
        </Button>
        <Button size="medium" color="secondary" variant="outlined">
          secondary outlined
        </Button>
        <Button size="medium" color="neutral" variant="outlined">
          neutral outlined
        </Button>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <Button size="medium" color="accent" variant="outlined" disabled>
          accent outlined disabled
        </Button>
        <Button size="medium" color="secondary" variant="outlined" disabled>
          secondary outlined disabled
        </Button>
        <Button size="medium" color="neutral" variant="outlined" disabled>
          neutral outlined disabled
        </Button>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <Button
          size="medium"
          variant="filled"
          color="accent"
          leftIcon={<Icon name="icon-plus" />}
        >
          filled accent icon left
        </Button>
        <Button
          size="medium"
          variant="filled"
          color="accent"
          rightIcon={<Icon name="icon-plus" />}
        >
          filled accent icon right
        </Button>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <Button size="medium" color="accent" variant="filled">
          accent filled
        </Button>
        <Button size="medium" color="secondary" variant="filled">
          secondary filled
        </Button>
        <Button size="medium" color="neutral" variant="filled">
          neutral filled
        </Button>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <Button size="small" color="accent" variant="filled" disabled>
          accent filled disabled
        </Button>
        <Button size="small" color="secondary" variant="filled" disabled>
          secondary filled disabled
        </Button>
        <Button size="small" color="neutral" variant="filled" disabled>
          neutral filled disabled
        </Button>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <Button size="small" color="accent" variant="outlined">
          accent outlined
        </Button>
        <Button size="small" color="secondary" variant="outlined">
          secondary outlined
        </Button>
        <Button size="small" color="neutral" variant="outlined">
          neutral outlined
        </Button>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <Button size="small" color="accent" variant="outlined" disabled>
          accent outlined disabled
        </Button>
        <Button size="small" color="secondary" variant="outlined" disabled>
          secondary outlined disabled
        </Button>
        <Button size="small" color="neutral" variant="outlined" disabled>
          neutral outlined disabled
        </Button>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <Button
          size="small"
          variant="filled"
          color="accent"
          leftIcon={<Icon name="icon-plus" />}
        >
          filled accent icon left
        </Button>
        <Button
          size="small"
          variant="filled"
          color="accent"
          rightIcon={<Icon name="icon-plus" />}
        >
          filled accent icon right
        </Button>
      </StyledButtonsWrapper>

      <Typography variant="heading-3">Icon buttons</Typography>

      <StyledButtonsWrapper>
        <p>accent filled medium</p>
        <IconButton color="accent" variant="filled" size="medium">
          <Icon name="icon-chevron-down" />
        </IconButton>

        <p>neutral filled medium</p>
        <IconButton color="neutral" variant="filled" size="medium">
          <Icon name="icon-chevron-down" />
        </IconButton>

        <p>transparent filled medium</p>
        <IconButton color="transparent" variant="filled" size="medium">
          <Icon name="icon-chevron-down" />
        </IconButton>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <p>accent filled small</p>
        <IconButton color="accent" variant="filled" size="small">
          <Icon name="icon-chevron-down" />
        </IconButton>

        <p>neutral filled small</p>
        <IconButton color="neutral" variant="filled" size="small">
          <Icon name="icon-chevron-down" />
        </IconButton>

        <p>transparent filled small</p>
        <IconButton color="transparent" variant="filled" size="small">
          <Icon name="icon-chevron-down" />
        </IconButton>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <p>accent outlined medium</p>
        <IconButton color="accent" variant="outlined" size="medium">
          <Icon name="icon-chevron-down" />
        </IconButton>

        <p>neutral outlined medium</p>
        <IconButton color="neutral" variant="outlined" size="medium">
          <Icon name="icon-chevron-down" />
        </IconButton>

        <p>transparent outlined medium</p>
        <IconButton color="transparent" variant="outlined" size="medium">
          <Icon name="icon-chevron-down" />
        </IconButton>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <p>accent outlined small</p>
        <IconButton color="accent" variant="outlined" size="small">
          <Icon name="icon-chevron-down" />
        </IconButton>

        <p>neutral outlined small</p>
        <IconButton color="neutral" variant="outlined" size="small">
          <Icon name="icon-chevron-down" />
        </IconButton>

        <p>transparent outlined small</p>
        <IconButton color="transparent" variant="outlined" size="small">
          <Icon name="icon-chevron-down" />
        </IconButton>
      </StyledButtonsWrapper>

      <Typography variant="heading-3">Label buttons</Typography>

      <StyledButtonsWrapper>
        <LabelButton color="white">Neutral</LabelButton>
        <LabelButton color="blue">Neutral</LabelButton>
        <LabelButton color="red">Neutral</LabelButton>
        <LabelButton color="green">Neutral</LabelButton>
      </StyledButtonsWrapper>

      <StyledButtonsWrapper>
        <LabelButton color="white" disabled>
          Neutral
        </LabelButton>
        <LabelButton color="blue" disabled>
          Neutral
        </LabelButton>
        <LabelButton color="red" disabled>
          Neutral
        </LabelButton>
        <LabelButton color="green" disabled>
          Neutral
        </LabelButton>
      </StyledButtonsWrapper>

      <Typography variant="heading-3">Secondary buttons</Typography>
      <StyledButtonsWrapper>
        <SecondaryButton color="green">Neutral</SecondaryButton>
        <SecondaryButton color="blue">Neutral</SecondaryButton>
        <SecondaryButton color="red">Neutral</SecondaryButton>
      </StyledButtonsWrapper>
    </StyledWrapper>
  );
}

export { Buttons };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;
