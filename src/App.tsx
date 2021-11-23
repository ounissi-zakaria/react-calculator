import React, { useState } from 'react'
import './App.css'
import { Button } from './Button'
import { Screen } from './Screen'


interface actionParams {
  equation: Array<string>,
  setEquation: (newState: Array<string>) => void
  ans: number
  setAns: (newAns: number) => void
  showResult: boolean
  setShowResult: (newResult: boolean) => void
}

function App() {
  const [equation, setEquation] = useState(Array<string>())
  const [ans, setAns] = useState(0)
  const [showResult, setShowResult] = useState(false)
  return (
    <div className="grid grid-cols-4 gap-0.5 h-screen">
      <Screen className="row-span-5 col-span-full" equation={equation.join("")} ans={ans} showResult={showResult} />
      {buttons.map(element => {
        let write = ({ equation, setEquation, ans, showResult, setShowResult }: actionParams) => {
          let newEquation = [...equation]

          if (showResult && element.type === "operation") newEquation = [String(ans)]
          else if (showResult && element.type === "number") newEquation = []

          let last = newEquation[newEquation.length - 1]

          if (/\d/.test(last) && element.type === "number") newEquation[newEquation.length - 1] = last + element.value
          else if (element.type === "number") newEquation.push(element.value)
          else if (/\d/.test(last) && element.type === "operation") newEquation.push(element.value)
          else if (/[\*\/\-\+]/.test(last) && element.type === "operation") newEquation[newEquation.length - 1] = element.value
          return () => {
            setEquation(newEquation)
            setShowResult(false)
          }
        }
        let action = element.action ?? write
        return <Button className={element.className} onClick={action({ equation, setEquation, ans, setAns, showResult, setShowResult })} key={element.value}>{element.value}</Button>
      })}
    </div >
  )
}

export default App

const buttons = [
  {
    value: "AC",
    type: "function",
    action: ({ setEquation, setShowResult }: actionParams) => {
      let closure = () => {
        setShowResult(false)
        setEquation(Array())
      }
      return closure
    }
  },
  {
    value: "C",
    type: "function",
    action: ({ equation, setEquation, setShowResult }: actionParams) => {
      let newEquation = [...equation]
      newEquation[newEquation.length - 1] = newEquation[newEquation.length - 1]?.slice(0, -1)
      if (newEquation[newEquation.length - 1] === "") newEquation.pop()
      let closure = () => {
        setEquation(newEquation)
        setShowResult(false)
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
    action: ({ equation, setAns, setShowResult }: actionParams) => {
      let closure = () => {
        setShowResult(true)
        setAns(eval(equation.join("")))
      }
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