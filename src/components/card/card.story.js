import React from 'react';
import Card from './index';
import Box from '../box';
import Heading from '../heading';
import Text from '../text';
import Button from '../button';

export default {
  title: 'Cards',
  parameters: {
    componentSubtitle: 'Card is covering any contents with div',
  },
  component: Card,
};
export const DefaultCard = () => (
  <Box>
    <Heading as="h2">Example Usage</Heading>
    <Text>Cards contain content and actions about a single subject</Text>
    <Box bg="lightGray" display="flex" justifyContent="center" py={2} mt={2}>
      <Card width="286px" height="200px"></Card>
    </Box>
  </Box>
);

export const SimpleCard = () => (
  <Box>
    <Box bg="lightGray" display="flex" justifyContent="center" py={2} mt={2}>
      <Card width="286px" position="relative">
        <Box p={3}>
          <Box>
            <Heading as="h3" color="darkerGray" mb={2}>
              Title
            </Heading>
          </Box>
          <Box>
            <Text>
              The simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s.
            </Text>
          </Box>
        </Box>
        <Box p={2}>
          <Button>Learn more</Button>
        </Box>
      </Card>
    </Box>
  </Box>
);

export const ShadowCard = () => (
  <Box>
    <Box bg="lightGray" display="flex" justifyContent="center" py={2} mt={2}>
      <Card width="286px" position="relative" boxShadow="card">
        <Box p={3}>
          <Box>
            <Heading as="h3" color="darkerGray" mb={2}>
              Title
            </Heading>
          </Box>
          <Box>
            <Text>
              The simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s.
            </Text>
          </Box>
        </Box>
        <Box p={2}>
          <Button>Learn more</Button>
        </Box>
      </Card>
    </Box>
  </Box>
);

export const MediaCard = () => (
  <Box>
    <Box bg="lightGray" display="flex" justifyContent="center" py={2} mt={2}>
      <Card width="286px" position="relative">
        <Box p={3}>
          <Box>
            <Heading as="h3" color="darkerGray" mb={2}>
              Title
            </Heading>
          </Box>
          <Box>
            <img
              width="100%"
              src="https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?cs=srgb&dl=group-of-people-raising-hands-silhouette-photography-952437.jpg&fm=jpg"
            />
          </Box>
          <Box>
            <Text>
              The simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s.
            </Text>
          </Box>
        </Box>
        <Box p={2} display="flex" justifyContent="center">
          <Button variant="primary" width={1 / 2}>
            Learn more
          </Button>
        </Box>
      </Card>
    </Box>
  </Box>
);

export const FullWidthMediaCard = () => (
  <Box>
    <Box bg="lightGray" display="flex" justifyContent="center" py={2} mt={2}>
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
              The simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s.
            </Text>
          </Box>
        </Box>
        <Box p={2}>
          <Button variant="secondary" width={1}>
            Learn more
          </Button>
        </Box>
      </Card>
    </Box>
  </Box>
);

export const RichCard = () => (
  <Box>
    <Box bg="lightGray" display="flex" justifyContent="center" py={2} mt={2}>
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
              The simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s.
            </Text>
          </Box>
        </Box>
        <Box p={2} display="flex" justifyContent="space-around">
          <Button variant="text">Learn more</Button>
          <Button variant="outline" color="danger">
            Save it later
          </Button>
        </Box>
      </Card>
    </Box>
  </Box>
);
