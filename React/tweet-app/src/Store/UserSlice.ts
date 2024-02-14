import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../Interfaces/ViewFollowUser";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: false,
        userData: null as UserData | null,
        followingUsersData: [] as string[],
    },
    reducers:{
        login(state, action){
            state.loggedIn = true;
            state.userData = action.payload;
        },
        logout(state){
            state.loggedIn = false;
            state.userData = null;
        },
        setFollowers(state, action){
            const temp:UserData[]|[] = action.payload;
            state.followingUsersData=temp.map((val)=>val.id);
        },
        follow(state, action){
            state.followingUsersData.push(action.payload);
        },
        unfollow(state, action){
            state.followingUsersData.filter((id)=>{
                return id!==action.payload;
            });
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;