"use client";
import React from "react";
import dynamic from "next/dynamic";
import styles from "./CodeEditor.module.scss";
import EditorContainer from "./EditorContainer";
import ActionsContainer from "./ActionsContainer";

// Dynamically import Material-UI components
const Card = dynamic(() => import("@mui/material/Card"));

const CodeEditor = () => {
  return (
    <Card className={styles.codeEditorContainer}>
      <h3>Code Editor</h3>
      <ActionsContainer />
      <EditorContainer />
      
    </Card>
  );
};

export default CodeEditor;
