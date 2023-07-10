import { createSlice } from '@reduxjs/toolkit'

export const list = createSlice({
    name:'list',
    initialState:{
        users:[]
    },
    reducers:{
        addUser:(state, action) => {
            state.users.push(action.payload) 
        },
        deleteUser: (state, action) => {
            state.users.splice(action.payload, 1)
        }
    }
})

export const { addUser, deleteUser } = list.actions
export default list.reducer