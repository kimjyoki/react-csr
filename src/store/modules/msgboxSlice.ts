import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MsgBoxState = {
  open: boolean;
  message: string;
};

const initialState: MsgBoxState = {
  open: false,
  message: '',
};

const msgboxSlice = createSlice({
  name: 'msgbox',
  initialState,
  reducers: {
    open(state, action: PayloadAction<string>) {
      state.open = true;
      state.message = action.payload;
    },
    close(state) {
      state.open = false;
    },
  },
});

export const { open, close } = msgboxSlice.actions;
export default msgboxSlice.reducer;
