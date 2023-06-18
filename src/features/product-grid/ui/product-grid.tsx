import { Product } from 'entities/product-list/model/types/products';
import styles from './product-grid.module.scss'
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCreatedProduct } from 'entities/add-new-product/model/selectors/get-created-product';
import { Loader } from 'shared/ui/loader/loader';
import { addToCart } from 'features/add-to-cart/model/slice/cart-slice';

interface ProductGridProps {
	products: Product[];
	handleAddToCart?: (product: Product) => void;
}

export const ProductGrid: FC<ProductGridProps> = ({ products, handleAddToCart }) => {
	const dispatch = useDispatch();


	const { loading, createdProduct, error } = useSelector(getCreatedProduct);

	const allProducts = [...products, ...createdProduct];

	const handleAddToCartProduct = (product: Product) => {
		if (handleAddToCart) {
			handleAddToCart(product);
			dispatch(addToCart(product));
		}
	};

	return (
		<div className={ styles.productGridContainer }>
			{ loading ? (
				<Loader />
			) : (
				allProducts.map((product, index) => (
					<div className={ styles.productItem } key={ index }>
						<img src={ product.image } alt="product" className={ styles.productImage } />
						<div className={ styles.productTitle }>{ product.title }</div>
						<div className={ styles.productInfo }>
							<div className={ styles.productPrice }>${ product.price }</div>
							<button
								className={ styles.addToCartButton }
								onClick={ () => handleAddToCartProduct(product) }
							>
								Add to Cart
							</button>
						</div>
					</div>
				))
			) }
		</div>
	);
};

