import React from "react";
import { View, Text, Image } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../../../assets/Venecia.png")}
                style={styles.img}
            />
            <View style={styles.row}>
                <Text style={styles.info}>15</Text>
                <Image
                    source={require("../../../../../assets/me-gusta.png")}
                    style={styles.imginf}
                />
                <Image
                    source={require("../../../../../assets/enviar-mensaje.png")}
                    style={styles.final}
                />
                <Image
                    source={require("../../../../../assets/adelante.png")}
                    style={styles.final}
                />
            </View>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: "start",
        margin: 8,
    },
    img: {
        margin: 10,
        marginTop: 50,
        marginBottom: 20,
        width: "95%",
        height: "60%",
    },
    info: {
        fontSize: 15,
        margin: 10,
        marginTop: -10,
    },
    imginf: {
        marginTop: -20,
        width: 20,
        height: 20,
    },
    final: {
        marginTop: -20,
        width: 20,
        height: 20,
        marginLeft: 260,
        marginRight: -250,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end", 
    },
};
