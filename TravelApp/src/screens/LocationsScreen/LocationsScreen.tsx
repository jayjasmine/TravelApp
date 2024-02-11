import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import styles from './styles';
import axios from 'axios';
import Toolbar from '../../components/Toolbar/Toolbar';
import FastImage from 'react-native-fast-image';
import LocationImage from './LocationImage/LocationImage';
import { useNavigation } from '@react-navigation/native';

const LocationsScreen = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      axios.get('http://localhost:3000/locations').then(response => {
        // console.log('Response data:', response.data);
        setLocations(response.data.locations);
        setLoading(false);
      });
    }, []),
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.locationsContainer}>
          {locations.length === 0 ? (
            <Text>No locations found</Text>
          ) : (
            locations.map((location, index) => (
              <Pressable key={index} style={styles.square} onPress={() => navigation.navigate('Explore', {
                locationId: location._id,
                locationName: location.label ? location.label : location.address,
                  })
                }>
                <LocationImage location={location} />
                <Text style={styles.addressText}>
                  {location.label ? location.label : location.address}
                </Text>
              </Pressable>
            ))
          )}
        </View>
      </ScrollView>
      <Toolbar />
    </View>
  );
};

export default LocationsScreen;
