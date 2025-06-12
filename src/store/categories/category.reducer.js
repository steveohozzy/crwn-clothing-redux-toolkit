import { createSlice } from "@reduxjs/toolkit";
//import { CATEGORIES_ACTION_TYPES } from './category.types';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesSlice = createSlice({
  //name sets the action name so no need to set own action types
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      //uses a library in toolkit to write the same as:
      //return { ...state, categories: payload };
      state.categories = action.payload
    }
  }
})

//replaces the action
export const { setCategories } = categoriesSlice.actions;

//generates the reducer
export const categoriesReducer = categoriesSlice.reducer;

// export const categoriesReducerOld = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return { ...state, categories: payload };
//     default:
//       return state;
//   }
// };
