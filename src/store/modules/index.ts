import { combineReducers } from '@reduxjs/toolkit';
import users from './users';
import msgbox from './msgboxSlice';

const rootReducer = combineReducers({
  users,
  msgbox,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
