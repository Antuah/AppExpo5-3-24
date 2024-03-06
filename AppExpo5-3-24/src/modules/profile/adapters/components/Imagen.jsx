import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Imagen({ route }) {
  const { image, description } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${image}`,
        }}
        style={styles.image}
      />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
  },
});

