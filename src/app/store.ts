import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from 'features/product-list/model/slice/propduct-slice';


const store = configureStore({
	reducer: {
		products: productReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>

export default store;
