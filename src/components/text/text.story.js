import React from 'react';
import Box from '../box';
import Heading from '../heading';
import Text from '../text';

export default {
  title: 'Text',
  parameters: {
    componentSubtitle: 'Text allow users to write description text',
  },
  component: Text,
};

export const General = () => (
  <Box>
    <Heading as="h2">Example Usage</Heading>
  </Box>
);

export const SmallText = () => (
  <Text fontSize="small">
    Small Text as P tag - Contrary to popular belief, Lorem Ipsum is not simply random text.
  </Text>
);
export const NormalText = () => (
  <Text>Text as P tag - Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
);
export const MediumText = () => (
  <Text fontSize="medium">
    Medium - Contrary to popular belief, Lorem Ipsum is not simply random text.
  </Text>
);
export const LargeText = () => (
  <Text fontSize="h3">
    Large as P tag- Contrary to popular belief, Lorem Ipsum is not simply random text.
  </Text>
);
export const XLargeText = () => (
  <Text fontSize="h2">
    XLarge Text as P tag- Contrary to popular belief, Lorem Ipsum is not simply random text.
  </Text>
);
export const DefaultText = () => (
  <Text>Bold - Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
);
export const BoldText = () => (
  <Text fontWeight="bold">
    Bold - Contrary to popular belief, Lorem Ipsum is not simply random text.
  </Text>
);
export const BolderText = () => (
  <Text fontWeight="bolder">
    Bolder - Contrary to popular belief, Lorem Ipsum is not simply random text.
  </Text>
);
export const TextWithColor = () => (
  <Box>
    <Text color="primary" fontWeight="bold">
      Primary - Contrary to popular belief, Lorem Ipsum is not simply random text.
    </Text>
    <Text color="secondary" fontWeight="bold">
      Secondary - Contrary to popular belief, Lorem Ipsum is not simply random text.
    </Text>
    <Text color="gold" fontWeight="bold">
      Gol - Contrary to popular belief, Lorem Ipsum is not simply random text.
    </Text>
  </Box>
);
