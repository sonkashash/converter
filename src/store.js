import { configureStore } from '@reduxjs/toolkit';
import converterReducer from './store/reducers.js';

const store = configureStore({
  reducer: {
    converter: converterReducer
  }
});

export default store;
