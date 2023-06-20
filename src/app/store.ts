import { configureStore } from '@reduxjs/toolkit';
import signupData from '../features/reducers';
export const store = configureStore({
  reducer: {
    show: signupData,
  },
});
