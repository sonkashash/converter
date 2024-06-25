import { createReducer } from '@reduxjs/toolkit';
import { setDollars, setEuros } from './action';

const initialState = {
  dollars: '',
  euros: ''
};

const exchangeRate = 1.07;

const converterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDollars, (state, action) => {
      const dollars = action.payload;
      const euros = (dollars / exchangeRate).toFixed(2);
      state.dollars = dollars;
      state.euros = euros;
    })
    .addCase(setEuros, (state, action) => {
      const eurosValue = action.payload;
      const dollarsValue = (eurosValue * exchangeRate).toFixed(2);
      state.dollars = dollarsValue;
      state.euros = eurosValue;
    });
});

export default converterReducer;

