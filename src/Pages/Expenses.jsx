import './Expenses.scss';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import React, { useState } from 'react';
import Popup from './Popup';


const data = [
	{name: 'Home & Utility', money: 4600, fill: '#004A62'},
	{name: 'Food', money: 2300, fill: '#347571'},
	{name: 'Leisure', money: 1720, fill: '#35B276'},
	{name: 'Transportation', money: 230, fill: '#B8E28A'},
	{name: 'Other', money: 1150, fill: '#C6EDB3'}
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
 			<div className='chart smallChart' key={index}>
				<ResponsiveContainer width={400} height="100%">
 					<PieChart>
 						<Pie data={[expense, {name: 'fill', money: totalMoney-expense.money, fill: '#AFAFAF'}]} dataKey="money" outerRadius={107} fill="#004A62" innerRadius={64} startAngle={90} endAngle={-360} />
 					</PieChart>
				</ResponsiveContainer>
 				<h2>{expense.name}</h2> 
				<p>${expense.money} | {expense.money/totalMoney * 100}%</p>
 			</div>
		)
	})

  return (
    
    <div className="expenseContainer">
        <section id='charts'>
			<div id='total'>
				<div className='chart'>
        			<PieChart width={500} height={500}>
          				<Pie data={data} dataKey="money" outerRadius={250} fill="#ECF8E5" innerRadius={150} startAngle={90} endAngle={450}/>	
        			</PieChart>	
				</div>
				<h1>${totalMoney}</h1>
			</div>
			<div id='infoCharts'>
				{chartMap}
			</div>
		</section>



	<div id="block"></div>

		<button id="addBtn" onClick={togglePopup}>View Expenses</button>

	  {isOpen && <Popup
      content={<>
		<form id="inputsNeeded">
		<div class="centering">
		<input class="checkboxCSS" type="checkbox" />
		<label for ="checkboxCSS">Home & Utilities</label>

		<input class="checkboxCSS" type="checkbox" />
		<label for ="checkboxCSS">Food & Groceries</label>

		<input class="checkboxCSS" type="checkbox" />
		<label for ="checkboxCSS">Leisure</label>

		<input class="checkboxCSS" type="checkbox" />
		<label for ="checkboxCSS">Transport</label>

		<input class="checkboxCSS" type="checkbox" />
		<label for ="checkboxCSS">Other</label>
		</div>

		<div class="centering">
		<input type="text" placeholder="Name of Expenses" />
		<input type="number" placeholder="Cost ($)"/>
		</div>
		</form>

      </>}
      handleClose={togglePopup}
    />}
    </div>
    
  );
}


export default Expenses;
