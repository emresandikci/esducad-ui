import React from 'react';
import Box from '../box';
const Space = props => {
  const { sr, sl, st, sb, children } = props;

  const setSpace = () => {
    if (children && children.length === 0) {
      return null;
    }
    return React.Children.map(children, (child, index) => (
      <Box
        mr={index === children.length - 1 ? 0 : sr}
        ml={index === children.length - 1 ? 0 : sl}
        mt={index === children.length - 1 ? 0 : st}
        mb={index === children.length - 1 ? 0 : sb}
      >
        {React.cloneElement(child, {})}
      </Box>
    ));
  };

  return <React.Fragment>{setSpace()}</React.Fragment>;
};

export default Space;
