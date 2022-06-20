import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../logika/uiSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})
export default store