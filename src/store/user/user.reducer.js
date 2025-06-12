import { createSlice } from '@reduxjs/toolkit';
//import { setCurrentUser } from './user.action';
//import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  //name sets the action name so no need to set own action types
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      //uses a library in toolkit to write the same as:
      //return { ...state, currentUser: payload };
      state.currentUser = action.payload
    }
  }
})

//replaces the action
export const { setCurrentUser } = userSlice.actions;

//generates the reducer
export const userReducer = userSlice.reducer;


//old way with redux before toolkit
// export const userReducerOld = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };
