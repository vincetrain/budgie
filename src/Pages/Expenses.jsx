import './Expenses.scss';
import {PieChart, Pie} from 'recharts';
import React, { useState } from 'react';
import Popup from './Popup';



const data = [
	{name: 'homeUtil', money: 4600, fill: '#004A62'},
	{name: 'food', money: 2300, fill: '#347571'},
	{name: 'leisure', money: 1720, fill: '#35B276'},
	{name: 'transport', money: 230, fill: '#B8E28A'},
	{name: 'other', money: 1150, fill: '#C6EDB3'}
];

function Expenses() {
  

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
  setIsOpen(!isOpen);
  }
  
    let totalMoney = 0;
    for (let i = 0; i < data.length; i++) {
      totalMoney += data[i].money;
    }



    let chartMap = data.map((expense, index) => {
		console.log(expense)
		return (
 			<div className='smallChart' key={index}>
 				<PieChart width={300} height={300}>
 					<Pie data={[expense, {name: 'fill', money: totalMoney-expense.money, fill: '#AFAFAF'}]} dataKey="money" outerRadius={107} fill="#004A62" innerRadius={64} startAngle={90} endAngle={-360} />
 				</PieChart>
 				<h2>{expense.name} | {expense.money} | {expense.money/totalMoney * 100}%</h2>
 			</div>
		)
	})

  return (
    
    <div className="expenseContainer">
        <section id='charts'>
			<div id='total'>
        		<PieChart width={500} height={500}>
          			<Pie data={data} dataKey="money" outerRadius={250} fill="#ECF8E5" innerRadius={150} startAngle={90} endAngle={450}/>	
        		</PieChart>	
				<h1>${totalMoney}</h1>
			</div>
			{chartMap}
		</section>

		<button onClick={togglePopup}>Add Expenses</button>

	  {isOpen && <Popup
      content={<>
		<form>
		<label><input type="checkbox" />Home & Utilities</label>
		<label><input type="checkbox" />Food & Groceries</label>
		<label><input type="checkbox" />Leisure</label>
		<label><input type="checkbox" />Transport</label>
		<label><input type="checkbox" />Other</label>
		<input type="text" placeholder="Name of Expenses" />
		<input type="number" placeholder="Cost ($)"/>
		</form>

      </>}
      handleClose={togglePopup}
    />}
    </div>
    
  );
}


export default Expenses;
