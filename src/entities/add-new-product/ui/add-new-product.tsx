import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync } from 'entities/add-new-product/model/slice/add-new-product-slice';
import { getCreatedProduct } from 'entities/add-new-product/model/selectors/get-created-product';
import { ProductData } from 'entities/add-new-product/model/types/new-product';
import { Modal } from 'shared/ui/modal/modal';
import styles from './add-new-product.module.scss';


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
		const productData: ProductData = {
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
			<button className={ styles.addNewProductButton } onClick={ openModal }>
				+
			</button>

			<Modal
				isOpen={ isModalOpen }
				onClose={ closeModal }
				onConfirm={ handleAddNewProduct }
				productName={ productName }
				onProductNameChange={ handleProductNameChange }
			/>

		</div>
	);
};
