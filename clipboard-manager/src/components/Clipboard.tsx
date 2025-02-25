import { useState, useEffect } from "react";
import styled from "styled-components";
import CopyButton from "./CopyButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
`;

const ClipboardContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  min-width: 320px;
  transition: background 0.3s ease-in-out;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  resize: none;
  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
`;

const Clipboard = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const savedText = localStorage.getItem("clipboard-text");
    if (savedText) setText(savedText);
  }, []);

  useEffect(() => {
    localStorage.setItem("clipboard-text", text);
  }, [text]);

  return (
    <Container>
      <ClipboardContainer>
        <TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          rows={4}
        />
        <CopyButton text={text} />
      </ClipboardContainer>
    </Container>
  );
};

export default Clipboard;
