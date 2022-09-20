import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>{
    setGood(good + 1)
    console.log('good',good)
  }
  const handleNeutralClick = () =>{
    setNeutral(neutral + 1)
    console.log('neutral',neutral)
  }
  const handleBadClick = () =>{
    setBad(bad + 1)
    console.log('bad', bad)
  }
  

  return (
    <div>
      <Header/>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics/>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

const Header = () =>{
    return(
      <h2>Give feeback</h2>
    )
}
const Statistics = () =>{
  return(
    <h2>Statistics</h2>
  )
}

export default App