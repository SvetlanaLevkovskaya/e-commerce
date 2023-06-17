import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCreatedProduct } from 'features/add-to-cart/model/selectors/get-product-to-cart';
import { Product } from 'entities/product-list/model/types/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart } from 'features/add-to-cart/model/slice/add-to-cart-slice';



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
	);

	return (
		<div>
			<h2>Cart</h2>
			{cartItems.length === 0 ? (
				<p>No items in the cart</p>
			) : (
				<div>
					<ul>
						{cartItems.map((item: Product) => (
							<li key={item.id}>
								{item.title} - ${item.price} (Quantity: {item.quantity})
								<button onClick={() => handleRemoveFromCart(item.id)}>
									<FontAwesomeIcon icon={faTrash} />
								</button>
							</li>
						))}
					</ul>
					<p>Total Amount: ${totalAmount}</p>
				</div>
			)}
		</div>
	);
};

export default Cart;
