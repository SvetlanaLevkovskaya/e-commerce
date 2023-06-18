import { FC } from 'react';
import styles from './address-information.module.scss';


export const AddressInformation: FC<{ register: any; setValue: any; errors: any }> = ({
																																												register,
																																												setValue,
																																												errors,
																																											}) => (
	<div className={ styles.orderStepContainer }>
		<h2 className={ styles.stepTitie }>Step 3: Address Information</h2>
		<input
			type="text"
			{ ...register('address', { required: true }) }
			onChange={ (e) => setValue('address', e.target.value) }
			placeholder="Address"
			className={ styles.inputField }
		/>
		{ errors.address && <span>This field is required</span> }

		<input type="text" { ...register('city', { required: true }) } placeholder="City" className={ styles.inputField } />
		{ errors.city && <span>This field is required</span> }
	</div>
);
