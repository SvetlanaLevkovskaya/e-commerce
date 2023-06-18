import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'entities/product-list/model/selectors/get-product-list';
import { fetchProductsStart } from 'entities/product-list/model/slice/propduct-slice';
import styles from './product-list.module.scss'
import { Product } from 'entities/product-list/model/types/products';
import { ProductSort, sortProductsByProperty } from 'features/product-sort';
import { ProductGrid } from 'features/product-grid';
import { Loader } from 'shared/ui/loader/loader';

const ProductList = () => {
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector(getProductList);
	const [sortOption, setSortOption] = useState('price-desc');

	useEffect(() => {
		dispatch(fetchProductsStart());
	}, [dispatch]);

	const handleSortOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOption(e.target.value);
	};

	const handleAddToCart = (product: Product) => {
		console.log(product)
	};

	if (error) {
		return <p>Error: { error }</p>;
	}

	const [sortBy, sortOrder] = sortOption.split('-');
	const sortedProducts = sortProductsByProperty(products, sortBy, sortOrder);

	return (
		<div className={ styles.productListContainer }>
			{ loading ? (
				<Loader />
			) : (
				<>
					<ProductSort sortBy={ sortBy } sortOrder={ sortOrder } onSortByChange={ handleSortOptionChange } />
					<ProductGrid products={ sortedProducts } handleAddToCart={ handleAddToCart } />
				</>
			) }
		</div>
	);
};

export default ProductList;
