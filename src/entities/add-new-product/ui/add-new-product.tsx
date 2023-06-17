import React, { ChangeEvent, useCallback,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync } from 'entities/add-new-product/model/slice/add-new-product-slice';
import styles from './add-new-product.module.scss'
import { getCreatedProduct } from 'entities/add-new-product/model/selectors/get-created-product';
import { ProductData } from 'entities/add-new-product/model/types/new-product';


export const AddNewProduct: React.FC = () => {
	const dispatch = useDispatch();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [productName, setProductName] = useState('');

	const { loading } = useSelector(getCreatedProduct);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setProductName('');
	};

	const handleProductNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setProductName(e.target.value);
	};

	const handleAddNewProduct = useCallback(() => {
		const productData: ProductData  = {
			title: productName,
			price: 1000,
			description: 'some desc',
			image: 'https://i.pravatar.cc',
			category: 'electronic',
		};

		dispatch(addProductAsync(productData));
		closeModal();
	}, [dispatch, productName]);

	return (
		<div>
			<button className={styles.addNewProductButton} onClick={openModal}>+</button>

			{isModalOpen && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<h2>Add New Product</h2>
						<input
							type="text"
							value={productName}
							onChange={handleProductNameChange}
						/>
						<div className={styles.modalButtons}>
							<button onClick={handleAddNewProduct}>Confirm</button>
							<button onClick={closeModal}>Cancel</button>
						</div>
					</div>
				</div>
			)}

			{loading && <p>Loading...</p>}

		</div>
	);
};
