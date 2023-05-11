import React, { useState } from "react";
import Modal from "./Modal";
import { SafeUser } from "../../types";

interface MessagingModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  message: string;
  onMessageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  user: SafeUser;
  actionLabel: string;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const MessagingModal: React.FC<MessagingModalProps> = ({
  message,
  onMessageChange,
  isOpen = false,
  onClose,
  onSubmit,
  title,
  user,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
  disabled = false,
  children,
}) => {
  const handleSubmit = () => {
    // Implement logic for sending the message
    console.log(`Sending message to ${user.name}: ${message}`);
    onSubmit();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const textareaStyles = {
    borderRadius: "4px",
    border: "1px solid #ccc",
    padding: "8px",
    width: "100%",
    height: "120px",
    resize: "none",
    fontSize: "16px",
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={title}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      disabled={disabled}
      body={
        <>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={onMessageChange}
            style={{
              borderRadius: "4px",
              border: "1px solid #ccc",
              padding: "8px",
              width: "100%",
              height: "100px",
              fontSize: "14px",
              resize: "vertical",
            }}
          />
        </>
      }
    />
  );
};

export default MessagingModal;
