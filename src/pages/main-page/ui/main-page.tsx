import React from 'react';
import { ProductList } from 'entities/product-list';
import { AddNewProduct } from 'entities/add-new-product';

const MainPage = () => {

	return (
		<>
			<AddNewProduct />
			<ProductList />

		</>

	);
};

export default MainPage;
