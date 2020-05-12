import React from 'react';
import { Accordion, Box, Text, Heading, Space } from 'components';

export default {
  title: 'Accordion',
  parameters: {
    componentSubtitle: 'Accordion',
  },
  component: Accordion,
};
export const General = () => (
  <Box>
    <Text>Accordion is helping to hide or show content.</Text>
    <Box pt={5}>
      <Heading as="h3">Example</Heading>
    </Box>
    <Box display="flex" flexDirection="column" alignItems="center" py="20px">
      <Space sy={'10px'}>
        <Accordion
          isOpen={true}
          width="600px"
          title="Excepteur sint occaecat cupidatat non "
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Accordion
          width="600px"
          title="Excepteur sint occaecat cupidatat non "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Accordion
          width="600px"
          title="Excepteur sint occaecat cupidatat non "
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Space>
    </Box>
  </Box>
);

export const TitleDescriptionAsaComponent = () => (
  <Box>
    <Accordion
      width="600px"
      title={
        <Heading as="h2" color="secondary">
          Excepteur sint occaecat cupidatat non
        </Heading>
      }
      description={
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Text>
      }
    />
  </Box>
);
