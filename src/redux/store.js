import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'redux/sliceContact';
import filterReducer from 'redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
