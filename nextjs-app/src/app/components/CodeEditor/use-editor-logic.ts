// src/app/components/CodeEditor/use-editor-logic.ts
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store"; // Correctly import RootState
import { setCode } from "@/app/redux/slices/code-editor.slice";

const useEditorLogic = () => {
  const dispatch = useDispatch();

  // Get the editor code from the codeEditor slice
  const editorCode = useSelector(
    (state: RootState) => state.codeEditor.code
  );

  // Dispatch action to update the editor code
  const setEditorCode = (newCode: string) => {
    dispatch(setCode(newCode)); // Dispatch action to set the code
  };

  useEffect(() => {
    // Ensure that if the editorCode is null, it's reset to an empty string
    if (editorCode === null) {
      dispatch(setCode("")); // Reset code if it's null
    }
  }, [editorCode, dispatch]);

  return { editorCode, setEditorCode };
};

export default useEditorLogic;
