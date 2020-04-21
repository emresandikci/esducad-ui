import React from 'react';
import Box from '../box';
import Carousel from './index';
import Heading from '../heading';
import Text from '../text';

export default {
  title: 'Carousel',
  parameters: {
    componentSubtitle:
      'When need a slide image,text or other stuff, Carousel will slide given items inside in it',
  },
  component: Carousel,
};
const images = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
  'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg',
  'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
];
export const Exampe = props => {
  const onStepChanged = step => step;
  const renderCarousel = () => (
    <Carousel width={[1]} onChange={onStepChanged} arrowColor="primary">
      <Carousel.Item>
        <img src={images[0]} width="100%" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={images[1]} width="100%" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={images[2]} width="100%" />
      </Carousel.Item>
    </Carousel>
  );
  return (
    <Box height="auto" bg="lightGray" py={6}>
      {renderCarousel()}
    </Box>
  );
};

export const WithDuration = () => {
  const onStepChanged = step => step;
  const renderCarousel = () => (
    <Carousel width={[1]} delay={3} onChange={onStepChanged}>
      <Carousel.Item>
        <img src={images[0]} width="100%" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={images[1]} width="100%" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={images[2]} width="100%" />
      </Carousel.Item>
    </Carousel>
  );
  return (
    <Box height="auto" bg="lightGray" py={6}>
      {renderCarousel()}
    </Box>
  );
};
export const CustomCarouselWithText = () => {
  const onStepChanged = step => step;
  const renderCarousel = () => (
    <Carousel width={[1]} delay={3} onChange={onStepChanged}>
      <Carousel.Item>
        <Box py={3} textAlign="center">
          <Text fontWeight="bolder">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
            print
          </Text>
        </Box>
      </Carousel.Item>
      <Carousel.Item>
        <Box py={3} textAlign="center">
          <Text fontWeight="bolder">
            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia,
          </Text>
        </Box>
      </Carousel.Item>
      <Carousel.Item>
        <Box py={3} textAlign="center">
          <Text fontWeight="bolder">or lipsum as it dummy text used in laying out print</Text>
        </Box>
      </Carousel.Item>
    </Carousel>
  );
  return (
    <Box height="auto" bg="lightGray" py={6}>
      {renderCarousel()}
    </Box>
  );
};

export const CustomCarousel = () => {
  const onStepChanged = step => step;
  const renderCarousel = () => (
    <Carousel width={[1]} onChange={onStepChanged}>
      <Carousel.Item position="relative">
        <img src={images[0]} width="100%" />
        <Box position="absolute" display="flex" justifyContent="center" top={50} width={1}>
          <Heading color="white">Title</Heading>
        </Box>
        <Box
          position="absolute"
          display="flex"
          justifyContent="center"
          textAlign="center"
          bottom={50}
          width={1}
        >
          <Text color="white" width={1 / 2}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
            print
          </Text>
        </Box>
      </Carousel.Item>
      <Carousel.Item position="relative">
        <img src={images[1]} width="100%" />
        <Box position="absolute" display="flex" justifyContent="center" top={50} width={1}>
          <Heading color="white">Title</Heading>
        </Box>
        <Box
          position="absolute"
          display="flex"
          justifyContent="center"
          textAlign="center"
          bottom={50}
          width={1}
        >
          <Text color="white" width={1 / 2}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
            print
          </Text>
        </Box>
      </Carousel.Item>
      <Carousel.Item position="relative">
        <img src={images[2]} width="100%" />
        <Box position="absolute" display="flex" justifyContent="center" top={50} width={1}>
          <Heading color="white">Title</Heading>
        </Box>
        <Box
          position="absolute"
          display="flex"
          justifyContent="center"
          textAlign="center"
          bottom={50}
          width={1}
        >
          <Text color="white" width={1 / 2}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
            print
          </Text>
        </Box>
      </Carousel.Item>
    </Carousel>
  );
  return (
    <Box height="auto" bg="lightGray" py={6}>
      {renderCarousel()}
    </Box>
  );
};
