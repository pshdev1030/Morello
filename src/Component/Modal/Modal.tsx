import React, { FC } from 'react';
import { ModalBackground } from './ModalStyle';

interface Props {
  onCloseModal: () => void;
  openModal: boolean;
}

const Modal: FC<Props> = ({ onCloseModal, children, openModal }) => {
  return (
    <>
      {openModal && (
        <>
          <ModalBackground onClick={onCloseModal} />
          {children}
        </>
      )}
    </>
  );
};

export default Modal;
