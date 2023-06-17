import { Product } from 'entities/product-list/model/types/products';
import styles from './product-grid.module.scss'
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getCreatedProduct } from 'entities/add-new-product/model/selectors/get-created-product';

interface ProductGridProps {
	products: Product[];
	handleAddToCart?: (product: Product) => void;
}

export const ProductGrid: FC<ProductGridProps> = ({ products, handleAddToCart }) => {

	const { loading, createdProduct, error } = useSelector(getCreatedProduct);

	const allProducts = [...products, ...createdProduct];

	return (
		<div className={styles.productGridContainer}>
			{loading ? (
				<p>Loading...</p>
			) : (
				allProducts.map((product, index) => (
					<div className={styles.productItem} key={index}>
						<img src={product.image} alt="product" className={styles.productImage} />
						<div className={styles.productTitle}>{product.title}</div>
						<div className={styles.productInfo}>
							<div className={styles.productPrice}>${product.price}</div>
							<button
								className={styles.addToCartButton}
								onClick={() => handleAddToCart && handleAddToCart(product)}
							>
								Add to Cart
							</button>
						</div>
					</div>
				))
			)}
		</div>
	);
};

