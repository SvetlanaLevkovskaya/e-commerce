import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from 'entities/product-list/model/slice/propduct-slice';


const store = configureStore({
	reducer: {
		products: productReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>

export default store;
