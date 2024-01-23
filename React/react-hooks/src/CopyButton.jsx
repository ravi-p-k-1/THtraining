import React from 'react'
import useCopyToClipboard from './useCopyToClipboard';

export function CopyButton({code}) {

    const [isCopied, handleCopy] = useCopyToClipboard(1000);

  return (
    <div>
      <button onClick={()=>handleCopy(code)}>
        {isCopied ? 'Copied':'not Copied'}
      </button>
    </div>
  )
}
