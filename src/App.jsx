
import './App.css'
import { useState, useEffect } from 'react'
import TipInterface from './components/TipInterface'
import Total from './components/Total'

function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  const [calculateTip, setCalculateTip] = useState(0)

  useEffect(function(){
    if(bill > 0, numberOfPeople > 0, tipPercentage > 0){
      setCalculateTip(bill (tipPercentage/100))
    }
  },[bill, numberOfPeople, tipPercentage])
  console.log(calculateTip)

  function enterOnlyNum(event){
    const result = +event.target.value.replace(/\D/g, '');
    setBill(result) 
}

  



  return (
    <div className="App">
      <h1> working</h1>
      <div className='main-section'>
        <div className="tip-section">
      <TipInterface 
      billAmount={enterOnlyNum} 
      bill={bill}
      setBill={setBill} 
      tipPercentage={tipPercentage}
      setTipPercentage={setTipPercentage}
      numberOfPeople={numberOfPeople}
      setNumberOfPeople={setNumberOfPeople}
      />
      </div>
      <div className='total-section'><Total /></div>
     </div>
    </div>
  )
}

export default App
