import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'features/product-list/model/selectors/get-product-list';
import { fetchProductsStart } from 'features/product-list/model/slice/propduct-slice';
import styles from './product-list.module.scss'
import { Product } from 'features/product-list/model/types/products';

const ProductList = () => {
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector(getProductList);

	useEffect(() => {
		dispatch(fetchProductsStart());
	}, [dispatch]);

	const handleAddToCart = (product: Product) => {
		//dispatch(addToCart(product));
		console.log(product)
	};

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<div className={styles.productContainer}>
			<div className={styles.productGrid}>
				{products.map((product) => (
					<div className={styles.productItem} key={product.id}>
						<img
							src={product.image}
							alt="product"
							className={styles.productImage}
						/>

						<div className={styles.productTitle}>{product.title}</div>
						<div className={styles.productInfo}>
							<div className={styles.productPrice}>${product.price}</div>
							<button
								className={styles.addToCartButton}
								onClick={() => handleAddToCart(product)}
							>
								Add to Cart
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;
