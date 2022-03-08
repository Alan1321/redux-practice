import { createStore } from "redux";
import {
  createContextSlice,
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";

const initialState = { counter: 0, showcounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter -= 1;
    },
  },
});

const authState = { isloggedin: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: authState,
  reducers: {
    login(state, action) {
      state.isloggedin = true;
    },
    logout(state, action) {
      state.isloggedin = false;
    },
  },
});
// const counterReducer = (state = initialState, action) => {
//   const alldata = {
//     counter: state.counter,
//     showcounter: state.showcounter,
//   };

//   if (action.type === "increment") {
//     alldata.counter += action.paylod;
//     return alldata;
//   } else if (action.type === "decrement") {
//     alldata.counter -= 1;
//     return alldata;
//   }

//   return state;
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
