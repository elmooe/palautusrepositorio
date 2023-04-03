import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setLeft] = useState(0)
  const [neutral, setRight] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setLeft(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setRight(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  const StatisticLine = (props) => {
    return (
      <p>{props.text} {props.value}</p>
    )
  }

  const Statistics = (props) => {
    const average = (props.goodClicks - props.badClicks) / props.allClicks
    const positive = (props.goodClicks / props.allClicks) * 100
    if (props.allClicks === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    return (
      <div>
      <table>
        <tbody>
        <tr>
          <td><StatisticLine text="good " /></td>
          <td><StatisticLine value={props.goodClicks} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="neutral " /></td>
          <td><StatisticLine value={props.neutralClicks} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="bad " /></td>
          <td><StatisticLine value={props.badClicks} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="all " /></td>
          <td><StatisticLine value={props.allClicks} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="average " /></td>
          <td><StatisticLine value={average} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="positive " /></td>
          <td><StatisticLine value={positive} /></td>
        </tr>
        </tbody>
      </table>
      </div>
    )
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />

        <h1>statistics</h1>
        <Statistics goodClicks={good} neutralClicks={neutral} badClicks={bad}
        allClicks={all}/>
      </div>
    </div>
  )
}

export default App