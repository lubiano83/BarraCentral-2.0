/* configureStore */

import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";
import counterReducer from "../features/counterSlice";
import globalReducer from "../features/globalSlice";

export default configureStore({
    reducer: {
        shopReducer,
        counterReducer,
        globalReducer
    }
});