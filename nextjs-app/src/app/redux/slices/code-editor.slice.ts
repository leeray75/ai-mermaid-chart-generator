// src/redux/slices/code-editor.slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setMermaidCode } from "./mermaid-chart.slice"; // Importing setMermaidCode from the mermaidChart slice

interface CodeEditorState {
  code: string | null; // Code for the editor can be a string or null (when cleared)
}

// Initial state
const initialState: CodeEditorState = {
  code: null,
};

// Create the slice
const codeEditorSlice = createSlice({
  name: "codeEditor", // Slice name
  initialState, // Initial state
  reducers: {
    // Action to set the editor code directly (local state within the code editor)
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    // Action to clear the editor code
    clearCode: (state) => {
      state.code = null;
    },
  },
  extraReducers: (builder) => {
    // Listen for the setMermaidCode action from mermaidChartSlice
    builder.addCase(setMermaidCode, (state, action: PayloadAction<string>) => {
      state.code = action.payload; // When setMermaidCode is dispatched, update the code in the codeEditor slice
    });
  },
});

// Export the actions
export const { setCode, clearCode } = codeEditorSlice.actions;

// Export the reducer
export default codeEditorSlice.reducer;
