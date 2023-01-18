import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import { Beer } from "../types";

// Define a type for the slice state
interface BeersState {
  beers: Beer[];
}

// Define the initial state using that type
const initialState: BeersState = {
  beers: [],
};

export const beersSlice = createSlice({
  name: "beers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setBeers(state, action: PayloadAction<Beer[]>) {
      state.beers = action.payload;
    },
  },
});

export const { setBeers } = beersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBeers = (state: RootState) => state.beers.beers;
export default beersSlice.reducer;
