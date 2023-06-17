import { Product } from 'features/product-list/model/types/products';

export const sortProductsByProperty = (products: Product[], sortBy: string, sortOrder: string): Product[] => {
	return products.slice().sort((a, b) => {
		if (sortBy === 'price') {
			const priceDiff = a.price - b.price;
			return sortOrder === 'asc' ? priceDiff : -priceDiff;
		} else if (sortBy === 'name') {
			const nameA = a.title.toUpperCase();
			const nameB = b.title.toUpperCase();
			if (nameA < nameB) {
				return sortOrder === 'asc' ? -1 : 1;
			}
			if (nameA > nameB) {
				return sortOrder === 'asc' ? 1 : -1;
			}
			return 0;
		}
	});
};
