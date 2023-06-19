import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCreatedProduct } from 'entities/cart/model/selectors/get-product-to-cart';
import styles from './navbar.module.scss';

export const Navbar = () => {
	const navigate = useNavigate();
	const cartItems = useSelector(getCreatedProduct);
	return (
		<div className={ styles.navbar }>
			<div className={ styles.links }>
				<Link to={ '/' } className={ styles.link }>Product Catalog</Link>

				<div>
					<button className={ styles.button } onClick={ () => navigate('./cart') }>Cart</button>
					<span>{ cartItems.length }</span>
				</div>

			</div>
		</div>
	);
};

