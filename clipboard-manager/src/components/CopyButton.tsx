import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { useState, useCallback } from "react";
import Button from "./Button";

interface CopyButtonProps {
  text: string;
}

const ToastIcon = () => {
    const theme = useTheme();
    return <span style={{ color: theme.colors.toastIcon }}>✔</span>;
  };  

const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();
  const copyToClipboard = useCallback(async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copied to clipboard!", {
        icon: <ToastIcon />,
        style: { backgroundColor: theme.colors.toastSuccess, color: theme.colors.toastIcon },
      });
      
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  }, [text, theme.colors.toastIcon, theme.colors.toastSuccess]);

  return (
    <Button onClick={copyToClipboard} disabled={!text || copied}>
      {copied ? "Copied!" : "Copy to Clipboard"}
    </Button>
  );
};

export default CopyButton;