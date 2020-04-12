import { css } from 'styled-components';
import PropTypes from 'prop-types';
import { variant, compose } from 'styled-system';
import React from 'react';
// import { defaultTheme } from '../../utils';
import Box from '../box';

const headingTypes = variant({
  scale: 'headings',
  variants: {
    h1: {
      as: 'h1',
      fontSize: 'h1',
    },
    h2: {
      as: 'h2',
      fontSize: 'h2',
    },
    h3: {
      as: 'h3',
      fontSize: 'h3',
    },
  },
});

const styles = css`
  ${compose(headingTypes)}
`;

const Heading = React.forwardRef((props, ref) => <Box css={styles} ref={ref} {...props} />);

Heading.defaultProps = {
  as: 'h1',
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.displayName = 'Heading';

export default Heading;
