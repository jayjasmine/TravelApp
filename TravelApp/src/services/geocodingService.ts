import axios from 'axios';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBx08QRYY528BX0CuDgrSH9lAdIZ0BYAAs';

const reverseGeocode = async (
  latitude: number,
  longitude: number,
): Promise<string> => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`,
    );
    const address = response.data.results[0]?.formatted_address;
    return address || 'Address not found';
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching address');
  }
};

export { reverseGeocode };
  

// const handleGetCurrentLocation = () => {
//   Geolocation.getCurrentPosition(
//     async position => {
//       try {
//         const {latitude, longitude} = position.coords;
//         setLoading(true);
//         const currPosition = await reverseGeocode(latitude, longitude);
//         setAddress(currPosition);
//         console.log(currPosition);
//       } catch (error) {
//         // Type checking for the error in the try...catch block
//         if (error instanceof Error) {
//           console.log(error);
//           Alert.alert('Error', error.message);
//         } else {
//           Alert.alert('Error', 'An unknown error occurred');
//         }
//       } finally {
//         setLoading(false);
//       }
//     },
//     error => {
//       // The error here is from the Geolocation API and is not typed as 'unknown'
//       console.log(error);
//       Alert.alert('Error', 'Failed to get current location');
//     },
//     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//   );
// };
