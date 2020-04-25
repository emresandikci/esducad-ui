import React from 'react';
import { Box, Text, Flex } from '../components';
import { defaultTheme } from '../utils';

export default {
  title: 'Colors',
  parameters: {
    componentSubtitle: 'Base Colors of the UI Kit',
  },
  component: Box,
};
export const General = () => (
  <Box>
    <Text>Colors is a helping to make harmonious for your design.</Text>
    <Flex>
      {Object.entries(defaultTheme.colors).map((color) => (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          size="150px"
          bg={color[0]}
          css={`
            cursor: pointer;
          `}
        >
          <Text fontSize="large" fontWeight="bolder" color="white">
            {`${color[0]} - ${color[1]}`}
          </Text>
        </Box>
      ))}
    </Flex>
  </Box>
);
