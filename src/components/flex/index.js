import React from 'react';
import Box from '../box';

const Flex = ({ children, gutter, gutterX, gutterY, ...props }) => {
  const setGutter = () => {
    if (children && children.length === 0) {
      return null;
    }
    return React.Children.map(children, (child) => {
      const { width } = child.props;
      return (
        <Box width={width || '100%'} p={gutter || '.5em'} px={gutterX} py={gutterY}>
          {React.cloneElement(child, { m: '0 auto', width: '100%' })}
        </Box>
      );
    });
  };
  return (
    <Box display="flex" flexWrap="wrap" {...props}>
      {setGutter()}
    </Box>
  );
};

export default Flex;
