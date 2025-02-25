// components/Clipboard.tsx
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CopyButton from "./CopyButton";

const ClipboardContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  min-width: 300px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const Clipboard = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const savedText = localStorage.getItem("clipboard-text");
    if (savedText) setText(savedText);
  }, []);

  useEffect(() => {
    localStorage.setItem("clipboard-text", text);
  }, [text]);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  return (
    <ClipboardContainer>
      <h2>Clipboard Manager</h2>
      <TextArea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        rows={4}
      />
      <CopyButton text={text} />
    </ClipboardContainer>
  );
};

export default Clipboard;
