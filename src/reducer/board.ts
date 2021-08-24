import { toDoList, toDo } from 'Utils/types';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST' as const;
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS' as const;
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE' as const;

export const ADD_TODO_REQUEST_ACTION = () => ({ type: ADD_TODO_REQUEST });
export const ADD_TODO_FAILURE_ACTION = () => ({ type: ADD_TODO_FAILURE });
export const ADD_TODO_SUCCESS_ACTION = (data: toDo) => ({ type: ADD_TODO_SUCCESS, payload: data });

export const DONE_TODO_REQUEST = 'DONE_TODO_REQUEST' as const;

export const DONE_TODO_REQUEST_ACTION = (todoListId: number, toDoId: number) => ({
  type: DONE_TODO_REQUEST,
  payload: { todoListId, toDoId },
});

type userAction =
  | ReturnType<typeof ADD_TODO_REQUEST_ACTION>
  | ReturnType<typeof ADD_TODO_FAILURE_ACTION>
  | ReturnType<typeof ADD_TODO_SUCCESS_ACTION>
  | ReturnType<typeof DONE_TODO_REQUEST_ACTION>;
// | ReturnType<typeof LOGOUT_REQUEST_ACTION>
// | ReturnType<typeof LOGOUT_FAILURE_ACTION>
// | ReturnType<typeof LOGOUT_SUCCESS_ACTION>;

type boardState = {
  toDoList: toDoList[];
};

const initialState: boardState = {
  toDoList: [
    {
      title: 'hi',
      id: 1,
      todo: [
        { value: 'hi', done: true, id: 1 },
        { value: 'hi2', done: true, id: 2 },
        { value: 'hi3', done: false, id: 3 },
        { value: 'hi4', done: true, id: 4 },
        { value: 'hi5', done: false, id: 5 },
        { value: 'hi6', done: false, id: 6 },
      ],
    },
    // id 필요
    {
      title: 'hi2',
      id: 2,
      todo: [
        { value: 'hi', done: true, id: 1 },
        { value: 'hi2', done: true, id: 2 },
        { value: 'hi3', done: false, id: 3 },
        { value: 'hi4', done: true, id: 4 },
        { value: 'hi5', done: false, id: 5 },
        { value: 'hi6', done: false, id: 6 },
      ],
    },
  ],
};

const board = (state: boardState = initialState, action: userAction): boardState => {
  switch (action.type) {
    case DONE_TODO_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default board;
