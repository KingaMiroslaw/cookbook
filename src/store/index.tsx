import { configureStore } from "@reduxjs/toolkit";
import { mealsApi } from "../api/meals-api/meals-api";

export const store = configureStore({
  reducer: { [mealsApi.reducerPath]: mealsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
