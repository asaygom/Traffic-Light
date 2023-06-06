import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='display-3 fw-bold text-secondary'>Traffic Light</h1>
      <div className='trafficLightWhole'>
        <div className="trafficLight">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <div className='trafficLightBottom'></div>
      </div>
    </div>
  );
}

export default App;
