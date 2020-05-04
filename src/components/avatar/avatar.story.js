import React from 'react';
import Box from '../box';
import Heading from '../heading';
import Avatar from '../avatar';
import { imgAvatar } from '../../static';
export default {
  title: 'Avatar',
  parameters: {
    componentSubtitle: 'Avatar is a photo view component',
  },
  component: Avatar,
};
const image = 'https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg';
export const DefaultAvatar = () => (
  <Box>
    <Heading as="h2">Example Usage</Heading>
    <Box display="flex" justifyContent="center" py={2} mt={2}>
      <Avatar src={image} />
      <Avatar src={image} size={100} />
      <Avatar src={image} size={150} />
    </Box>
  </Box>
);
