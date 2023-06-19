import { configureStore } from '@reduxjs/toolkit';
import showData from '../features/showSlice';
import increment from '../features/showSlice';
export const store = configureStore({
  reducer: {
    show: showData,
    increment: increment,
  },
});
