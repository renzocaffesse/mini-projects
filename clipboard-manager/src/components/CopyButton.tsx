import { useState, useCallback } from "react";
import Button from "./Button";

interface CopyButtonProps {
  text: string;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  }, [text]);

  return (
    <Button onClick={copyToClipboard} disabled={!text || copied}>
      {copied ? "Copied!" : "Copy to Clipboard"}
    </Button>
  );
};

export default CopyButton;