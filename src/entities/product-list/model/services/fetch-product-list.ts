import { Product } from 'entities/product-list/model/types/products';

export const fetchProducts = (): Promise<Product[]> => {
	//const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
	const apiUrl = 'https://fakestoreapi.com/products';

	try {
		return fetch(apiUrl)
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				return res.json();
			})
			.catch((error) => {
				throw new Error(`Failed to fetch: ${ error.message }`);
			});
	} catch (error) {
		throw new Error(`Failed to fetch products: ${ error.message }`);
	}
};
