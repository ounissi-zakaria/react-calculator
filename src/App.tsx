import React, { useState } from 'react'
import './App.css'
import { Button } from './Button'
import { Screen } from './Screen'


interface actionParams {
  state: Array<string>,
  setState: (newState: Array<string>) => void
}

function App() {
  const [state, setState] = useState(Array<string>())
  return (
    <div className="grid grid-cols-4 gap-0.5 h-screen">
      <Screen className="row-span-5 col-span-full">{state.join("")}</Screen>
      {buttons.map(element => {
        let write = ({ state, setState }: actionParams) => {
          let newState = [...state]
          let last = newState[newState.length - 1]
          if (/\d/.test(last) && element.type === "number") newState[newState.length - 1] = last + element.value
          else if (element.type === "number") newState.push(element.value)
          else if (/\d/.test(last) && element.type === "operation") newState.push(element.value)
          else if (/[\*\/\-\+]/.test(last) && element.type === "operation") newState[newState.length - 1] = element.value
          return () => setState(newState)
        }
        let action = element.action ?? write
        return <Button className={element.className} onClick={action({ state, setState })} key={element.value}>{element.value}</Button>
      })}
    </div >
  )
}

export default App

const buttons = [
  {
    value: "AC",
    type: "function",
    action: ({ state, setState }: actionParams) => {
      let closure = () => setState(Array())
      return closure
    }
  },
  {
    value: "C",
    type: "function",
    action: ({ state, setState }: actionParams) => {
      let closure = () => {
        let newState = [...state]
        newState[newState.length - 1] = newState[newState.length - 1]?.slice(0, -1)
        if (newState[newState.length - 1] === "") newState.pop()
        setState(newState)
      }
      return closure
    }
  },
  {
    value: "/",
    type: "operation",
  },
  {
    value: "*",
    type: "operation",
  },
  {
    value: "7",
    type: "number",
  },
  {
    value: "8",
    type: "number",
  },
  {
    value: "9",
    type: "number",
  },
  {
    value: "-",
    type: "operation",
  },
  {
    value: "4",
    type: "number",
  },
  {
    value: "5",
    type: "number",
  },
  {
    value: "6",
    type: "number",
  },
  {
    value: "+",
    type: "operation",
  },
  {
    value: "1",
    type: "number",
  },
  {
    value: "2",
    type: "number",
  },
  {
    value: "3",
    type: "number",
  },
  {
    value: "=",
    type: "function",
    className: "row-span-2",
    action: ({ state, setState }: actionParams) => {
      let closure = () => setState([String(eval(state.join("")))])
      return closure
    }
  },
  {
    value: "0",
    className: "col-span-2",
    type: "number",
  },
  {
    value: ".",
    type: "operation",
  },
]