import FlatListImages from "./FlatListImg";
import { FlatList, StyleSheet } from "react-native";

export default function PhotoProfile() {
  const arry = [
    {
      imagen:
        "https://media.admagazine.com/photos/6272a4f879a42d127518492f/16:9/w_2560%2Cc_limit/Puente%2520Rialto%2520Venecia.jpg",
      descripcion: "Venecia",
    },
    {
      imagen:
        "https://www.vivaplaya.net/viva/wp-content/uploads/2022/04/amanecer-playa-del-carmen-viva-playa.jpg",
      descripcion: "Foto de la ciudad de México",
    },
    {
      imagen:
        "https://www.vivaplaya.net/viva/wp-content/uploads/2022/04/amanecer-playa-del-carmen-viva-playa.jpg",
      descripcion: "Foto de la muralla china",
    },
    {
      imagen:
        "https://www.vivaplaya.net/viva/wp-content/uploads/2022/04/amanecer-playa-del-carmen-viva-playa.jpg",
      descripcion: "Foto de la playa",
    },
    {
      imagen:
        "https://www.vivaplaya.net/viva/wp-content/uploads/2022/04/amanecer-playa-del-carmen-viva-playa.jpg",
      descripcion: "Foto de la ciudad de México",
    },
    {
      imagen:
        "https://www.vivaplaya.net/viva/wp-content/uploads/2022/04/amanecer-playa-del-carmen-viva-playa.jpg",
      descripcion: "Foto de la muralla china",
    },
  ];

  return (
    <FlatList
      data={arry}
      renderItem={({ item }) => (
        <FlatListImages
          image={item.imagen}
          description={item.descripcion}
          style={{ flex: 1 }}
        />
      )}
      numColumns={3}
    />
  );
}

const styles = StyleSheet.create({});
