import React, { useEffect, useState } from 'react';

export const UseCallbackHooks = ({callback}) => {

    const [num, setNum] = useState();

    useEffect(() => {
      setNum(callback());
    }, [callback])
    

  return (
    <div>
        {num}
    </div>
  )
}
