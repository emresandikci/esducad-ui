import React from 'react';
import Box from '../box';
import Heading from '../heading';
import Text from '../text';
import Navbar from '../navbar';
import Button from '../button';
import Space from '../space';
import logo from '../../../.storybook/images/logo.svg';

export default {
  title: 'Navbar',
  parameters: {
    componentSubtitle: 'Navbar is a navigate website links.',
  },
  component: Navbar,
};
export const General = () => (
  <Box>
    <Box mb={3}>
      <Heading as="h3">Default Navbar</Heading>
    </Box>
    <Box pt={4} height="300px" bg="lightGray" px="2">
      <Navbar />
    </Box>
  </Box>
);

export const Example = () => (
  <Box>
    <Box mb={3}>
      <Heading as="h3">Example</Heading>
    </Box>
    <Box pt={4} height="300px" bg="lightGray" px="2">
      <Navbar justifyContent="space-between">
        <Navbar.Logo src={logo} width={'100px'} />
        <Navbar.Menu>
          <Space sr={4}>
            <Button variant="primary" bySize="small">
              Register
            </Button>
            <Button variant="secondary" bySize="small">
              login
            </Button>
          </Space>
        </Navbar.Menu>
      </Navbar>
    </Box>
  </Box>
);
export const CustomNavbar = () => (
  <Box>
    <Box pt={4} height="300px" bg="lightGray" px="2">
      <Navbar justifyContent="space-between">
        <Text fontWeight="800">Logo</Text>
        <div>
          <Button variant="text">Home</Button>
          <Button variant="text">About</Button>
          <Button variant="text">Contact</Button>
          <Button variant="text">Register</Button>
        </div>
      </Navbar>
    </Box>
  </Box>
);
