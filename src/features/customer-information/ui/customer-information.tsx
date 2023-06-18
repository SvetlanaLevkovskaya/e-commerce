import { FC } from 'react';
import styles from './customer-information.module.scss';

export const CustomerInformation: FC<{ register: any; errors: any }> = ({ register, errors }) => (
	<div className={ styles.orderStepContainer }>

		<h2 className={ styles.stepTitie }>Step 1: Customer Information</h2>

		<input type="text" { ...register('name', { required: true }) } placeholder="Name" className={ styles.inputField } />
		{ errors.name && <span>This field is required</span> }

		<input type="email" { ...register('email', { required: true }) } placeholder="Email"
					 className={ styles.inputField } />
		{ errors.email && <span>This field is required</span> }

	</div>
);
