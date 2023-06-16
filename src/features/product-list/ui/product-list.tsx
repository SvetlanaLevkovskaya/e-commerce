import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'features/product-list/model/selectors/get-product-list';
import { fetchProductsStart } from 'features/product-list/model/slice/propduct-slice';

const ProductList = () => {
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector(getProductList);

	useEffect(() => {
		dispatch(fetchProductsStart());
	}, [dispatch]);

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<div>
			<h1>MainPage</h1>
			<ul>
				{products.map((product) => (
					<>
						<li key={product.id}>{product.title}</li>
						<img src={product.image} alt='product' style={{width: "10%", marginBottom: '0.5rem'}}/>
					</>
				))}
			</ul>
		</div>
	);
};

export default ProductList;
