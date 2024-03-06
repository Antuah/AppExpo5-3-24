import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

export default function FlatListImg(props) {
  const { image, description } = props;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Imagen", {
      image,
      description,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.listRestaurant}>
        <Image
          source={{
            uri: `${image}`,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listRestaurant: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 5,
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 10,
  },
});
