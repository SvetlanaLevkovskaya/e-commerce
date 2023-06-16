import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { CartPageAsync } from './pages/cart-page/cart-page.async';
import { MainPageAsync } from './pages/main-page/main-page.async';
import { OrderPageAsync } from './pages/order-page/order-page.async';
import { NotFoundPageAsync } from './pages/not-found-page/not-found-page.async';

export const App = () => {
	return (
		<div className="app">

			<Link to={ '/' }>Main Page</Link>
			<Link to={ '/cart' }>Cart Page</Link>
			<Link to={ '/order' }>Order Page</Link>

			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>
					<Route path="/cart" element={ <CartPageAsync /> } />
					<Route path="/order" element={ <OrderPageAsync /> } />
					<Route path="/" element={ <MainPageAsync /> } />
					<Route path="/*" element={ <NotFoundPageAsync /> } />
				</Routes>
			</Suspense>
		</div>
	);
};

