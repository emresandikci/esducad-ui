import React from 'react';
import Box from '../box';
const Space = ({ sr, sl, st, sb, space, children }) => {
  const setSpace = () => {
    if (children && children.length === 0) {
      return null;
    }
    return React.Children.map(children, child => (
      <Box pr={sr} pl={sl} pt={st} pb={sb} p={space}>
        {React.cloneElement(child, {})}
      </Box>
    ));
  };

  return <React.Fragment>{setSpace()}</React.Fragment>;
};

export default Space;
