import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: false,
        userData: null,
    },
    reducers:{
        login(state, action){
            state.loggedIn = true;
            state.userData = action.payload;
        },
        logout(state){
            state.loggedIn = false;
            state.userData = null;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;