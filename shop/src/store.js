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

// 리덕스 연습
let list = createSlice({
  name: "list",
  initialState: [
    { title: "홍길동", age: 100, price: 1000 },
    { title: "홍길순", age: 100, price: 1000 },
    { title: "홍길장", age: 100, price: 1000 },
  ],

  reducers: {
    listChange(state, action) {
      // for (let index = 0; index < state.length; index++) {
      //   if (state[index].title === action.payload) {
      //     state[index].age = state[index].age + 1;
      //   }
      // }

      console.log(state);
      console.log(action);
      let str = String(state[action.payload].age);
      console.log(str);
      console.log(Number(str[str.length - 1]));
      for (let index = 0; index < state.length; index++) {
        if (index === action.payload) {
          state[action.payload].age = Number(str[str.length - 1]) + 1;
        }
      }
    },
  },
});

export let { listChange } = list.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    box: box.reducer,
    cart: cart.reducer,
    리터럴변경: 리터럴변경.reducer,
    list: list.reducer,
  },
});
