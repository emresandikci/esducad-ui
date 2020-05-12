import React from 'react';
import Box from '../box';
import Heading from '../heading';
import Flex from '../flex';
import Divider from '../divider';
export default {
  title: 'Divider',
  parameters: {
    componentSubtitle: 'Divider is a photo view component',
  },
  component: Divider,
};
export const DefaultDivider = () => (
  <Box>
    <Heading as="h2">Example Usage</Heading>
    <Flex py={2} mt={2}>
      <Divider />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
      <Divider variant="groove" />
    </Flex>
  </Box>
);

export const ColoredDividers = () => (
  <Box>
    <Flex py={2} mt={2}>
      <Divider borderColor="primary" />
      <Divider variant="dashed" borderColor="secondary" />
      <Divider variant="dotted" borderColor="success" />
      <Divider variant="groove" borderColor="info" />
    </Flex>
  </Box>
);
