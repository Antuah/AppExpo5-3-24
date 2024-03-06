import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar } from "@rneui/themed";
import PhotoProfile from "../components/PhotoProfile";
import FlatListImg from "../components/FlatListImg";

export default function Profile() {
  return (
    <View style={styles.container}>  
      <View style={styles.profileContainer}>  
        <Avatar
          size={64}
          rounded
          icon={{ name: "apartment", type: "material", color: "#009688" }}
          containerStyle={{
            borderColor: "grey",
            borderStyle: "solid",
            borderWidth: 1,
            padding: 10,
            marginLeft: 20,
            marginTop: 20,
          }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>José Antonio Díaz García</Text>
          <Text style={styles.email}>20223TN047@utez.edu.mx</Text>
        </View>
      </View>
      <View style={styles.imgArray}>  
        <PhotoProfile />
        <FlatListImg />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  // Main container styles
    flex: 1,  // Take up the entire screen
  },
  profileContainer: {  // Styles for profile info section
    flexDirection: "row",  // Arrange avatar and info side-by-side
    alignItems: "center",   // Vertically align content within profileContainer
  },
  infoContainer: {  // Styles for name and email texts
    marginLeft: 20,  // Align info with the avatar
  },
  imgArray: {  // Styles for image section (unchanged)
    marginTop: 20,
    marginLeft: 20,
  },
});
