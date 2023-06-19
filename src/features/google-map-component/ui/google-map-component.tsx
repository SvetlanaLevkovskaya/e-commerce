import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FC } from 'react';
import { defaultTheme } from 'entities/checkout/ui/theme';


const containerStyle = {
	marginTop: '70px',
	width: '100%',
	height: '400px',
};

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

const defaultOptions = {
	streetViewControl: false,
	rotateControl: false,
	styles: defaultTheme,
}

interface GoogleMapComponentProps {
	mapCenter: any;
	selectedLocation: any;
	handleMapClick: (event: any) => void;
}

export const GoogleMapComponent: FC<GoogleMapComponentProps> = ({
																																	mapCenter,
																																	selectedLocation,
																																	handleMapClick,
																																}) => (
	<LoadScript googleMapsApiKey={API_KEY}>
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={mapCenter}
			zoom={10}
			options={defaultOptions}
			onClick={handleMapClick}
		>
			{selectedLocation ? <Marker position={selectedLocation} /> : <Marker position={mapCenter} />}
		</GoogleMap>
	</LoadScript>
);
