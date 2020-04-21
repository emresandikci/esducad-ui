import React from 'react';
import Button from './index';
import Box from '../box';
import Heading from '../heading';
import Text from '../text';
import Space from '../space';
export default {
  title: 'Buttons',
  parameters: {
    componentSubtitle: 'Buttons allow users to take actions',
  },
  component: Button,
};
export const DefaultButton = () => (
  <Box>
    <Heading my={3} as="h2">
      Example Usage
    </Heading>
    <Text>
      To show send message,please click to default <b>send button</b>
    </Text>
    <Box pt={2}>
      <Button variant="default" onClick={() => alert('The message is sent!')}>
        send message
      </Button>
    </Box>
  </Box>
);
export const PrimaryButton = () => <Button variant="primary">primary</Button>;
export const SecondaryButton = () => <Button variant="secondary">secondary</Button>;
export const OutlineButton = () => (
  <Box display="flex" justifyContent="center">
    <Space sr={2}>
      <Button variant="outline">outline</Button>
      <Button variant="outline" color="primary">
        outline
      </Button>
      <Button variant="outline" color="secondary">
        outline
      </Button>
      <Button variant="outline" color="danger">
        outline
      </Button>
      <Button variant="outline" color="warning">
        outline
      </Button>
      <Button variant="outline" color="success">
        outline
      </Button>
      <Button variant="outline" color="info">
        outline
      </Button>
    </Space>
  </Box>
);
export const TextButton = () => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <Space sr={2}>
      <Button variant="text">text</Button>
      <Button variant="text" color="primary">
        text
      </Button>
      <Button variant="text" color="secondary">
        text
      </Button>
      <Button variant="text" color="success">
        text
      </Button>
      <Button variant="text" color="danger">
        text
      </Button>
      <Button variant="text" color="warning">
        text
      </Button>
      <Button variant="text" color="info">
        text
      </Button>
    </Space>
  </Box>
);

export const Variants = () => (
  <Box>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Heading my={3} as="h1">
        Button Variants
      </Heading>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Space sr={2}>
        <Button variant="default">default</Button>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="danger">danger</Button>
        <Button variant="warning">warning</Button>
        <Button variant="success">success</Button>
        <Button variant="info">info</Button>
        <Button variant="outline">outline</Button>
        <Button variant="text">text</Button>
      </Space>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Heading my={3} as="h1">
        Disabled Variants
      </Heading>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Space sr={2} alignItems="center">
        <Button disabled>default</Button>
        <Button variant="primary" disabled>
          primary
        </Button>
        <Button variant="secondary" disabled>
          secondary
        </Button>
        <Button variant="outline" disabled>
          outline
        </Button>
        <Button variant="text" disabled>
          text
        </Button>
      </Space>
    </Box>
  </Box>
);
export const Sizes = () => (
  <Box>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Heading my={3} as="h1">
        Button Sizes
      </Heading>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
      <Space sr={2}>
        <Button variant="primary" bySize="small">
          small
        </Button>
        <Button variant="primary" bySize="medium">
          medium
        </Button>
        <Button variant="primary" bySize="large">
          large
        </Button>
      </Space>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
      <Space sr={2}>
        <Button variant="outline" color="primary" bySize="small">
          small
        </Button>
        <Button variant="outline" color="secondary" bySize="medium">
          medium
        </Button>
        <Button variant="outline" color="danger" bySize="large">
          large
        </Button>
      </Space>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
      <Space sr={2}>
        <Button variant="text" color="primary">
          small
        </Button>
        <Button variant="text" color="secondary" fontSize={3}>
          medium
        </Button>
        <Button variant="text" color="#000" fontSize={4}>
          large
        </Button>
      </Space>
    </Box>
  </Box>
);
