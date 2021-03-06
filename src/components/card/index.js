import React from 'react';
import { shadow } from 'styled-system';
import { css } from 'styled-components';
import { themeVariants } from '../../utils';
import Box from '../box';

const { defaultPropTypes } = themeVariants;

const styles = css`
  ${shadow}
`;

const Card = React.forwardRef((props, ref) => (
  <Box css={styles} bg="white" borderRadius="default" ref={ref} {...props} />
));

Card.displayName = 'Card';

Card.propTypes = {
  ...defaultPropTypes,
};

export default Card;
