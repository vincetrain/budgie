import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home.jsx';

import Navbar from './Components/Navbar.jsx';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Navbar />		
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	</BrowserRouter>
);
