import { configureStore, createSlice } from "@reduxjs/toolkit";

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

let 리터럴변경 = createSlice({
  name: "user",
  initialState: { name: "kim", age: 31 },

  reducers: {
    오브젝트변경(state) {
      state.name = "do";
    },
  },
});

export let { 오브젝트변경 } = 리터럴변경.actions;

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
});

export default configureStore({
  reducer: {
    user: user.reducer,
    box: box.reducer,
    cart: cart.reducer,
    리터럴변경: 리터럴변경.reducer,
  },
});
