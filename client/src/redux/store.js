import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import { loadState, saveState } from '../components/localStorage';

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  preloadedState,
});


store.subscribe(() => {
  saveState(store.getState());
});