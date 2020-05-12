import React, { useState } from 'react';
import { defaultTheme, themeVariants, get } from 'utils';
import Box from '../box';
import Heading from '../heading';
import Text from '../text';

import { IconArrow } from 'icons';

const { defaultPropTypes } = themeVariants;
const { colors } = defaultTheme;

const Accordion = ({ iconColor, title, description, isOpen, borderColor, ...props }) => {
  const [isShow, setIsShow] = useState(isOpen);
  return (
    <Box
      borderBottom="1px dashed"
      borderColor={get.color(borderColor) || 'gray'}
      pb="24px"
      css={`
        cursor: pointer;
      `}
      {...props}
      onClick={() => setIsShow(!isShow)}
    >
      <Box display="flex" justifyContent="space-between" pb="8px">
        {typeof title === 'string' ? (
          <Heading as="h3" fontSize="h3">
            {title}
          </Heading>
        ) : (
          title
        )}
        <IconArrow
          fill={iconColor || colors.primary}
          css={`
            transform: rotate(${isShow ? -90 : 90}deg);
            height: 24px;
            width: 24px;
          `}
        />
      </Box>
      <Box display={isShow ? 'block' : 'none'} animation={isShow ? 'fadeIn' : 'fadeOut'}>
        {typeof title === 'string' ? <Text>{description}</Text> : description}
      </Box>
    </Box>
  );
};

Accordion.displayName = 'Accordion';

Accordion.propTypes = {
  ...defaultPropTypes,
};

export default Accordion;
