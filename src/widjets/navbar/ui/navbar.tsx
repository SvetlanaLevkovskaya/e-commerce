import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

export const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.links}>
				<Link to={ '/e-commerce' } className={styles.link}>Main Page</Link>
				<Link to={ '/e-commerce/cart' } className={styles.link}>Cart Page</Link>
				<Link to={ '/e-commerce/order' } className={styles.link}>Order Page</Link>
			</div>
		</div>
	);
};

