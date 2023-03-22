import { createSlice } from "@reduxjs/toolkit";

let 리터럴변경 = createSlice({
  name: "user",
  initialState: { name: "kim", age: 31 },

  reducers: {
    오브젝트변경(state) {
      state.name = "do";
    },
    오브젝트숫자증가(state, action) {
      state.age = state.age + action.payload;
    },
  },
});

export let { 오브젝트변경, 오브젝트숫자증가 } = 리터럴변경.actions;
export default 리터럴변경;
