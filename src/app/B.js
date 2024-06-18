import React, { useContext, useRef } from 'react'
import { appContext } from './context'

export const B = () => {
    const locRef = useRef()
    const ctxData = useContext(appContext)
    const fnClick = () => {
        const loc = locRef.current.value;
        ctxData.dispatch({
           type: 'LOC_UPDATE',
           payload: loc
        })
    }
  return (
    <div>
       <h1>B</h1>
       <p>
          Location: <input ref={locRef}/>
       </p>
       <p>
          <button onClick={fnClick}>Submit</button>
       </p>
    </div>
  )
}

  


  
