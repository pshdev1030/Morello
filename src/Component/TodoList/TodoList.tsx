import TodoListEditModal from 'Component/TodoListEditModal/TodoListModal';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducer';

const TodoList = () => {
  const List = useSelector((state: RootState) => state.board.toDoList);
  const [openTodoListEditModal, setOpenTodoListEditModal] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<{ todoListId: number; toDoId: number } | null>(null);

  const onCloseModal = useCallback(() => {
    setOpenTodoListEditModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setOpenTodoListEditModal(true);
  }, []);

  const onClickValue = useCallback((todoListId, toDoId) => {
    setCurrentTodo({ todoListId, toDoId });
    onOpenModal();
  }, []);

  console.log(List);
  return (
    <>
      <div>
        {List.map((todoListArray) => (
          <div key={todoListArray.id} onClick={onOpenModal} style={{ background: 'red', width: '400px' }}>
            <h2>{todoListArray.title}</h2>
            <ul>
              {todoListArray.todo.map((data) =>
                data.done ? (
                  <li
                    key={data.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickValue(todoListArray.id, data.id);
                    }}
                  >
                    <del>{data.value}</del>
                  </li>
                ) : (
                  <li
                    key={data.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickValue(todoListArray.id, data.id);
                    }}
                  >
                    {data.value}
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
      <TodoListEditModal
        onCloseModal={onCloseModal}
        openModal={openTodoListEditModal && currentTodo !== null}
        index={currentTodo}
      />
    </>
  );
};

export default TodoList;

// React.memo 적용할 수 있는지
// 함수 합칠 수 있는지
// 인덱스 받아와서 useSelector에서 검색
