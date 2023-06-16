import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'features/product-list/model/selectors/get-product-list';
import { fetchProductsStart } from 'features/product-list/model/slice/propduct-slice';
import styles from './product-list.module.scss'
import { Product } from 'features/product-list/model/types/products';
import { sortProducts } from 'features/product-sort/model/lib/get-sort-products';
import { ProductSort } from 'features/product-sort/ui/product-sort';

const ProductList: React.FC = () => {
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector(getProductList);
	const [sortOption, setSortOption] = useState('price-asc');

	useEffect(() => {
		dispatch(fetchProductsStart());
	}, [dispatch]);

	const handleSortOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOption(e.target.value);
	};

	const handleAddToCart = (product: Product) => {
		//dispatch(addToCart(product));
		console.log(product)
	};

	if (error) {
		return <p>Error: { error }</p>;
	}

	const [sortBy, sortOrder] = sortOption.split('-');
	const sortedProducts = sortProducts(products, sortBy, sortOrder);

	return (
		<div className={ styles.productContainer }>
			<div className={ styles.productSortContainer }>
				<ProductSort
					sortBy={ sortBy }
					sortOrder={ sortOrder }
					onSortByChange={ handleSortOptionChange }
				/>
			</div>
			<div className={ styles.productGrid }>
				{ sortedProducts.map((product) => (
					<div className={ styles.productItem } key={ product.id }>
						<img src={ product.image } alt="product" className={ styles.productImage } />

						<div className={ styles.productTitle }>{ product.title }</div>
						<div className={ styles.productInfo }>
							<div className={ styles.productPrice }>${ product.price }</div>
							<button
								className={ styles.addToCartButton }
								onClick={ () => handleAddToCart(product) }
							>
								Add to Cart
							</button>
						</div>
					</div>
				)) }
			</div>
		</div>
	);
};

export default ProductList;
