import React, { useState } from 'react'
import './App.css'


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
          return () => setState([...state, element.value])
        }
        let action = element.action ?? write
        return <Button className={element.className} onClick={action({ state, setState })} key={element.value}>{element.value}</Button>
      })}
    </div >
  )
}

interface ButtonParams {
  children: string
  className?: string
  onClick: () => void
}
function Button({ children, className, onClick }: ButtonParams) {
  return (
    <button className={"font-bold bg-gray-200 hover:bg-gray-300 " + className} onClick={onClick}>
      {children}
    </button>
  )
}

interface ScreenParams {
  children: string
  className?: string
}
function Screen({ children, className }: ScreenParams) {
  return (
    <div className={"relative bg-gray-100 " + className}>
      <p className="absolute font-mono text-xl font-bold tracking-widest right-4 bottom-4">
        {children}
      </p>
    </div>
  )
}

export default App

const buttons = [
  {
    value: "AC",
    action: ({ state, setState }: actionParams) => {
      let closure = () => setState(Array())
      return closure
    }
  },
  {
    value: "C",
    action: ({ state, setState }: actionParams) => {
      let closure = () => {
        state[state.length - 1] = state[state.length - 1]?.slice(0, -1)
        setState(state)
      }
      return closure
    }
  },
  {
    value: "/",
  },
  {
    value: "*",
  },
  {
    value: "7",
  },
  {
    value: "8",
  },
  {
    value: "9",
  },
  {
    value: "-",
  },
  {
    value: "4",
  },
  {
    value: "5",
  },
  {
    value: "6",
  },
  {
    value: "+",
  },
  {
    value: "1",
  },
  {
    value: "2",
  },
  {
    value: "3",
  },
  {
    value: "=",
    className: "row-span-2",
    action: ({ state, setState }: actionParams) => {
      let closure = () => setState([eval(state.join(""))])
      return closure
    }
  },
  {
    value: "0",
    className: "col-span-2",
  },
  {
    value: ".",
  },
]