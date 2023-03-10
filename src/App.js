import './App.css';
import React from 'react';
import {PieChart, Pie} from 'recharts';



function App() {
  
  const data = [
    {name: 'homeUtil', money: 4600, fill: '#004A62'},
    {name: 'food', money: 2300, fill: '#347571'},
    {name: 'leisure', money: 1720, fill: '#35B276'},
    {name: 'transport', money: 230, fill: '#B8E28A'},
    {name: 'other', money: 1150, fill: '#C6EDB3'}
  ];
  
    let totalMoney = 0;
    for (let i = 0; i < data.length; i++) {
      totalMoney += data[i].money;
    }

  return (
    <div className="App">
      <header className="App-header">
        <p>${totalMoney}</p>
        <PieChart width={700} height={700}>
          <Pie data={data} dataKey="money" outerRadius={250} fill="#ECF8E5" innerRadius={150} startAngle={90} endAngle={450}/>
        </PieChart>

        <p>Home & Utilities</p>
        <PieChart width={700} height={700}>
          <Pie data={[data[0], {name: 'fill', money: totalMoney-data[0].money, fill: '#AFAFAF'}]} dataKey="money" outerRadius={250} fill="#004A62" innerRadius={150} startAngle={90} endAngle={-360}/>
        </PieChart>
        <p>${data[0].money} | {data[0].money/totalMoney * 100}%</p>

        <p>Food & Groceries</p>
        <PieChart width={700} height={700}>
          <Pie data={[data[1], {name: 'fill', money: totalMoney-data[0].money, fill: '#AFAFAF'}]} dataKey="money" outerRadius={250} fill="#347571" innerRadius={150} startAngle={90} endAngle={-360}/>
        </PieChart>
        <p>${data[1].money} | {data[1].money/totalMoney * 100}%</p>

        <p>Leisure</p>
        <PieChart width={700} height={700}>
          <Pie data={[data[2], {name: 'fill', money: totalMoney-data[0].money, fill: '#AFAFAF'}]} dataKey="money" outerRadius={250} fill="#35B276" innerRadius={150} startAngle={90} endAngle={-360}/>
        </PieChart>
        <p>${data[2].money} | {data[2].money/totalMoney * 100}%</p>

        <p>Transportation</p>
        <PieChart width={700} height={700}>
          <Pie data={[data[3], {name: 'fill', money: totalMoney-data[0].money, fill: '#AFAFAF'}]} dataKey="money" outerRadius={250} fill="#B8E28A" innerRadius={150} startAngle={90} endAngle={-360}/>
        </PieChart>
        <p>${data[3].money} | {data[3].money/totalMoney * 100}%</p>

        <p>Other</p>
        <PieChart width={700} height={700}>
          <Pie data={[data[4], {name: 'fill', money: totalMoney-data[0].money, fill: '#AFAFAF'}]} dataKey="money" outerRadius={250} fill="#C6EDB3" innerRadius={150} startAngle={90} endAngle={-360}/>
        </PieChart>
        <p>${data[4].money} | {data[4].money/totalMoney * 100}%</p>

      </header>
    </div>
  );
}

function handleClick(event) {
  const modal = document.querySelector(".modal")
  const closeBtn = document.querySelector(".close")
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  })
}

<div class="modal">
   <div class="modal_content">
     <span class="close">&times;</span>
     <p>I'm A Pop Up!!!</p>
   </div>
</div>

export default App;
