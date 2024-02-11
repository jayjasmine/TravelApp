import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {reverseGeocode} from '../services/geocodingService';

const AddLocationScreen = () => {
  const [location, setLocation] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState('');

  const fetchCulturalInsights = async (loc: string) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/cultural-insights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({location: loc}),
      });
      const jsonResponse = await response.json();
      const formattedResponse = jsonResponse.insights;
      setResponseText(formattedResponse);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to fetch cultural insights');
    } finally {
      setLoading(false);
    }
  };

  const handleGetCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      async position => {
        try {
          const {latitude, longitude} = position.coords;
          const address = await reverseGeocode(latitude, longitude);
          fetchCulturalInsights(address);
        } catch (error) {
          // Type checking for the error in the try...catch block
          if (error instanceof Error) {
            console.log(error);
            Alert.alert('Error', error.message);
          } else {
            Alert.alert('Error', 'An unknown error occurred');
          }
        }
      },
      error => {
        // The error here is from the Geolocation API and is not typed as 'unknown'
        console.log(error);
        Alert.alert('Error', 'Failed to get current location');
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 150,
        }}>
      <Text>Enter your location or use your current location</Text>
      <TextInput
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          marginBottom: 10,
        }}
      />
      <Button
        title="Get Insights"
        onPress={() => fetchCulturalInsights(location)}
      />
      <Button title="Use Current Location" onPress={handleGetCurrentLocation} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
          <ScrollView style={{ marginTop: 20, marginBottom: 100, paddingHorizontal: 10 }}>
            <View style={{paddingHorizontal: 20}}>
              <Text style={{ fontFamily: 'monospace', lineHeight: 20 }}>
                {responseText}
              </Text>
            </View>
        </ScrollView>
      )}
    </View>
    </ScrollView>
  );
};

export default AddLocationScreen;
