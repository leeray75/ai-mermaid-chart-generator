// src/redux/slices/mermaid-chart.slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the Mermaid Chart state
interface MermaidChartState {
  mermaidCode: string | null; // Mermaid code can be a string or null (when cleared)
}

// Initial state
const initialState: MermaidChartState = {
  mermaidCode: null,
};

// Create the slice
const mermaidChartSlice = createSlice({
  name: "mermaidChart", // Slice name
  initialState, // Initial state
  reducers: {
    // Action to set the Mermaid code
    setMermaidCode: (state, action: PayloadAction<string>) => {
      state.mermaidCode = action.payload;
    },
    // Action to clear the Mermaid code
    clearMermaidCode: (state) => {
      state.mermaidCode = null;
    },
  },
});

// Export the actions
export const { setMermaidCode, clearMermaidCode } = mermaidChartSlice.actions;

// Export the reducer
export default mermaidChartSlice.reducer;