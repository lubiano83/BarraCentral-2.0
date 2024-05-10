/* shopSlice */
import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        value: {
            categorySelected: "",
            itemIdSelected: "",
        },
    },
    reducers: {
        setCategorySelected: (state, {payload}) => {
            state.value.categorySelected = payload;
        },
        setIdselected: (state, {payload}) => {
            state.value.itemIdSelected = payload;
        },
    }
});

export const {setCategorySelected, setIdselected} = shopSlice.actions;
export default shopSlice.reducer;
