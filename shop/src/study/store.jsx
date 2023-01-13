import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice';

let cart = createSlice({
    name: 'stock',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers: {
        addCount(state, action){
            // state[action.payload].count++
            let idx = state.findIndex((index)=>{ return index.id === action.payload })
            state[idx].count = state[idx].count + 1
        },
        addItem(state, action) {
            state.push(action.payload);
        }
    }
})

export let { addCount, addItem } = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    }
})