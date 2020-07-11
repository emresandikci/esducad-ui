import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';

const Text = (props) => <Box {...props} />;

Text.displayName = 'Text';

Text.defaultProps = {
  as: 'p',
  fontSize: 'normal',
  fontWeight: 'normal',
  color: 'darkerGray',
};

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'label', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export default Text;
