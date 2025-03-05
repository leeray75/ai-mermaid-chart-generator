"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./ChatModule.module.scss";
import { useGenerateMermaidMutation } from "@/app/lib/api.slice";

// Dynamically import Material-UI components
const TextField = dynamic(() => import("@mui/material/TextField"));
const Button = dynamic(() => import("@mui/material/Button"));

export interface InputAreaProps {
  isOpen: boolean; // Updated from Boolean to boolean (primitive type)
  onFocus: () => void; // Explicitly typed the onFocus function
}

const InputArea = ({ isOpen, onFocus }: InputAreaProps) => {
  // Added type for props
  const [inputValue, setInputValue] = useState<string>("");
  const [generateMermaid, { isLoading }] = useGenerateMermaidMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) return;

    try {
      await generateMermaid({ userInput: trimmedInput }).unwrap();
      setInputValue("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputArea}>
        <TextField
          className={styles.inputField}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
          variant="outlined"
          fullWidth
          multiline
          minRows={isOpen ? 6 : 1}
          onFocus={onFocus}
        />
        <Button
          className={styles.sendButton}
          onClick={handleSendMessage}
          variant="contained"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </div>
    </div>
  );
};

export default InputArea;
