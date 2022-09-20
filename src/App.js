import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + bad + neutral
  const avg = (good-bad) / (good +bad +neutral)
  const positivesPercent = good / (good +bad +neutral) * 100

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
      <Header/>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Votes good = {good} bad = {bad} neutral = {neutral}/>
      <h2>Statistics</h2>
      <Statistics total = {total} avg = {avg} positiiviset = {positivesPercent}/>
    </div>
  )
}
const Votes = (props) =>{
  return(
  <div>
      <p>Good : {props.good}</p>
      <p>Neutral : {props.neutral}</p>
      <p>Bad: {props.bad}</p>
  </div>
  //tanne ehtoa viela
  )
  
}

const Header = () =>{
    return(
      <h2>Give feeback</h2>
    )
}
const Statistics = (props) =>{
 
  if(props.total > 0){
    return(
      <div>
      <p>Total votes: {props.total}</p>
    <p>Average: {props.avg}</p>
    <p>Positives %: {props.positiiviset}</p>
    </div>
    )
  }else{
    return(
      <p>No feedback given!</p>
    )
  }
}

export default App