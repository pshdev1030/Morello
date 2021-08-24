import { combineReducers } from 'redux';
import board from './board';
import user from './user';

const rootReducer = combineReducers({
  user,
  board,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
