import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FC } from 'react';


const containerStyle = {
	marginTop: '70px',
	width: '100%',
	height: '400px',
};

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export const GoogleMapComponent: FC<{ mapCenter: any }> = ({ mapCenter }) => (

	<LoadScript googleMapsApiKey={ API_KEY }>
		<GoogleMap mapContainerStyle={ containerStyle } center={ mapCenter } zoom={ 10 }>
			<Marker position={ mapCenter } />
		</GoogleMap>
	</LoadScript>
);
