import React from 'react';
import { css } from 'styled-components';
import { compose, variant } from 'styled-system';
import PropTypes from 'prop-types';
import Box from '../box';
import { themeVariants, hexToRgba, rgbToHsl, get } from '../../utils';

const { buttonTypes, buttonSizeTypes } = themeVariants;

const buttons = variant({
  scale: 'buttons',
  variants: { ...buttonTypes },
});

const buttonSizes = variant({
  prop: 'bySize',
  scale: 'buttonSizes',
  variants: {
    ...buttonSizeTypes,
  },
});

const getRgba = (props, opacity) => {
  const { color } = props;
  if (color) {
    const currentColor = get.color(color);
    const converted = hexToRgba(`${currentColor}`, opacity).all;
    return converted;
  }
};
const getHsl = (props, lightness) => {
  const { color, bg, background, variant } = props;
  let converted;
  if (bg || background || variant || color) {
    let hex = bg || background;

    if (variant) {
      hex =
        variant === 'text' || variant === 'outline'
          ? color
          : get.currentTheme().buttons[variant].bg;
    }

    const currentColor = get.color(hex);

    if (currentColor !== undefined) {
      converted = rgbToHsl(`${currentColor}`, lightness).all;
    }
    return converted;
  }
  return null;
};

const styles = css`
  appearance: none;
  outline: none;
  border: none;
  user-select: none;
  text-transform: uppercase;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  cursor: pointer;

  &:hover:not([disabled]):not(:active) {
    ${props =>
      (props.variant === 'text' || props.variant === 'outline') &&
      css`
        background-color: ${getRgba(props, 0.1)};
      `}
    ${props =>
      props.variant !== 'text' &&
      props.variant !== 'outline' &&
      css`
        background-color: ${getHsl(props, -10)};
      `}
    @media (hover: none) {
      opacity: 1;
    }
  }
  &:active {
    ${props =>
      (props.variant === 'text' || props.variant === 'outline') &&
      css`
        background-color: ${getRgba(props, 0.2)};
      `}
    ${props =>
      props.variant !== 'text' &&
      props.variant !== 'outline' &&
      css`
        background-color: ${getHsl(props, -20)};
      `}
  }
  &:disabled {
    opacity: 0.1;
    cursor: not-allowed;
  }
  ${compose(buttonSizes, buttons)}
`;

const Button = React.forwardRef((props, ref) => (
  <Box color="black" bg="lightGray" css={styles} ref={ref} {...props} />
));

Button.displayName = 'Button';

Button.defaultProps = {
  as: 'button',
  display: 'inline-flex',
  borderRadius: 2,
  fontSize: 'normal',
  fontFamily: 'inherit',
  fontWeight: 'bolder',
  justifyContent: 'center',
  alignItems: 'center',
  bySize: 'medium',
  lineHeight: 'button',
};

Button.propTypes = {
  as: PropTypes.oneOf(['reactElement', 'button', 'a']),
  bySize: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'danger',
    'success',
    'warning',
    'info',
    'outline',
    'text',
  ]),
  ...Button.propTypes,
};

export default Button;
