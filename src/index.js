import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Expenses from './Pages/Expenses.jsx';
import GoalsPage from './Pages/GoalsLandingPage.jsx';
import Home from './Pages/Home.jsx';
import ShortGoals from './Pages/ShortGoals.jsx';
import LongGoals from './Pages/LongGoals.jsx';
import BudgetingBuddy from './Pages/BudgetingBuddy.jsx';

import Navbar from './Components/Navbar.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Navbar />		
		<Routes>
			<Route path='/' element={<Home />} />
      		<Route path='/ShortGoals' element={<ShortGoals />} />
			<Route path='/LongGoals' element= {<LongGoals />} />
			<Route path='/BudgetingBuddy' element= {<BudgetingBuddy />} />
			<Route path='/expenses' element={<Expenses />} />
     		<Route path='/goals' element={<GoalsPage />} />
		</Routes>
	</BrowserRouter>
);
