import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography,
  flexbox,
  position,
  borderRadius,
  compose,
} from 'styled-system';
import PropTypes from 'prop-types';
import { Animations } from '../../utils';

const Box = styled.div`
  box-sizing: border-box;
  ${compose(space, layout, color, typography, flexbox, borderRadius, position)}
  ${({ animation }) => Animations[animation]}
`;

Box.propTypes = {
  animation: PropTypes.oneOf([
    'fadeIn',
    'fadeOut',
    'fadeInDown',
    'fadeOutDown',
    'fadeInLeft',
    'fadeInRight',
    'bounce',
  ]),
};

export default Box;
