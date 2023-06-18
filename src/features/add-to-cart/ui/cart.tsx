import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCreatedProduct } from 'features/add-to-cart/model/selectors/get-product-to-cart';
import { Product } from 'entities/product-list/model/types/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart } from 'features/add-to-cart/model/slice/add-to-cart-slice';
import { Link } from 'react-router-dom';
import styles from './cart.module.scss'



interface CartProps {

}

const Cart: React.FC<CartProps> = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(getCreatedProduct);

	const handleRemoveFromCart = (productId: number) => {
		dispatch(removeFromCart(productId));
	};

	const totalAmount = cartItems.reduce(
		(total: number, item: Product) => total + item.price * item.quantity,
		0
	).toFixed(2);

	const roundedTotalAmount = parseFloat(totalAmount);

	console.log(roundedTotalAmount)

	return (
		<div>
			<h2>My Shopping Cart</h2>
			{cartItems.length === 0 ? (
				<p>No items in the cart</p>
			) : (
				<div>
					<div>
						{cartItems.map((item: Product) => (
							<div className={styles.productContainer} key={item.id}>
								<img className={styles.productImage} src={item.image} alt={'item'}/>
								{item.title} - ${item.price} (Quantity: {item.quantity})
								<button onClick={() => handleRemoveFromCart(item.id)}>
									<FontAwesomeIcon icon={faTrash} style={{ color: 'grey' }}/>
								</button>
							</div>
						))}
					</div>
					<p className={styles.totalAmount}><strong>Total Amount</strong>: ${roundedTotalAmount}</p>

					<Link to="/order">
						<button className={styles.checkoutButton}>Proceed to Checkout</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
