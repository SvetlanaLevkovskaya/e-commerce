import { ProductData } from 'entities/add-new-product/model/types/new-product';

export const addProduct = async (productData: ProductData): Promise<ProductData> => {
	try {
		const response = await fetch('https://fakestoreapi.com/products', {
			method: 'POST',
			body: JSON.stringify(productData)
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error creating product:', error);
		throw error;
	}
};
