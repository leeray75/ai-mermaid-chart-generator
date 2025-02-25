// src/app/components/CodeEditor/ActionsContainer.tsx
import React from "react";
import { Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearCode } from "@/app/redux/slices/code-editor.slice"; // Import clearCode from code-editor.slice
import { setMermaidCode } from "@/app/redux/slices/mermaid-chart.slice";
import { RootState } from "@/app/redux/store"; // Import the RootState type

interface ActionsContainerProps {
  editorCode: string;
  setEditorCode: React.Dispatch<React.SetStateAction<string>>;
}

const ActionsContainer = () => {
  const dispatch = useDispatch();

  // Use RootState to type the state correctly
  const editorCode = useSelector((state: RootState) => state.codeEditor.code);

  // Function to clear the editor
  const handleClear = () => {
    dispatch(clearCode()); // Clear the code in Redux store
  };

  // Function to update the Redux state with the editor code
  const handleUpdate = () => {
    dispatch(setMermaidCode(editorCode ?? "")); // Dispatch setMermaidCode action to update the Redux store
  };

  return (
    <Box
      sx={{ display: "flex", gap: 2, justifyContent: "center", marginTop: 2 }}
    >
      <Button variant="outlined" color="secondary" onClick={handleClear}>
        Clear
      </Button>
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update
      </Button>
    </Box>
  );
};

export default ActionsContainer;
