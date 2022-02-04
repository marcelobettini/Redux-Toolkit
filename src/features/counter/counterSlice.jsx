//ducks pattern (re dux joke). A slice is a piece of data and logic of my app
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //these are known as action creators
    //increment

    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    //ES6 object literal sintax, u can define functions w/out function or arrow keywords
    incremented(state) {
      state.value++; //immer lets me mutate state directly... it remains immutable under the hood
    },

    //otra forma de escribir un action creator
    incrementByStep: (state, action) => {
      state.value += action.payload;
    },

    //decrement
    decremented(state) {
      state.value--;
    },
    //reset
    reset(state) {
      state.value = 0;
    },
  },
});

export const { incremented, incrementByStep, decremented, reset } =
  counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (step) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByStep(step));
  }, 3000);
};

export default counterSlice.reducer;
