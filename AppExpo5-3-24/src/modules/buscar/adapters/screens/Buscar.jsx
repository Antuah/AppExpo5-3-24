import React from "react";
import { View, Text, TextInput } from "react-native";
import { Image } from "react-native";

export default function Buscar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Ingresa tu búsqueda" />
      <View style={styles.row}>
        <Image
          source={require("../../../../../assets/Venecia.png")}
          style={styles.img}
        />
        <Image
          source={require("../../../../../assets/Toronto.jpg")}
          style={styles.img}
        />
        <Image
          source={require("../../../../../assets/Moscú.jpg")}
          style={styles.img}
        />
      </View>
      <View style={styles.row}>
        <Image
          source={require("../../../../../assets/Los_Angeles.jpg")}
          style={styles.img}
        />
        <Image
          source={require("../../../../../assets/Kioto.jpg")}
          style={styles.imgkiot}
        />
        <Image
          source={require("../../../../../assets/Paris.jpg")}
          style={styles.img}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  searchInput: {
    marginLeft: "10%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "80%",
    marginTop: 20,
    marginBottom: 40,
  },
  row: {
    marginTop: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  imgkiot: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
};
