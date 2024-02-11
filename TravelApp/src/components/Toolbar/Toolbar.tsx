import React from "react";
import { View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


import styles from './styles';

const Toolbar = () => {
  const navigation = useNavigation();

  const handleAddLocation = () => {
    navigation.navigate('Add Location');
  };

  return (
    <View style={styles.toolbar}>
      <Pressable style={styles.addButton} onPress={handleAddLocation}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default Toolbar;
