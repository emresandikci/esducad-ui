import React from 'react';
import Box from '../box';
import Heading from '../heading';
import Text from '../text';
import Avatar from '../avatar';
export default {
  title: 'Avatar',
  parameters: {
    componentSubtitle: 'Avatar is a photo view component',
  },
  component: Avatar,
};
export const DefaultAvatar = () => (
  <Box>
    <Heading as="h2">Example Usage</Heading>
    <Box display="flex" justifyContent="center" py={2} mt={2}>
      <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
      <Avatar src="https://www.w3schools.com/howto/img_avatar.png" size={100} />
      <Avatar src="https://www.w3schools.com/howto/img_avatar.png" size={150} />
    </Box>
  </Box>
);
