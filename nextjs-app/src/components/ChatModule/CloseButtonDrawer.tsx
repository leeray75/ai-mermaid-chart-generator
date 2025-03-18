"use client";
import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./ChatModule.module.scss";

interface CloseButtonDrawerProps {
  show: boolean; // Controls if the close button is visible
  onClick: () => void; // Handler for when the button is clicked
}

const CloseButtonDrawer: React.FC<CloseButtonDrawerProps> = ({
  show,
  onClick,
}) => {
  console.log("[CloseButtonDrawer] show:", show);
  if (!show) return null; // Return nothing if 'show' is false

  return (
    <div className={styles.closeButton}>
      <IconButton onClick={onClick}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default CloseButtonDrawer;
