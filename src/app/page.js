"use client"
import React,{ useReducer } from 'react'
import { A } from './A'
import { B } from './B'
import { C } from './C'
import { appReducer } from './appReducer'
import { init } from './init'
import { appContext } from './context'
export default function App() {
  const [state,dispatch]=useReducer(appReducer,init)
  return (
     <div>
      <appContext.Provider value={{state,dispatch}}>
        <A />
        <B />
        <C />
      </appContext.Provider> 
     </div>
  )
}
