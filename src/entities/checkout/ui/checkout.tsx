import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';
import { useDispatch } from 'react-redux';
import { clearCart } from 'entities/cart/model/slice/cart-slice';
import { geocodeLatLng } from 'entities/checkout/model/lib/geocode-lat-lng';
import { OrderFormData } from 'entities/checkout/model/types/form-data';
import { CustomerInformation } from 'features/customer-information';
import { CreditCardInformation } from 'features/credit-card-information';
import { AddressInformation } from 'features/address-information';
import { GoogleMapComponent } from 'features/google-map-component';
import styles from './checkout.module.scss';


export const Checkout: FC = () => {
	const [success, setSuccess] = useState(false);
	const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<OrderFormData>();
	const dispatch = useDispatch()

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				const { latitude, longitude } = position.coords;
				setMapCenter({ lat: latitude, lng: longitude });

				try {
					const address = await geocodeLatLng(latitude, longitude);


					const cityArray = address.split(' ');
					const [city, index, country] = cityArray.slice(-3);
					const remainingAddress = cityArray.slice(0, -3).join(' ');

					console.log('City:', city);
					console.log('Index:', index);
					console.log('Country:', country);
					console.log('Remaining Address:', remainingAddress);

					setValue('address', address);
					setValue('city', city);
					setValue('country', country);
				} catch (error) {
					console.error('Error geocoding coordinates:', error);
				}
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

				<CustomerInformation register={ register } errors={ errors } />
				<CreditCardInformation register={ register } errors={ errors } />
				<AddressInformation register={ register } setValue={ setValue } errors={ errors } />

				<button className={ styles.orderSubmitButton } type="submit">Place Order</button>

			</form>

			<GoogleMapComponent mapCenter={ mapCenter } />

		</div>
	);
};


