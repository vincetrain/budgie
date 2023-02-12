import './Expenses.scss';
import AddExpense from "../Components/AddExpenses.jsx";
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import React, { useState } from 'react';

function Expenses() {
  
    const [modalActive, setModalState] = useState(false);

	const [data, setData] = useState([
		{desc: 'Mortgage', name: 'Home & Utility', money: 4600, fill: '#004A62'},
		{desc: 'McDonalds', name: 'Food', money: 2300, fill: '#347571'},
		{desc: 'Escape From Tarkov: EOD', name: 'Leisure', money: 1500, fill: '#35B276'},
		{desc: 'TTC', name: 'Transportation', money: 1200, fill: '#B8E28A'},
		{desc: 'Private School', name: 'Other', money: 400, fill: '#C6EDB3'}
	]);

	const chartFills = {
		"Home & Utility" : "#004A62",
		"Food" : "#347571",
		"Leisure" : "#35B276",
		"Transportation" : "#B8E28A",
		"Other" : "C6EDB3"
	}

    function openModal() {
        setModalState(!modalActive);
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
 						<Pie data={[expense, {name: 'fill', money: totalMoney-expense.money, fill: '#AFAFAF'}]} dataKey="money" nameKey="tag" outerRadius={107} fill="#004A62" innerRadius={64} startAngle={90} endAngle={-360} />
 					</PieChart>
				</ResponsiveContainer>
 				<h2>{expense.name}</h2> 
				<p>${expense.money} | {Math.round(expense.money/totalMoney * 10000)/100}%</p>
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

		<button id="addBtn" onClick={openModal}>View Expenses</button>
		<AddExpense 
			state={modalActive}
            changeState={setModalState}
			addExpense={setData}
			expenses={data}
			chartFills={chartFills}
            />
    </div>
    
  );
}


export default Expenses;
