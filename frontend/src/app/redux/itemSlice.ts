import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllItems_getAllItems } from "../graphql/item/__generated__/getAllItems";

interface FarmStore {
  FarmItems: getAllItems_getAllItems[];
}
const initialState: FarmStore = {
  FarmItems: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    storeItems: (state, action: PayloadAction<getAllItems_getAllItems[]>) => {
      const ids = state.FarmItems.map((element) => element._id);
      action.payload.forEach((item) => {
        if (!ids.includes(item._id)) {
          state.FarmItems.push(item);
        }
      });
    },
    resetItems: (state, action) => {
      state.FarmItems = [];
    },
  },
});
export const { storeItems, resetItems } = itemSlice.actions;
export default itemSlice.reducer;
