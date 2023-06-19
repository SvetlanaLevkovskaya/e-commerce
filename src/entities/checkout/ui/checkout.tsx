import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';
import { useDispatch } from 'react-redux';
import { clearCart } from 'entities/cart/model/slice/cart-slice';
import { GeocodedAddress, geocodeLatLng } from 'entities/checkout/model/lib/geocode-lat-lng';
import { OrderFormData } from 'entities/checkout/model/types/form-data';
import { CustomerInformation } from 'features/customer-information';
import { CreditCardInformation } from 'features/credit-card-information';
import { AddressInformation } from 'features/address-information';
import { GoogleMapComponent } from 'features/google-map-component';
import styles from './checkout.module.scss';


export const Checkout: FC = () => {
	const [success, setSuccess] = useState(false);
	const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
	const [selectedLocation, setSelectedLocation] = useState({ lat: 0, lng: 0 });
	const [loading, setLoading] = useState(true);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<OrderFormData>();
	const dispatch = useDispatch();

	useEffect(() => {
		const getCurrentLocation = async () => {
			try {
				const position = await getCurrentPosition();
				const { latitude, longitude } = position.coords;
				setMapCenter({ lat: latitude, lng: longitude });
				setSelectedLocation({ lat: latitude, lng: longitude });
				setLoading(false);

				const geocodedAddress = await getAddressFromCoordinates(latitude, longitude);
				handleAddressUpdate(geocodedAddress);
			} catch (error) {
				console.error('Error getting current location:', error);
				setLoading(false);
			}
		};

		getCurrentLocation();
	}, []);

	const getCurrentPosition = () => {
		return new Promise<GeolocationPosition>((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	};

	const getAddressFromCoordinates = async (lat: number, lng: number) => {
		try {
			const geocodedAddress = await geocodeLatLng(lat, lng);
			return geocodedAddress;
		} catch (error) {
			console.error('Error geocoding coordinates:', error);
			throw error;
		}
	};

	const handleAddressUpdate = (geocodedAddress: GeocodedAddress) => {
		const { formattedAddress, city, country } = geocodedAddress;

		console.log('City:', city);
		console.log('Country:', country);
		console.log('formattedAddress:', formattedAddress);


		setValue('address', formattedAddress);
		setValue('city', city);
		setValue('country', country);
	};

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
					dispatch(clearCart());
					resolve();
				} else {
					reject();
				}
			}, 2000);
		});
	};

	const handleMapClick = async (event: any) => {
		const { latLng } = event;
		const { lat, lng } = latLng.toJSON();

		setSelectedLocation({ lat, lng });

		try {
			const address = await getAddressFromCoordinates(lat, lng);
			handleAddressUpdate(address);
		} catch (error) {
			console.error('Error geocoding coordinates:', error);
		}
	};

	if (success) {
		return <Confetti />;
	}

	return (
		<div className={ styles.checkoutContainer }>
			{ loading ? (
				<div>Loading...</div>
			) : (
				<form onSubmit={ handleSubmit(onSubmit) }>
					<CustomerInformation register={ register } errors={ errors } />
					<CreditCardInformation register={ register } errors={ errors } />
					<AddressInformation
						register={ register }
						setValue={ setValue }
						errors={ errors }
					/>
					<button className={ styles.orderSubmitButton } type="submit">
						Place Order
					</button>
				</form>
			) }
			<GoogleMapComponent
				mapCenter={ mapCenter }
				selectedLocation={ selectedLocation }
				handleMapClick={ handleMapClick }
			/>
		</div>
	);
};


/*
 export const Checkout: FC = () => {
 const [success, setSuccess] = useState(false);
 const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
 const [selectedLocation, setSelectedLocation] = useState({ lat: 0, lng: 0 });
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
 setSelectedLocation({ lat: latitude, lng: longitude })

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

 const handleMapClick = async (event: any) => {
 const { latLng } = event;
 const { lat, lng } = latLng.toJSON();

 setSelectedLocation({ lat, lng });

 try {
 const address = await geocodeLatLng(lat, lng);

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

 <GoogleMapComponent
 mapCenter={mapCenter}
 selectedLocation={selectedLocation}
 handleMapClick={handleMapClick}
 />

 </div>
 );
 };


 */
