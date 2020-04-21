import React from 'react';
import { css } from 'styled-components';
import PropTypes from 'prop-types';
import { variant, compose } from 'styled-system';
import Box from '../box';
import { themeVariants } from '../../utils';

const { textTypes } = themeVariants;
const textType = variant({
  scale: 'textTypes',
  variants: textTypes,
});

const styles = css`
  ${compose(textType)}
`;

const Text = React.forwardRef((props, ref) => (
  <Box m={0} p={0} css={styles} ref={ref} {...props} />
));

Text.defaultProps = {
  as: 'p',
  fontSize: 'normal',
  fontWeight: 'normal',
  color: 'darkerGray',
};

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'label', 'a']),
};

Text.displayName = 'Text';

export default Text;
