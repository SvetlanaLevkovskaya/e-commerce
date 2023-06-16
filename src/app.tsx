import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { AboutPageAsync } from './pages/about-page/about-page.async';
import { MainPageAsync } from './pages/main-page/main-page.async';

export const App = () => {
	return (
		<div className="app">
			<div>gjdjdjdjdjdjdjd</div>
			<Link to={ '/' }>Main Page</Link>
			<Link to={ '/about' }>About Page</Link>
			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>

					<Route path="/about" element={ <AboutPageAsync /> } />
					<Route path="/" element={ <MainPageAsync /> } />

				</Routes>
			</Suspense>
		</div>
	);
};

