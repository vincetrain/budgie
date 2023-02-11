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
 			<div className='smallCharts'>
 				<PieChart width={700} height={700}>
 					<Pie data={[expense, {name: 'fill', money: totalMoney-expense.money, fill: '#AFAFAF'}]} dataKey="money" outerRadius={250} fill="#004A62" innerRadius={150} startAngle={90} endAngle={-360} />
 				</PieChart>
 				<h2>{expense.name} | {expense.money} | {expense.money/totalMoney * 100}%</h2>
 			</div>
		)
	})

  return (
    
    <div className="expenseContainer">
        <section className='charts'>
			<div id='total'>
				<h1>${totalMoney}</h1>
        		<PieChart width={700} height={700}>
          			<Pie data={data} dataKey="money" outerRadius={250} fill="#ECF8E5" innerRadius={150} startAngle={90} endAngle={450}/>	
        		</PieChart>
			</div>
			{chartMap}
		</section>

		<button onClick={togglePopup}>Add Expenses</button>


	  {isOpen && <Popup
      content={<>
        <b>Input Your Expense</b>
        <p>YOOODLE consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </>}
      handleClose={togglePopup}
    />}
    </div>
    
  );
}


export default Expenses;
