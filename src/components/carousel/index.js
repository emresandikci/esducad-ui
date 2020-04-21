import React, { useState, useEffect } from 'react';
import Box from '../box';
import Space from '../space';
import PropTypes from 'prop-types';
import { IconArrow } from '../../icons';
import { hooks, get } from '../../utils';

const Item = props => <Box {...props} />;

const BaseComponent = React.forwardRef(
  (
    { children, onChange, delay, leftIcon, rightIcon, arrowColor, navigationColor, ...props },
    ref
  ) => {
    const [step, setStep] = useState(0);
    const [prevStep, setPrevStep] = useState(0);
    const { useInterval } = hooks;
    const createCarouselItems = () => {
      if (children.length === 0) {
        return null;
      }
      return React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          display: `${index === step ? 'block' : 'none'}`,
          animation: `${prevStep > step ? 'fadeInLeft' : 'fadeInRight'}`,
        })
      );
    };

    const createNavitationDots = () => {
      return (
        <Box display="flex" justifyContent="center">
          <Space sr={1}>
            {children.map((item, index) => (
              <Box
                key={index}
                width="10px"
                height="10px"
                borderRadius="full"
                bg={navigationColor}
                css={`
                  cursor: pointer;
                  opacity: ${step === index ? 0.8 : 0.4};
                  &:hover {
                    opacity: 0.9;
                  }
                  &:active {
                    opacity: 1;
                  }
                `}
                onClick={() => setStep(index)}
              />
            ))}
          </Space>
        </Box>
      );
    };
    const Next = () => {
      setPrevStep(step);
      if (step < children.length - 1) {
        setStep(step + 1);
      } else {
        setStep(0);
      }
    };

    const Prev = () => {
      setPrevStep(step);
      if (step > 0) {
        setStep(step - 1);
      } else {
        setStep(children.length - 1);
      }
    };

    useEffect(() => {
      if (onChange) {
        onChange(step);
      }
    }, [step]);

    useInterval(() => {
      if (delay && delay > 0) {
        Next();
      }
    }, delay * 1000);

    return (
      <Box
        display="display"
        flexDirection="column"
        justifyContent="space-between"
        ref={ref}
        {...props}
      >
        <Box display="flex" alignItems="center">
          <Box p={0} onClick={() => Prev()}>
            {leftIcon ? (
              leftIcon
            ) : (
              <IconArrow
                height={48}
                width={48}
                fill={get.color(arrowColor)}
                css={`
                  transform: rotate(-180deg);
                  cursor: pointer;
                `}
              />
            )}
          </Box>
          <Box width={1} display="flex" flexDirection="column" justifyContent="center" px={2}>
            {createCarouselItems()}
            {createNavitationDots()}
          </Box>
          <Box
            p={0}
            onClick={() => Next()}
            css={`
              cursor: pointer;
            `}
          >
            {rightIcon ? (
              rightIcon
            ) : (
              <IconArrow height={48} width={48} fill={get.color(arrowColor)} />
            )}
          </Box>
        </Box>
      </Box>
    );
  }
);

BaseComponent.displayName = 'Carousel';
Item.displayName = 'Carousel.Item';

BaseComponent.propTypes = {
  onStepChange: PropTypes.func,
  delay: PropTypes.number,
  arrowColor: PropTypes.string,
  navigationColor: PropTypes.string,
};
BaseComponent.defaultProps = {
  delay: 0,
  arrowColor: 'primary',
  navigationColor: 'primary',
};
const Carousel = {
  ...BaseComponent,
  Item: null,
};

Carousel.Item = Item;

export default Carousel;
