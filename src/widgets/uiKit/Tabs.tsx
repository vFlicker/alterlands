import styled from '@emotion/styled';
import { JSX } from 'react';

import { Tab } from '~/shared/ui/atoms/Tab';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

const colors = ['default', 'green', 'gray'] as const;

function Tabs(): JSX.Element {
  return (
    <StyledWrapper>
      <Typography variant="heading-3">Tabs</Typography>

      <StyledTabsWrapper>
        <div>
          <Typography4>Variant underline</Typography4>

          {colors.map((color) => (
            <div>
              <Typography variant="heading-5">Color: {color}</Typography>

              <Tab key={color} variant="underline" color={color}>
                Tab
              </Tab>

              <Tab key={color} variant="underline" color={color} disabled>
                Tab
              </Tab>

              <Tab key={color} variant="underline" color={color} selected>
                Tab
              </Tab>
            </div>
          ))}
        </div>

        <div>
          <Typography4>Variant default</Typography4>

          {colors.map((color) => (
            <div>
              <Typography variant="heading-5">Color: {color}</Typography>

              <Tab key={color} variant="default" color={color}>
                Tab
              </Tab>

              <Tab key={color} variant="default" color={color} disabled>
                Tab
              </Tab>

              <Tab key={color} variant="default" color={color} selected>
                Tab
              </Tab>
            </div>
          ))}
        </div>
      </StyledTabsWrapper>
    </StyledWrapper>
  );
}

export { Tabs };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledTabsWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

const Typography4 = withAttrs(
  { variant: 'heading-4' },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);
