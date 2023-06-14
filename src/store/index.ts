import { configureStore } from "@reduxjs/toolkit";
import { phoneNumberReducer } from "./reducers/phoneNumber";

export const store = configureStore({
    reducer: {
        phoneNumberReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch