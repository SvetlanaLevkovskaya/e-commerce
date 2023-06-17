import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from 'entities/product-list/model/slice/propduct-slice';
import { productAddReducer } from 'entities/add-new-product/model/slice/add-new-product-slice';
import { addToCartReducer } from 'features/add-to-cart/model/slice/add-to-cart-slice';


const store = configureStore({
	reducer: {
		products: productReducer,
		productCreation: productAddReducer,
		cart: addToCartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>

export default store;
