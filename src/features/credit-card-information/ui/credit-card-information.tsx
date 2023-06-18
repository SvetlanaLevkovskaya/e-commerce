import { FC } from 'react';
import styles from './credit-card-information.module.scss';

export const CreditCardInformation: FC<{ register: any; errors: any }> = ({ register, errors }) => (
	<div className={styles.orderStepContainer}>
		<h2 className={styles.stepTitie}>Step 2: Credit Card</h2>
		<input
			type="text"
			{...register('cardNumber', { required: true })}
			placeholder="Card Number"
			className={styles.inputField}
		/>
		{errors.cardNumber && <span>This field is required</span>}

		<input
			type="text"
			{...register('expirationDate', { required: true })}
			placeholder="Expiration Date"
			className={styles.inputField}
		/>
		{errors.expirationDate && <span>This field is required</span>}

		<input type="text" {...register('cvv', { required: true })} placeholder="CVV" className={styles.inputField} />
		{errors.cvv && <span>This field is required</span>}
	</div>
);
