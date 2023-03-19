import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import SubscribeForm from "./SubscribeForm";

const SubscribeModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Newsletter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SubscribeForm />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubscribeModal;
