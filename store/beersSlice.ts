import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import { Beer } from "../types";

// Define a type for the slice state
interface BeersState {
  beers: Beer[];
  pageIndex: number;
}

// Define the initial state using that type
const initialState: BeersState = {
  beers: [],
  pageIndex: 1,
};

export const beersSlice = createSlice({
  name: "beers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setBeers(state, action: PayloadAction<Beer[]>) {
      state.beers = action.payload;
    },
    setPageIndex(state, action: PayloadAction<number>) {
      state.pageIndex = action.payload;
    }
  },
});

export const { setBeers, setPageIndex } = beersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBeers = (state: RootState) => state.beers.beers;
export const selectPageIndex = (state: RootState) => state.beers.pageIndex;
export default beersSlice.reducer;
