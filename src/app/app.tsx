import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { CartPage } from 'pages/cart-page/indx';
import { OrderPage } from 'pages/order-page';
import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';

export const App = () => {
	return (
		<div className="app">

			<Link to={ '/' }>Main Page</Link>
			<Link to={ '/cart' }>Cart Page</Link>
			<Link to={ '/order' }>Order Page</Link>

			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>
					<Route path="/cart" element={ <CartPage /> } />
					<Route path="/order" element={ <OrderPage /> } />
					<Route path="/" element={ <MainPage /> } />
					<Route path="/*" element={ <NotFoundPage /> } />
				</Routes>
			</Suspense>
		</div>
	);
};

