export interface GeocodedAddress {
	formattedAddress: string;
	city: string;
	country: string;
}

export const geocodeLatLng = (lat: number, lng: number): Promise<GeocodedAddress> => {
	return new Promise((resolve, reject) => {
		const geocoder = new google.maps.Geocoder();
		const latLng = new google.maps.LatLng(lat, lng);
		geocoder.geocode({ location: latLng }, (results, status) => {
			console.log(latLng);
			if (status === google.maps.GeocoderStatus.OK) {
				if (results && results.length > 0) {
					console.log('results', results);

					const addressComponents = results[0].address_components;
					const locality = addressComponents.find(component =>
						component.types.includes('locality')
					);
					const country = addressComponents.find(component =>
						component.types.includes('country')
					);

					const city = locality ? locality.long_name : '';
					const countryName = country ? country.long_name : '';

					console.log('City:', city);
					console.log('Country:', countryName);

					console.log('results[0].formatted_address', results[0].formatted_address)
					console.log('addressComponents', addressComponents)



					const geocodedAddress: GeocodedAddress = {
						formattedAddress: results[0].formatted_address,
						city: city,
						country: countryName,
					};

					resolve(geocodedAddress);

				} else {
					reject('No results found');
				}
			} else {
				reject(status);
			}
		});
	});
};


/*

	[
	{
		"address_components": [
			{
				"long_name": "13",
				"short_name": "13",
				"types": [
					"street_number"
				]
			},
			{
				"long_name": "Partizanskiy Prospekt",
				"short_name": "Partizanskiy Prospekt",
				"types": [
					"route"
				]
			},
			{
				"long_name": "Lieninski rajon",
				"short_name": "Lieninski rajon",
				"types": [
					"political",
					"sublocality",
					"sublocality_level_1"
				]
			},
			{
				"long_name": "Minsk",
				"short_name": "Minsk",
				"types": [
					"locality",
					"political"
				]
			},
			{
				"long_name": "Minski rajon",
				"short_name": "Minski rajon",
				"types": [
					"administrative_area_level_2",
					"political"
				]
			},
			{
				"long_name": "Minskaja voblasć",
				"short_name": "Minskaja voblasć",
				"types": [
					"administrative_area_level_1",
					"political"
				]
			},
			{
				"long_name": "Belarus",
				"short_name": "BY",
				"types": [
					"country",
					"political"
				]
			}
		]
	*/
