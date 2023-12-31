import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'entities/product-list/model/types/products';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

const cartSlice = createSlice({
	name: 'cart',
	initialState: cartFromLocalStorage,
	reducers: {
		addToCart: (state, action) => {
			const product = action.payload;
			const existingItem = state.find((item: Product) => item.id === product.id);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.push({ ...product, quantity: 1 });
			}

			localStorage.setItem('cart', JSON.stringify(state));
		},
		removeFromCart: (state, action) => {
			const productId = action.payload;
			const updatedCart = state.filter((product: Product) => product.id !== productId);
			localStorage.setItem('cart', JSON.stringify(updatedCart));
			return updatedCart;
		},
		clearCart: () => {
			localStorage.removeItem('cart');
			return [];
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
