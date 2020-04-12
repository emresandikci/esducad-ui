import React from 'react';
import Box from '../box';
import Text from '../text';
import Heading from '../heading';

export default {
  title: 'Box',
  parameters: {
    componentSubtitle: 'Responsive box-model layout component',
  },
  component: Box,
};
export const General = () => (
  <Box>
    <Text>
      Box is a helping to create a layout for your pages.You can cover your component with box and
      make them responsive.
    </Text>
    <Box pt={5}>
      <Heading as="h3">Example</Heading>
    </Box>
    <Box display="flex" flexWrap="wrap" height="600px" bg={'lightGray'}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={1 / 2}
        height={'200px'}
        bg={'pink'}
      >
        <Text fontSize="large" fontWeight="bolder" color="white">
          Box
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={1 / 2}
        height={'200px'}
        bg={'darkPink'}
      >
        <Text fontSize="large" fontWeight="bolder" color="white">
          Box
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={1}
        height={'200px'}
        bg={'black'}
      >
        <Text fontSize="large" fontWeight="bolder" color="white">
          Box
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={1 / 3}
        height={'200px'}
        bg={'primary'}
      >
        <Text fontSize="large" fontWeight="bolder" color="white">
          Box
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={1 / 3}
        height={'200px'}
        bg={'secondary'}
      >
        <Text fontSize="large" fontWeight="bolder" color="white">
          Box
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={1 / 3}
        height={'200px'}
        bg={'default'}
      >
        <Text fontSize="large" fontWeight="bolder" color="white">
          Box
        </Text>
      </Box>
    </Box>
  </Box>
);
