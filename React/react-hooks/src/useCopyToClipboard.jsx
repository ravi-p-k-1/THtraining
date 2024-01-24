import { useCallback, useEffect, useState } from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard(resetInterval = null) {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = useCallback((text) => {
    if (typeof text === "string" || typeof text === "number") {
      copy(text.toString());
      setCopied(true);
    } else {
      console.error(
        `Cannot copy ${typeof text} to clipboard, must be a stringg or number`
      );
      setCopied(false);
    }
  },[]);

  useEffect(() => {
    let timeout;
    if (isCopied && resetInterval) {
      setTimeout(() => setCopied(false), resetInterval);
    }
    return ()=>{
        clearTimeout(timeout);
    }
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
}
