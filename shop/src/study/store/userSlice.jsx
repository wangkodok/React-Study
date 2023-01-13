import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: 'user',
    initialState: {
        name: 'kim',
        age: 20,
    },

    // 리덕스에서 state 변경하는 방법
    reducers: {
        changeName(state) {
            console.log(state);
            state.name = 'park'

            // return {
            //     name: 'park'
            // }
        },
        increase(state, action) {
            state.age = state.age + action.payload;
            
            // return {
            //     name: 'park'
            // }
        }
    }
})

export let { changeName, increase } = user.actions;

export default user;