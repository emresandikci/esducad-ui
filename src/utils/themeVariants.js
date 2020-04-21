import propTypes from '@styled-system/prop-types';
import animations from './animations';

const buttonTypes = {
  default: {
    bg: 'lightGray',
  },
  primary: {
    variant: 'buttons.default',
    color: 'white',
    bg: 'primary',
  },
  secondary: {
    variant: 'buttons.default',
    color: 'white',
    bg: 'secondary',
  },
  danger: {
    variant: 'buttons.default',
    bg: 'danger',
    color: 'white',
  },
  success: {
    variant: 'buttons.default',
    bg: 'success',
    color: 'white',
  },
  warning: {
    variant: 'buttons.default',
    bg: 'warning',
    color: 'white',
  },
  info: {
    variant: 'buttons.default',
    bg: 'info',
    color: 'white',
  },
  outline: {
    bg: 'white',
    boxShadow: 'inset 0 0 2px',
  },
  text: {
    padding: 0,
    bg: 'transparent',
  },
};

const buttonSizeTypes = {
  small: {
    py: 2,
    px: 3,
  },
  medium: {
    py: 3,
    px: 4,
  },
  large: {
    py: 4,
    px: 6,
  },
};

const textTypes = {
  p: {
    as: 'p',
  },
  label: {
    as: 'label',
  },
};

//animations
const { fadeIn, fadeOut, fadeInDown, fadeOutDown, bounce } = animations;

const animationVariants = {
  fadeIn: {
    css: `
      ${fadeIn}
    `,
  },
  fadeOut: {
    css: `
      ${fadeOut}
    `,
  },
  fadeInDown: {
    css: `
      ${fadeInDown}
    `,
  },
  fadeOutDown: {
    css: `
      ${fadeOutDown}
    `,
  },
  bounce: {
    css: `
      ${bounce}
    `,
  },
};

const defaultPropTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.flexbox,
};

export default { buttonTypes, buttonSizeTypes, textTypes, animationVariants, defaultPropTypes };
