import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
}

const tempId = 3;

export const users = createSlice({
  name: 'users',
  initialState: [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ],
  reducers: {
    addUser(state, { payload }: PayloadAction<User>) {
      payload.id = tempId + 1;
      state.push(payload);
    },
  },
});

export const { addUser } = users.actions;
export default users.reducer;
