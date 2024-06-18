import React, { useContext, useRef } from 'react'
import { appContext } from './context'

export const A = () => {
    const nameRef = useRef()
    const ctxData = useContext(appContext)
    const fnClick = () => {
        const name = nameRef.current.value;
        ctxData.dispatch({
           type: 'NAME_UPDATE',
           payload: name
        })
      }
  return (
    <div>
       <h1>A</h1>
       <p>
          Name: <input ref={nameRef}/>
       </p>
       <p>
          <button onClick={fnClick}>Submit</button>
       </p>
    </div>
  )
}

  
