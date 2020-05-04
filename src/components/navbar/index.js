import React from 'react';
import { Box, Card } from '../../components';

const Logo = ({ src, alt, width, height, ...props }) => {
  return (
    <Box flex={1} {...props}>
      <img src={src} alt={alt || 'logo'} width={width || '50px'} height={height || '50px'} />
    </Box>
  );
};

const Menu = (props) => {
  return (
    <Box display="flex" justifyContent="flex-end" flex={1} {...props}>
      {props.children}
    </Box>
  );
};

const BaseComponent = React.forwardRef((props, ref) => (
  <Card boxShadow="nav" borderRadius="none" ref={ref} {...props} />
));

BaseComponent.displayName = 'Navbar';

const Navbar = {
  ...BaseComponent,
  Logo: null,
  Menu: null,
};

Navbar.Logo = Logo;
Navbar.Menu = Menu;

Navbar.Logo.displayName = 'Navbar.Logo';
Navbar.Menu.displayName = 'Navbar.Menu';

Navbar.defaultProps = {
  display: 'flex',
  alignItems: 'center',
  height: '72px',
  bg: 'white',
  px: '24px',
};

export default Navbar;
