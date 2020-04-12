import React from 'react';
import Box from '../box';
import Heading from '../heading';

export default {
  title: 'Headings',
  parameters: {
    componentSubtitle: 'Heading allow users to show title as they wish',
  },
  component: Heading,
};

export const General = () => (
  <Box>
    <Heading mb={3}>Example Usage</Heading>
    <Heading as="h3">with H3 tag- Contrary to popular belief</Heading>
  </Box>
);

export const DefaultHeadding = () => <Heading>Default as H1</Heading>;

export const H2Heading = () => (
  <Heading as="h2">example text as H2 - Contrary to popular belief</Heading>
);
export const H3Heading = () => (
  <Heading as="h3">example text as H3 - Contrary to popular belief</Heading>
);
export const H4Heading = () => (
  <Heading as="h4">example text as H4 - Contrary to popular belief</Heading>
);
export const H5Heading = () => (
  <Heading as="h5">example text as H5 - Contrary to popular belief</Heading>
);
export const H6Heading = () => (
  <Heading as="h6">example text as H6 - Contrary to popular belief</Heading>
);
export const HeadingWithColor = () => (
  <Box>
    <Heading color="primary" fontWeight="bold" mb={3}>
      Primary - Contrary to popular belief
    </Heading>
    <Heading color="secondary" fontWeight="bold" mb={3}>
      Secondary - Contrary to popular belief
    </Heading>
    <Heading color="gold" fontWeight="bold">
      Gold - Contrary to popular belief
    </Heading>
  </Box>
);
