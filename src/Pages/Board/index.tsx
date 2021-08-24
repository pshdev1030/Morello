import TodoList from 'Component/TodoList/TodoList';
import Menubar from 'Layout/Menubar/Menubar';
import React from 'react';
import { BoardWrapper } from './style';

const Board = () => {
  return (
    <>
      <Menubar />
      <BoardWrapper>
        <TodoList />
      </BoardWrapper>
    </>
  );
};

export default Board;
// 부모요소에서 이벤트 한 번에 처리하기 e객체로 받아서 +ul태그로
