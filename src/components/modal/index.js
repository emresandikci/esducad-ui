import React from 'react';
import Box from '../box';
import Card from '../card';
import Overlay from '../overlay';
import { get } from '../../utils';
import { IconClose } from '../../icons';

const Content = ({ width, onClose, exitIconColor, exitIconTop, exitIconRight, ...props }) => {
  const iconColor = exitIconColor ? get.color(exitIconColor) : get.color('danger');
  const handleOnClose = () => onClose(false);
  return (
    <Card
      position="relative"
      width={width || ['300px', 1 / 2]}
      m="auto"
      boxShadow="card"
      {...props}
    >
      <Box
        position="absolute"
        top={exitIconTop || '1rem'}
        right={exitIconRight || '1rem'}
        css={`
          cursor: pointer;
        `}
        color={iconColor}
        onClick={handleOnClose}
      >
        <IconClose fill={iconColor} />
      </Box>
      {props.children}
    </Card>
  );
};

const Header = (props) => <Box padding={3} {...props} />;

const Body = (props) => <Box padding={3} {...props} />;

const Footer = (props) => <Box padding={3} {...props} />;

const BaseComponent = React.forwardRef((props, ref) => {
  const defaultPaddingTop = 7;
  const { pt, isActive } = props;
  if (window) {
    document.body.style.overflow = isActive ? 'hidden' : null;
  }
  return (
    <Overlay
      ref={ref}
      pt={pt || defaultPaddingTop}
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
