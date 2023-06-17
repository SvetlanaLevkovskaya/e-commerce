import { Product } from 'entities/product-list/model/types/products';
import styles from './product-grid.module.scss'
import { FC } from 'react';

interface ProductGridProps {
	products: Product[];
	handleAddToCart: (product: Product) => void;
}

export const ProductGrid: FC<ProductGridProps> = ({ products, handleAddToCart }) => {
	return (
		<div className={styles.productGridContainer}>
			{products.map((product) => (
				<div className={styles.productItem} key={product.id}>
					<img src={product.image} alt="product" className={styles.productImage} />
					<div className={styles.productTitle}>{product.title}</div>
					<div className={styles.productInfo}>
						<div className={styles.productPrice}>${product.price}</div>
						<button className={styles.addToCartButton} onClick={() => handleAddToCart(product)}>
							Add to Cart
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

