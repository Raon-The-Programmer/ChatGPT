import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    isLoggedIn:false
}

const authSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            state.user=action.payload,
            state.isLoggedIn=true
        },
        logoutuser:(state)=>{
            state.user=null,
            state.isLoggedIn=false
        },
        signupUser:(state,action)=>{
            state.user=action.payload,
            state.isLoggedIn=false
        }
    }
})

export default authSlice.reducer
export const {loginUser,signupUser,logoutuser} =authSlice.actions