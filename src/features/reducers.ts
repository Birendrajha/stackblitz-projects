import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  gender: '',
  password: '',
  mobile: '',
};

export const createSignupReducer = createSlice({
  name: 'signupData',
  initialState,
  reducers: {
    saveName: (state, action) => {
      state.name = action.payload;
    },
    saveEmail: (state, action) => {
      state.email = action.payload;
    },
    saveGender: (state, action) => {
      state.gender = action.payload;
    },
    savePassword: (state, action) => {
      state.password = action.payload;
    },
    saveMobile: (state, action) => {
      state.mobile = action.payload;
    },
    getData: (state, action) => {
      return state;
    },
  },
});

export const { saveName, saveEmail, saveGender, savePassword, saveMobile ,getData} =
  createSignupReducer.actions;
export default createSignupReducer.reducer;
