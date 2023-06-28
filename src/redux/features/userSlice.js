import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"user",
    initialState:{
        user:false
    },
    reducers:{
        getUser:(state,actions)=>{
            state.user=actions.payload
        }
    }
})

export const {getUser}=userSlice.actions;