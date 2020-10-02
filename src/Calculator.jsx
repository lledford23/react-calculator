import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(0)

  const [firstNumber, setFirstNumber] = useState(null)
  const [secondNumber, setSecondNumber] = useState(null)

  const [operator, setOperator] = useState(null)

  function clickClear(event) {
    setFirstNumber(null)
    setSecondNumber(null)
    setOperator(null)
    setDisplay(0)
  }

  function clickedDigit(digit) {
    if (operator === null) {
      setFirstNumber(digit)
    } else {
      setSecondNumber(digit)
    }
    setDisplay(digit)
  }

  function clickedOperator(selectedOperator) {
    setOperator(selectedOperator)
  }

  function clickedEquals() {
    let result

    if (operator === '+') {
      result = firstNumber + secondNumber
    }

    if (operator === '-') {
      result = firstNumber - secondNumber
    }

    if (operator === '*') {
      result = firstNumber * secondNumber
    }

    if (operator === '/') {
      result = firstNumber / secondNumber
    }

    setDisplay(result)
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={clickClear}>
            {' '}
            AC
          </button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('/')
            }}
          >
            &#247;
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(7)
            }}
          >
            7
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(8)
            }}
          >
            8
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(9)
            }}
          >
            9
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('*')
            }}
          >
            &#215;
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(4)
            }}
          >
            4
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(5)
            }}
          >
            5
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(6)
            }}
          >
            6
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('-')
            }}
          >
            &#8722;
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(1)
            }}
          >
            1
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(2)
            }}
          >
            2
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(3)
            }}
          >
            3
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('+')
            }}
          >
            &#43;
          </button>
          <button
            className="button x2"
            onClick={function () {
              clickedDigit(0)
            }}
          >
            0
          </button>
          <button className="button">.</button>
          <button
            className="button op"
            onClick={function () {
              clickedEquals()
            }}
          >
            &#61;
          </button>
        </div>
      </div>
    </main>
  )
}
