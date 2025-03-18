// src/app/components/CodeEditor/EditorContainer.tsx
import React from "react";
import Editor from "@monaco-editor/react";
import useEditorLogic from "./use-editor-logic";
import setupMermaid from "./mermaid-setup";
import styles from "./CodeEditor.module.scss";

const EditorContainer = () => {
  const { editorCode, setEditorCode } = useEditorLogic();

  return (
    <Editor
      className={styles.editor}
      defaultLanguage="mermaid"
      value={editorCode ?? ""} // Now it comes from Redux state
      onChange={(value) => setEditorCode(value ?? "")} // Update Redux state when the editor content changes
      beforeMount={setupMermaid}
      theme="mermaid-theme"
      options={{
        minimap: { enabled: false },
        lineNumbersMinChars: 3,
        glyphMargin: false,
        folding: false,
        suggestOnTriggerCharacters: false,
        quickSuggestions: false,
      }}
    />
  );
};

export default EditorContainer;
