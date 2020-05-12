import React from 'react';
import Box from '../box';
import PropTypes from 'prop-types';

const Space = ({ sr, sl, st, sb, sy, sx, space, children }) => {
  const setSpace = () => {
    if (children && children.length === 0) {
      return null;
    }
    return React.Children.map(children, (child) => (
      <Box pr={sr} pl={sl} pt={st} pb={sb} py={sy} px={sx} p={space}>
        {React.cloneElement(child, {})}
      </Box>
    ));
  };

  return <React.Fragment>{setSpace()}</React.Fragment>;
};

Space.defaultProps = {
  sr: 0,
  sl: 0,
  st: 0,
  sb: 0,
  sy: 0,
  sx: 0,
  spacing: null,
};
Space.prototype = {
  sr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  st: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Space;
