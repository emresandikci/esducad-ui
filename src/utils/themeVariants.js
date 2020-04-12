import propTypes from '@styled-system/prop-types';
import animations from './animations';

const buttonTypes = {
  default: {
    bg: 'lightGray',
    '&:active': {
      bg: 'gray',
      opacity: 1,
    },
  },
  primary: {
    variant: 'buttons.default',
    color: 'white',
    bg: 'primary',
    '&:active': {
      bg: 'darkPink',
      opacity: 1,
    },
  },
  secondary: {
    variant: 'buttons.default',
    color: 'white',
    bg: 'secondary',
    '&:active': {
      bg: 'darkBlue',
      opacity: 1,
    },
  },
  danger: {
    variant: 'buttons.default',
    bg: 'danger',
    color: 'white',
    '&:active': {
      bg: 'dangerDark',
      opacity: 1,
    },
  },
  success: {
    variant: 'buttons.default',
    bg: 'success',
    color: 'white',
    '&:active': {
      bg: 'successDark',
      opacity: 1,
    },
  },
  info: {
    variant: 'buttons.default',
    bg: 'info',
    color: 'white',
    '&:active': {
      bg: 'infoDark',
      opacity: 1,
    },
  },
  outline: {
    // variant: 'buttons.default',
    bg: 'white',
    boxShadow: 'inset 0 0 2px',
    // '&:active': {
    //   color: 'darkGray',
    //   opacity: 1,
    //   borderColor: 'darkGray',
    // },
  },
  text: {
    padding: 0,
    bg: 'transparent',
    // '&:active': {
    //   color: 'darkGray',
    //   opacity: 1,
    // },
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
