import React from 'react';
import Box from '../box';
import Card from '../card';
import Button from '../button';
import Overlay from '../overlay';
import PropTypes from 'prop-types';
import { defaultTheme, get } from '../../utils';
import { IconClose } from '../../icons';

const Content = ({ width, onClose, exitIconColor, ...props }) => {
  const { colors } = defaultTheme;
  const iconColor = exitIconColor ? get.color(exitIconColor) : colors.danger;
  const handleOnClose = () => onClose(false);
  return (
    <Card width={width ? width : ['300px', 1 / 2]} m="auto" boxShadow="card" {...props}>
      <Box display="flex" justifyContent="flex-end" pr={3} pt={2}>
        <Button variant="text" alignSelf="right" color={iconColor} onClick={handleOnClose}>
          <IconClose fill={iconColor} />
        </Button>
      </Box>
      {props.children}
    </Card>
  );
};

const Header = props => <Box padding={3} pt={0} {...props} />;

const Body = props => <Box padding={3} {...props} />;

const Footer = props => <Box padding={3} {...props} />;

const BaseComponent = React.forwardRef((props, ref) => {
  const defaultPaddingTop = 7;
  const { pt, isActive } = props;
  return (
    <Overlay
      ref={ref}
      pt={pt ? pt : defaultPaddingTop}
      display={isActive ? 'block' : 'none'}
      {...props}
    />
  );
});

BaseComponent.displayName = 'Modal';

const Modal = {
  ...BaseComponent,
  Content: null,
  Header: null,
  Body: null,
  Footer: null,
};

Modal.Content = Content;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

Modal.Content.displayName = 'Modal.Content';
Modal.Header.displayName = 'Modal.Header';
Modal.Body.displayName = 'Modal.Body';
Modal.Footer.displayName = 'Modal.Footer';

Modal.propTypes = {
  ...Modal.propTypes,
};

export default Modal;
