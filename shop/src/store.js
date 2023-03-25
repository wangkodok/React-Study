import { configureStore, createSlice } from "@reduxjs/toolkit";
import 리터럴변경 from "./store/userSlice";

let user = createSlice({
  name: "user",
  initialState: "K",

  // 1. state 변경해주는 함수 만들기
  reducers: {
    변경(state) {
      return state + "D";
    },
    이름변경() {
      return "K";
    },
    숫자증가(state) {
      return 1 + state;
    },
  },
});

// 2. 변경해주는 함수 export 하기
export let { 변경, 이름변경, 숫자증가 } = user.actions;

let box = createSlice({
  name: "box",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  reducers: {
    countChange(state, action) {
      // state[action.payload].count = state[action.payload].count + 1;

      // state 값의 똑같은 찾을 찾아서 +1 증가시키기
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === i) {
          state[action.payload].count = state[action.payload].count + 1;
          // state[action.payload].count++;
        }
      }
    },
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export let { countChange, addItem, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    box: box.reducer,
    cart: cart.reducer,
    리터럴변경: 리터럴변경.reducer,
  },
});
