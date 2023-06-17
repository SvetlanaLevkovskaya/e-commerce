import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductData } from 'entities/add-new-product/model/types/new-product';
import { addProduct } from 'entities/add-new-product/model/services/add-new-product';

interface ProductCreationState {
	loading: boolean;
	error: string | null;
	createdProduct: ProductData[];
}

const initialState: ProductCreationState = {
	loading: false,
	error: null,
	createdProduct: [],
};

export const addProductAsync = createAsyncThunk(
	'products/addProduct',
	async (productData: ProductData) => {
		const data = await addProduct(productData);
		return data;
	},
);

const productAddSlice = createSlice({
	name: 'addProduct',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addProductAsync.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(addProductAsync.fulfilled, (state, action) => {
				state.loading = false;
				const newProduct =  {
					title: action.meta.arg.title,
					price: 1000,
					description: 'some desc',
					image: 'https://i.pravatar.cc',
					category: 'electronic',
				};
				state.createdProduct = [...state.createdProduct, newProduct];
			})
			.addCase(addProductAsync.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { actions: productAddActions, reducer: productAddReducer } = productAddSlice;
