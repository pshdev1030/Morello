import Modal from 'Component/Modal/Modal';
import React, { FC } from 'react';
import { MyPageModalWrapper } from './MyPageModalStyle';

interface Props {
  onCloseModal: () => void;
  openModal: boolean;
}

const MyPageModal: FC<Props> = ({ onCloseModal, openModal }) => {
  return (
    <Modal onCloseModal={onCloseModal} openModal={openModal}>
      <MyPageModalWrapper>
        <div>
          <span></span>
          <span>Account</span> <span onClick={onCloseModal}>X</span>
        </div>
      </MyPageModalWrapper>
    </Modal>
  );
};

export default MyPageModal;
