import React from 'react';
import { css } from 'styled-components';
import Box from '../box';

const styles = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Overlay = React.forwardRef((props, ref) => {
  return <Box css={styles} ref={ref} display="block" zIndex="modal" {...props} />;
});

Overlay.displayName = 'Overlay';

export default Overlay;
