import React, { useState } from 'react';
import Modal from './index';
import Box from '../box';
import Heading from '../heading';
import Text from '../text';
import Button from '../button';

export default {
  title: 'Modal',
  parameters: {
    componentSubtitle:
      "When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal",
  },
  component: Modal,
};

export const Exampe = () => {
  const [isActive, setActive] = useState(false);

  const renderModal = () => (
    <Modal isActive={isActive} animation="fadeInDown">
      <Modal.Content onClose={() => setActive(false)}>
        <Modal.Header>
          <Heading as="h3">Title</Heading>
        </Modal.Header>
        <Modal.Body>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia
          </Text>
        </Modal.Body>
        <Modal.Footer display="flex" justifyContent="space-between">
          <Button variant="success" width={1} mr={1}>
            Save
          </Button>
          <Button variant="danger" width={1} onClick={() => setActive(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
  return (
    <Box height="600px">
      <Box display="flex" justifyContent="center" py={2} mt={2}>
        <Button variant="default" onClick={() => setActive(!isActive)}>
          Open Modal
        </Button>
      </Box>
      {renderModal()}
    </Box>
  );
};
