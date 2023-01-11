import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'kim',

    // 리덕스에서 state 변경하는 방법
    reducers: {
        changeName(state) {
            console.log(state);
            return 'john';
        }
    }
})

export let { changeName } = user.actions;

let cart = createSlice({
    name: 'stock',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ]
})

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    }
})