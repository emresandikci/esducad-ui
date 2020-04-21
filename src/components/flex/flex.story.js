import React from 'react';
import Box from '../box';
import Heading from '../heading';
import Text from '../text';
import Flex from './index';

export default {
  title: 'Flex',
  parameters: {
    componentSubtitle: 'Flex is helping to create a grid system with flexbox',
  },
  component: Flex,
};
export const SpaceToCards = () => (
  <>
    <Flex display="none">
      <Box
        minHeight="10vh"
        bg="black"
        minWidth="200px"
        width={{ xs: 1, md: 1 / 2, lg: 1 / 4 }}
      ></Box>
      <Box
        minHeight="10vh"
        bg="black"
        minWidth="200px"
        width={{ xs: 1, md: 1 / 2, lg: 1 / 4 }}
      ></Box>
      <Box
        minHeight="10vh"
        bg="black"
        minWidth="200px"
        width={{ xs: 1, md: 1 / 2, lg: 1 / 4 }}
      ></Box>
      <Box
        minHeight="10vh"
        bg="black"
        minWidth="200px"
        width={{ xs: 1, md: 1 / 2, lg: 1 / 4 }}
      ></Box>
    </Flex>
    <Flex gutter="0 .5rem .5rem .5em">
      <Box minHeight="10vh" width={1} bg="black"></Box>
      <Box minHeight="10vh" width={{ _: 1, md: 1 / 2, lg: 1 / 2 }} bg="black"></Box>
      <Box minHeight="10vh" width={{ _: 1, md: 1 / 2, lg: 1 / 2 }} bg="black"></Box>
      <Box minHeight="10vh" width={{ _: 1, md: 1 / 2, lg: 1 / 3 }} bg="black"></Box>
      <Box minHeight="10vh" width={{ _: 1, md: 1 / 2, lg: 1 / 3 }} bg="black"></Box>
      <Box minHeight="10vh" width={{ _: 1, md: 1 / 2, lg: 1 / 3 }} bg="black"></Box>
    </Flex>
    <Flex display="none">
      <Box minHeight="10vh" width={1} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 2} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 2} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 3} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 3} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 3} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 4} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 4} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 4} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 4} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 5} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 5} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 5} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 5} bg="black"></Box>
      <Box minHeight="10vh" width={1 / 5} bg="black"></Box>
    </Flex>
    <Flex display="none">
      <Box width={1} textAlign="center">
        <Heading as="h2">Title</Heading>
      </Box>
      <Box
        width={{ _: 1, sm: 1, md: 1 / 3, lg: 1 / 4 }}
        border="2px solid gray"
        py="44"
        px="28px"
        maxWidth="286px"
      >
        <Heading>Grid Title</Heading>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
      </Box>
      <Box
        width={{ _: 1, sm: 1, md: 1 / 3, lg: 1 / 4 }}
        border="2px solid gray"
        py="44"
        px="28px"
        maxWidth="286px"
      >
        <Heading>Grid Title</Heading>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
      </Box>
      <Box
        width={{ _: 1, sm: 1, md: 1 / 3, lg: 1 / 4 }}
        border="2px solid gray"
        py="44"
        px="28px"
        maxWidth="286px"
      >
        <Heading>Grid Title</Heading>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
      </Box>
      <Box
        width={{ _: 1, sm: 1, md: 1 / 3, lg: 1 / 4 }}
        border="2px solid gray"
        py="44"
        px="28px"
        maxWidth="286px"
      >
        <Heading>Grid Title</Heading>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
        <Text>• Grid Text</Text>
      </Box>
    </Flex>
  </>
);
