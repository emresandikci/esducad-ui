import React from 'react';
import { css } from 'styled-components';
import { compose, variant, border } from 'styled-system';
import PropTypes from 'prop-types';
import Box from '../box';
import { themeVariants, hexToRgba } from '../../utils';

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

const getColor = (props, opacity) => {
  const { color, theme } = props;
  if (color) {
    const currentColor = theme.colors[color] !== undefined ? theme.colors[color] : color;
    return hexToRgba(`${currentColor}`, opacity);
  }
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
    opacity: 0.8;
    ${props =>
      (props.variant === 'text' || props.variant === 'outline') &&
      css`
        background-color: ${getColor(props, 0.1)};
      `}
    @media (hover: none) {
      opacity: 1;
    }
  }
  &:active {
    ${props =>
      (props.variant === 'text' || props.variant === 'outline') &&
      css`
        background-color: ${getColor(props, 0.2)};
      `}
  }
  &:disabled {
    opacity: 0.1;
    cursor: not-allowed;
    ${props =>
      props.variant !== 'text' &&
      props.variant !== 'outline' &&
      css`
        background-color: ${props.theme.colors['black']};
        color: ${props.theme.colors['white']};
      `}
  }
  ${compose(buttonSizes, buttons, border)}
`;

const Button = React.forwardRef((props, ref) => (
  <Box color="black" css={styles} ref={ref} {...props} />
));

Button.displayName = 'Button';

Button.defaultProps = {
  as: 'button',
  variant: 'default',
  display: 'inline-flex',
  borderRadius: 2,
  fontSize: 'normal',
  fontFamily: 'inherit',
  fontWeight: 'bolder',
  justifyContent: 'center',
  alignItems: 'center',
  // py: 3,
  // px: 4,
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
    'info',
    'success',
    'outline',
    'text',
  ]),
  ...Button.propTypes,
};

export default Button;
