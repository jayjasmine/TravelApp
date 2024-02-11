import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from '../styles';

const LocationImage = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <FastImage
      style={styles.squareBackground}
      source={{
        uri: location.iconUrl,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.cover}
      onLoadStart={() => setIsLoading(true)}
      onLoadEnd={() => setIsLoading(false)}
    >
      {isLoading && <ActivityIndicator />}
    </FastImage>
  );
};

export default LocationImage;
