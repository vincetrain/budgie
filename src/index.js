import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home.jsx';
import ShortGoals from './Pages/ShortGoals.jsx';

import Navbar from './Components/Navbar.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Navbar />		
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/expenses' element={<App />} />
      <Route path='/ShortGoals' element={<ShortGoals />} />
		</Routes>
	</BrowserRouter>
);
