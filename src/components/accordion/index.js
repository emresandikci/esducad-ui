import React, { useState } from 'react';
import { themeVariants, get } from 'utils';
import Box from '../box';
import Heading from '../heading';
import Text from '../text';
import { IconArrow } from 'icons';
import PropTypes from 'prop-types';

const { defaultPropTypes } = themeVariants;

const Accordion = ({
  iconColor,
  title,
  description,
  isOpen,
  borderColor,
  iconSize,
  ...props
}) => {
  const [isShow, setIsShow] = useState(isOpen);
  return (
    <Box
      borderBottom="1px dashed"
      borderColor={get.color(borderColor) || 'gray'}
      pb="24px"
      css={`
        cursor: pointer;
      `}
      onClick={() => setIsShow(!isShow)}
      {...props}
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
          fill={get.color(iconColor)}
          css={`
            transform: rotate(${isShow ? -90 : 90}deg);
            height: ${iconSize};
            width: ${iconSize};
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

Accordion.defaultProps = {
  iconColor: 'primary',
  title: null,
  description: null,
  isOpen: false,
  borderColor: 'gray',
  iconSize: '34px',
};

Accordion.propTypes = {
  iconColor: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isOpen: PropTypes.bool,
  borderColor: PropTypes.string,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ...defaultPropTypes,
};

export default Accordion;
