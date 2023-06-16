import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from 'features/product-list/model/types/products';
import { fetchProducts } from 'features/product-list/model/services/fetch-product-list';

interface ProductsState {
	products: Product[];
	loading: boolean;
	error: string | null;
}

const initialState: ProductsState = {
	products: [],
	loading: false,
	error: null,
};

export const fetchProductsStart = createAsyncThunk(
	'products/fetchProducts',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const data = await fetchProducts();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductsStart.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProductsStart.fulfilled, (state, action) => {
				state.products = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchProductsStart.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export const {actions: productActions} = productSlice
export const {reducer: productReducer} = productSlice
