import {createSlice} from "@reduxjs/toolkit";

export const userSlice= createSlice({
    name: 'user',
    initialState: {
        login: '',
        isLoggedIn: false
    },
    reducers:{
        LogIn(state, action){
            state.login=action.payload;
            state.isLoggedIn = true;
        },
        LogOut(state){
            state.login='';
            state.isLoggedIn = false;
        },
    },
});

export const {LogIn, LogOut} =userSlice.actions;