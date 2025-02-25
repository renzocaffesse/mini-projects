import { useState, useCallback } from "react";
import { toast } from "react-toastify";
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
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy: ", error);
      toast.error("Failed to copy!");
    }
  }, [text]);

  return (
    <Button onClick={copyToClipboard} disabled={!text || copied}>
      {copied ? "Copied!" : "Copy to Clipboard"}
    </Button>
  );
};

export default CopyButton;