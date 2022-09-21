import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + bad + neutral
  const avg = (good-bad) / (good +bad +neutral)
  const positivesPercent = good / (good +bad +neutral) * 100
  const goodText = "Good"
  const neutralText = "Neutral"
  const badText = "Bad"
  const totalVotesText = "Total votes: "
  const averageText = "Average: "
  const positivesPercentText = "Positives %: "
  const giveFeedBackText = "Give feedback";
  const statisticsText = "Statistics:"

  const handleGoodClick = () =>{
    setGood(good + 1)
    
  }
  const handleNeutralClick = () =>{
    setNeutral(neutral + 1)
   
  }
  const handleBadClick = () =>{
    setBad(bad + 1)
  }

  
  return (
    <div>
      <Header text = {giveFeedBackText}/>
      <Button text = {goodText} handleClick = {handleGoodClick}/>
      <Button text = {neutralText} handleClick = {handleNeutralClick}/>
      <Button text = {badText} handleClick = {handleBadClick}/>
      <StatisticLine text = {goodText} value = {good} total = {total}/>
      <StatisticLine text = {neutralText} value = {neutral} total = {total}/>
      <StatisticLine text = {badText} value = {bad} total = {total}/>
      <Header text = {statisticsText}/>
      <StatisticLine text = {totalVotesText} value = {total} total = {total}/>
      <StatisticLine text = {averageText} value = {avg} total = {total}/>
      <StatisticLine text = {positivesPercentText} value = {positivesPercent} total = {total}/>   
    </div>
  )
}

const StatisticLine = (props) =>{
  if(props.total > 0){
    return(
      <p>{props.text}: {props.value}</p>
    )
  }
}
const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
  
}
const Header = (props) =>{
    return(
      <h2>{props.text}</h2>
    )
}

export default App