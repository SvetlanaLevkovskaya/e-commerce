import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import * as process from 'process';
import styles from './checkout.module.scss'
import { useDispatch } from 'react-redux';
import { clearCart } from 'features/add-to-cart/model/slice/cart-slice';


type FormData = {
	name: string;
	email: string;
	cardNumber: string;
	expirationDate: string;
	address: string;
	city: string;
	cvv: string;
};

const containerStyle = {
	marginTop: '70px',
	width: '100%',
	height: '400px',
};

export const Checkout: React.FC = () => {
	const [success, setSuccess] = useState(false);
	const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();
	const dispatch = useDispatch()

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				const { latitude, longitude } = position.coords;
				setMapCenter({ lat: latitude, lng: longitude });
				setValue('address', '');

			},
			(error) => {
				console.error('Error getting current location:', error);
			},
		);
	}, []);

	const onSubmit: SubmitHandler<FormData> = async () => {
		try {
			await placeOrder();
			await Swal.fire('Great job!', 'Order placed successfully!', 'success');
			setSuccess(true);
		} catch (error) {
			await Swal.fire('Oops!', 'Failed to place order.', 'error');
		}
	};

	const placeOrder = () => {
		return new Promise<void>((resolve, reject) => {
			setTimeout(() => {
				const success = Math.random() < 0.99;
				if (success) {
					dispatch(clearCart())
					resolve();
				} else {
					reject();
				}
			}, 2000);
		});
	};

	if (success) {
		return <Confetti />;
	}

	return (
		<div className={ styles.checkoutContainer }>
			<form onSubmit={ handleSubmit(onSubmit) }>
				{/* Step 1: Customer Information */ }
				<div className={ styles.orderStepContainer }>
					<h2 className={ styles.stepTitie }>Step 1: Customer Information</h2>
					<input
						type="text"
						{ ...register('name', { required: true }) }
						placeholder="Name"
						className={ styles.inputField }
					/>
					{ errors.name && <span>This field is required</span> }

					<input
						type="email"
						{ ...register('email', { required: true }) }
						placeholder="Email"
						className={ styles.inputField }
					/>
					{ errors.email && <span>This field is required</span> }
				</div>

				{/* Step 2: Credit Card */ }
				<div className={ styles.orderStepContainer }>
					<h2 className={ styles.stepTitie }>Step 2: Credit Card</h2>
					<input
						type="text"
						{ ...register('cardNumber', { required: true }) }
						placeholder="Card Number"
						className={ styles.inputField }
					/>
					{ errors.cardNumber && <span>This field is required</span> }

					<input
						type="text"
						{ ...register('expirationDate', { required: true }) }
						placeholder="Expiration Date"
						className={ styles.inputField }
					/>
					{ errors.expirationDate && <span>This field is required</span> }

					<input
						type="text"
						{ ...register('cvv', { required: true }) }
						placeholder="CVV"
						className={ styles.inputField }
					/>
					{ errors.cvv && <span>This field is required</span> }
				</div>

				{/* Step 3: Address Information */ }
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

					<input
						type="text"
						{ ...register('city', { required: true }) }
						placeholder="City"
						className={ styles.inputField }
					/>
					{ errors.city && <span>This field is required</span> }
				</div>

				<button className={ styles.orderSubmitButton } type="submit">Place Order</button>
			</form>

			<LoadScript googleMapsApiKey={ process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }>
				<GoogleMap mapContainerStyle={ containerStyle } center={ mapCenter } zoom={ 10 }>
					<Marker position={ mapCenter } />
				</GoogleMap>
			</LoadScript>

		</div>

	);
};


