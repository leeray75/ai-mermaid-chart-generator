"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./ChatModule.module.scss";
import { useGetChatHistoryQuery, ChatHistoryItem } from "@/app/lib/api.slice";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useDispatch } from "react-redux";
import { setMermaidCode } from "@/app/redux/slices/mermaid-chart.slice";
import Button from "@mui/material/Button"; // Import Material UI Button
import ContentCopyIcon from "@mui/icons-material/ContentCopy"; // Import Copy Icon
import CodeIcon from "@mui/icons-material/Code"; // Import Code Icon
import Tooltip from "@mui/material/Tooltip"; // Import Tooltip for better UX

// Dynamically import Material-UI components
const CardContent = dynamic(() => import("@mui/material/CardContent"));

// SetMermaidCodeButton Component
const SetMermaidCodeButton = ({ mermaidCode }: { mermaidCode: string }) => {
  const dispatch = useDispatch();

  const handleSetMermaidCode = () => {
    dispatch(setMermaidCode(mermaidCode));
  };

  return (
    <Tooltip title="Set Mermaid Code" arrow>
      <Button
        variant="outlined"
        startIcon={<CodeIcon />}
        onClick={handleSetMermaidCode}
        sx={{ marginLeft: 1 }}
      >
        Set Code
      </Button>
    </Tooltip>
  );
};

// CopyButton Component
const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [buttonText, setButtonText] = useState("Copy");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCopy = async () => {
    try {
      if (buttonRef.current) {
        await navigator.clipboard.writeText(textToCopy);
        setButtonText("Copied!");
        setTimeout(() => {
          setButtonText("Copy");
        }, 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
      setButtonText("Error");
      setTimeout(() => {
        setButtonText("Copy");
      }, 2000);
    }
  };

  return (
    <Tooltip title="Copy to Clipboard" arrow>
      <Button
        variant="outlined"
        startIcon={<ContentCopyIcon />}
        onClick={handleCopy}
        ref={buttonRef}
      >
        {buttonText}
      </Button>
    </Tooltip>
  );
};

const MessagesArea = () => {
  const { data: chatHistory, isLoading, isError } = useGetChatHistoryQuery();

  if (isLoading) {
    return <div className={styles.messageArea}>Loading chat history...</div>;
  }

  if (isError) {
    return <div className={styles.messageArea}>Error loading chat history.</div>;
  }

  const components = {
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      const codeString = String(children).replace(/\n$/, "");

      return !inline && match ? (
        <div className="code-block-wrapper">
          <SyntaxHighlighter
            style={atomDark}
            language={match[1]}
            PreTag="div"
            {...props}
          >
            {codeString}
          </SyntaxHighlighter>
          <div style={{ display: "flex", marginTop: 8 }}>
            <CopyButton textToCopy={codeString} />
            <SetMermaidCodeButton mermaidCode={codeString} />
          </div>
        </div>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <CardContent className={styles.messageArea}>
      {chatHistory?.data?.map((msg: ChatHistoryItem) => (
        <div key={msg._id} className={styles.message}>
          <p>
            <strong>User:</strong> {msg.userInput}
          </p>
          <p>
            <strong>Mermaid Code:</strong>
          </p>
          <ReactMarkdown components={components}>{msg.mermaidCode}</ReactMarkdown>
        </div>
      ))}
    </CardContent>
  );
};

export default MessagesArea;