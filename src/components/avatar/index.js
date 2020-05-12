import React from 'react';
import { themeVariants } from 'utils';
import Box from '../box';
import PropTypes from 'prop-types';

const { defaultPropTypes } = themeVariants;

const Avatar = (props) => (
  <Box
    css={`
      object-fit: cover;
    `}
    {...props}
  />
);

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  as: 'img',
  src: null,
  size: 50,
  borderRadius: '50%',
};

Avatar.propTypes = {
  as: PropTypes.string,
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.string,
  ...defaultPropTypes,
};
export default Avatar;
