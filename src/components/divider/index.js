import React from 'react';
import { themeVariants } from 'utils';
import Box from '../box';
import PropTypes from 'prop-types';
import { variant } from 'styled-system';
import { css } from 'styled-components';

const dividers = variant({
  scale: 'dividers',
  variants: {
    dashed: {
      borderStyle: `dashed`,
    },
    dotted: {
      borderStyle: `dotted`,
    },
    solid: {
      borderStyle: `solid`,
    },
    ridge: {
      borderStyle: `ridge`,
    },
  },
});

const styles = css`
  ${dividers}
`;
const { defaultPropTypes } = themeVariants;

const Divider = (props) => <Box css={styles} color="" {...props} />;

Divider.displayName = 'Divider';

Divider.defaultProps = {
  as: 'hr',
  borderTop: `1px`,
  borderColor: 'black',
  variant: 'solid',
};

Divider.propTypes = {
  variant: PropTypes.oneOf(['solid', 'dashed', 'dotted', 'groove']),
  ...defaultPropTypes,
};
export default Divider;
