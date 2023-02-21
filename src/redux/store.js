import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
     user: userSlice.reducer,
  },
  middleware: getDefaultMiddlevare => [...getDefaultMiddlevare(), logger],
});
