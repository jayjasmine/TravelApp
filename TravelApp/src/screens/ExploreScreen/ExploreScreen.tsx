import React from 'react';
import {View, ScrollView, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ExploreScreen = ({ route }) => {
  const navigation = useNavigation();
  const {locationId, locationName} = route.params;
  const options = [
    {
      optionName: 'Eat',
      link: 'Eat',
    },
    {
      optionName: 'Drink',
    },
    {
      optionName: 'Play',
    },
    {
      optionName: 'Shop',
    },
    {
      optionName: 'Stay',
    },
    {
      optionName: 'Events',
    },
    {
      optionName: 'Historical Insights',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text>Explore {locationName}</Text>
      </View>
      <View style={styles.body}>
        {options.map((option, i) => (
          <Pressable key={i} style={styles.option} onPress={() => navigation.navigate(option.link)}>
            <Text>{option.optionName}</Text>
          </Pressable>
        ))}
        <View style={styles.optionBlank} />
        <View style={styles.optionBlank} />
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;
