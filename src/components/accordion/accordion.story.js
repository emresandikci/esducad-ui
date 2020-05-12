import React from 'react';
import { Accordion, Box, Text, Heading, Space } from 'components';

export default {
  title: 'Accordion',
  parameters: {
    componentSubtitle: 'Accordion',
  },
  component: Accordion,
};
export const General = () => (
  <Box>
    <Text>Accordion is helping to hide or show content.</Text>
    <Box pt={5}>
      <Heading as="h3">Example</Heading>
    </Box>
    <Box display="flex" flexDirection="column" alignItems="center" py="20px">
      <Space sy={'10px'}>
        <Accordion
          isOpen={true}
          width="600px"
          title="Lorem ipsum, or lipsum as"
          description=" Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
        />
        <Accordion
          width="600px"
          title="Lorem ipsum, or lipsum as"
          description=" Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
        />
        <Accordion
          width="600px"
          title="Lorem ipsum, or lipsum as"
          description=" Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
        />
      </Space>
    </Box>
  </Box>
);

export const CustomAccordion = () => (
  <Box display="flex" flexDirection="column" alignItems="center" py="20px">
    <Accordion
      width="600px"
      iconColor="secondary"
      borderColor="secondary"
      title={
        <Heading as="h3" color="secondary">
          Lorem ipsum, or lipsum as
        </Heading>
      }
      description={
        <Text color="primary">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
          graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
          century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
          for use in a type specimen book.
        </Text>
      }
    />
  </Box>
);
