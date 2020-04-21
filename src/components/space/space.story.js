import React from 'react';
import Card from '../card';
import Box from '../box';
import Heading from '../heading';
import Text from '../text';
import Button from '../button';
import Space from './index';

export default {
  title: 'Space',
  parameters: {
    componentSubtitle: 'Space is helping to set space to all child elements',
  },
  component: Space,
};
export const SpaceToCards = () => (
  <Box>
    <Heading as="h2">Example Usage</Heading>
    <Box bg="lightGray" display="flex" justifyContent="center" py={2} mt={2}>
      <Space sr={[0, 3]} sb={[3, 3, 0]}>
        <Card width="286px" position="relative">
          <Box borderRadius="default">
            <img
              width="100%"
              src="https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?cs=srgb&dl=group-of-people-raising-hands-silhouette-photography-952437.jpg&fm=jpg"
            />
          </Box>
          <Box p={3}>
            <Box>
              <Heading as="h3" color="darkerGray" mb={2}>
                Title
              </Heading>
            </Box>
            <Box>
              <Text>
                The simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s.
              </Text>
            </Box>
          </Box>
          <Box p={2}>
            <Button variant="secondary" width={1}>
              Learn more
            </Button>
          </Box>
        </Card>
        <Card width="286px" position="relative">
          <Box borderRadius="default">
            <img
              width="100%"
              src="https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?cs=srgb&dl=group-of-people-raising-hands-silhouette-photography-952437.jpg&fm=jpg"
            />
          </Box>
          <Box p={3}>
            <Box>
              <Heading as="h3" color="darkerGray" mb={2}>
                Title
              </Heading>
            </Box>
            <Box>
              <Text>
                The simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s.
              </Text>
            </Box>
          </Box>
          <Box p={2}>
            <Button variant="secondary" width={1}>
              Learn more
            </Button>
          </Box>
        </Card>
        <Card width="286px" position="relative">
          <Box borderRadius="default">
            <img
              width="100%"
              src="https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?cs=srgb&dl=group-of-people-raising-hands-silhouette-photography-952437.jpg&fm=jpg"
            />
          </Box>
          <Box p={3}>
            <Box>
              <Heading as="h3" color="darkerGray" mb={2}>
                Title
              </Heading>
            </Box>
            <Box>
              <Text>
                The simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s.
              </Text>
            </Box>
          </Box>
          <Box p={2}>
            <Button variant="secondary" width={1}>
              Learn more
            </Button>
          </Box>
        </Card>
      </Space>
    </Box>
  </Box>
);

export const SpaceToButtons = () => (
  <Box>
    <Box bg="lightGray" display="flex" flexWrap="wrap" justifyContent="center" py={2} mt={2}>
      <Space sr={3}>
        <Button variant="primary">Send</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="text">Read More</Button>
      </Space>
    </Box>
  </Box>
);
