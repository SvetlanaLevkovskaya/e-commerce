import { ChangeEvent, FC } from 'react';
import styles from './modal.module.scss'

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	productName: string;
	onProductNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Modal: FC<ModalProps> = ({
																 isOpen,
																 onClose,
																 onConfirm,
																 productName,
																 onProductNameChange,
															 }) => {
	if (!isOpen) return null;

	return (
		<div className={ styles.modal }>
			<div className={ styles.modalContent }>
				<h2>Add New Product</h2>
				<input type="text" value={ productName } onChange={ onProductNameChange } />
				<div className={ styles.modalButtons }>
					<button onClick={ onConfirm }>Confirm</button>
					<button onClick={ onClose }>Cancel</button>
				</div>
			</div>
		</div>
	);
};
