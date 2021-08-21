import Modal from 'Component/Modal/Modal';
import React, { FC } from 'react';
import { MenuModalWrapper } from './MenuModalStyle';

interface Props {
  onCloseModal: () => void;
  openModal: boolean;
}

const MenuModal: FC<Props> = ({ onCloseModal, openModal }) => {
  return (
    <Modal onCloseModal={onCloseModal} openModal={openModal}>
      <MenuModalWrapper>
        <div>
          <span></span>
          <span>More from Atlassian</span> <span onClick={onCloseModal}>X</span>
        </div>
      </MenuModalWrapper>
    </Modal>
  );
};

export default MenuModal;
