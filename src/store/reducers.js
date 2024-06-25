import { createReducer } from "@reduxjs/toolkit";
import { setDollars, setEuros } from "./action";

const initialState = {
  dollars: "",
  euros: "",
  error: "",
};

const exchangeRate = 1.07;

const converterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDollars, (state, action) => {
      const dollars = action.payload;
      const regex = /^[0-9]*\.?[0-9]*$/; // Регулярное выражение для чисел с десятичной точкой
      if (regex.test(dollars)) {
        const euros = (dollars / exchangeRate).toFixed(2);
        state.dollars = dollars;
        state.euros = euros;
        state.error = "";
      } else {
        state.error = "Введите число";
      }
    })
    .addCase(setEuros, (state, action) => {
      const euros = action.payload;
      const regex = /^[0-9]*\.?[0-9]*$/;
      if (regex.test(euros)) {
        const dollars = (euros * exchangeRate).toFixed(2);
        state.dollars = dollars;
        state.euros = euros;
        state.error = "";
      } else {
        state.error = "Введите число";
      }
    });
});

export default converterReducer;
