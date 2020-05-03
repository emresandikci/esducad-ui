import React from 'react';
import { themeVariants } from '../../utils';
import Box from '../box';

const { defaultPropTypes } = themeVariants;

const Avatar = ({ src, size, animation, ...props }) => (
  <Box
    as="img"
    src={src}
    borderRadius="50%"
    size={size ? size : 50}
    animation={animation}
    {...props}
  />
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  ...defaultPropTypes,
};

export default Avatar;
