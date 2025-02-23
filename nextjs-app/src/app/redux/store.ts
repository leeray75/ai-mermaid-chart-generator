// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../lib/api.slice';
import mermaidChartReducer from "./slices/mermaid-chart.slice"; // Import the slice

// Create the Redux store
export const store = configureStore({
  reducer: {
    mermaidChart: mermaidChartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
window.store = store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;