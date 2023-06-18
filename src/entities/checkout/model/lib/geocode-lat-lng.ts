export const geocodeLatLng = (lat: number, lng: number): Promise<string> => {
	return new Promise((resolve, reject) => {
		const geocoder = new google.maps.Geocoder();
		const latLng = new google.maps.LatLng(lat, lng);
		geocoder.geocode({ location: latLng }, (results, status) => {
			console.log(latLng)
			if (status === google.maps.GeocoderStatus.OK) {
				if (results && results.length > 0) {
					resolve(results[0].formatted_address);
				} else {
					reject('No results found');
				}
			} else {
				reject(status);
			}
		});
	});
};
