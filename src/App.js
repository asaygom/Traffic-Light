import { useState } from 'react';
import './App.css';

function App() {
  const [activeLight, setActiveLight] = useState("")

  return (
    <div className="App">
      <h1 className='display-3 fw-bold text-secondary'>Traffic Light</h1>
      <div className='trafficLightWhole'>
        <div className="trafficLight">
          <div className={"red"+(activeLight==="red"?" selected":"")} onClick={() => {setActiveLight("red")}}></div>
          <div className={"yellow"+(activeLight==="yellow"?" selected":"")} onClick={() => {setActiveLight("yellow")}}></div>
          <div className={"green"+(activeLight==="green"?" selected":"")} onClick={() => {setActiveLight("green")}}></div>
        </div>
        <div className='trafficLightBottom'></div>
      </div>
    </div>
  );
}

export default App;
