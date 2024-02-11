import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import Button from '../../components/Button/Button';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import {reverseGeocode} from '../../services/geocodingService';
import axios from 'axios';
import {GOOGLE_MAPS_API_KEY} from '@env';
import styles from './styles';
navigator.geolocation = require('@react-native-community/geolocation');
import { useNavigation } from "@react-navigation/native";

const AddLocationScreen = () => {
  const [address, setAddress] = useState('');
  const [label, setLabel] = useState('');
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleAddLocation = () => {
    if (!address) {
      return;
    }
    // Post address and label to localhost:3000/locations
    console.log('address', address);
    if (address) {
      setLoading(true);
      axios
        .post('http://localhost:3000/locations', {
          address,
          label,
        })
        .then(() => {
          setLoading(false);
          navigation.navigate('Locations');
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter a Label</Text>
      <TextInput
        placeholder="Enter Label (optional)"
        value={label}
        onChangeText={setLabel}
        style={styles.textInputContainer}
      />
      <Text>Enter your location or use your current location</Text>
      <View style={styles.autocompleteContainer}>
        <GooglePlacesAutocomplete
          placeholder="Enter Location Google places"
          onPress={(data, details = null) => {
            console.log('data', data);
            setAddress(data.description);
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          currentLocation={true}
          currentLocationLabel="Current location"
          styles={{
            container: styles.innerContainer,
            listView: styles.listView,
            textInputContainer: styles.textInputContainer,
            textInput: styles.textInput,
          }}
          enablePoweredByContainer={false}
        />
      </View>
      <Text>{address}</Text>
      <Button
        title="Add Location"
        onPress={handleAddLocation}
        isLoading={isLoading}
        disabled={!address}
      />
    </View>
  );
};

export default AddLocationScreen;
