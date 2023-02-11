import logo from './logo.svg';
import './App.css';
import React from 'react';
import { PieChart, Pie} from 'recharts';


function App() {
  
  const data = [
    {name: 'homeUtil', money: 600},
    {name: 'food', money: 500},
    {name: 'leisure', money: 1720},
    {name: 'transport', money: 230},
    {name: 'other', money: 1130}
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React



        </a>
        
        <PieChart width={700} height={700}>
          <Pie data={data} dataKey="money" outerRadius={250} fill="green" />
        </PieChart>

      </header>
    </div>
  );
}


export default App;
