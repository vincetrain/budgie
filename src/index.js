import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Expenses from './Pages/Expenses.jsx';
import Home from './Pages/Home.jsx';

import Navbar from './Components/Navbar.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Navbar />		
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/expenses' element={<Expenses />} />

		</Routes>
	</BrowserRouter>
);
