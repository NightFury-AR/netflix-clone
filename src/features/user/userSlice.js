import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'user',
    initialState: {
        user:null,
    },
    reducers:{
        login: (state,action) => {
            state.user=action.payload;
        },
        logout : (state) => {
            state.user=null;
        }
    },
});

//redux - actions 
export const {login,logout} = userSlice.actions;
//redux-selectors 
export const selectUser = state => state.user.user;

export default userSlice.reducer;

