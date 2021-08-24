import Modal from 'Component/Modal/Modal';
import React, { FC } from 'react';
import { TodoListEditModalWrapper } from './TodoListEditModalStyle';

interface Props {
  onCloseModal: () => void;
  openModal: boolean;
  index: { todoListId: number; toDoId: number } | null;
}

const TodoListEditModal: FC<Props> = ({ onCloseModal, openModal, index }) => {
  return (
    <Modal onCloseModal={onCloseModal} openModal={openModal}>
      <TodoListEditModalWrapper>
        <div>
          {index?.todoListId}
          {index?.toDoId}
        </div>
      </TodoListEditModalWrapper>
    </Modal>
  );
};

export default TodoListEditModal;
