import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// I give credits to Little Lemon Restaurant for photos
export default function Welcome() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/littleLemon.png")}
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../assets/images/picture1.jpg")}
        accessible={true}
        accessibilityLabel="Picture 1"
      />
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../assets/images/picture2.jpg")}
        accessible={true}
        accessibilityLabel="Picture 2"
      />
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../assets/images/picture3.jpg")}
        accessible={true}
        accessibilityLabel="Picture 3"
      />
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../assets/images/picture4.jpg")}
        accessible={true}
        accessibilityLabel="Picture 4"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
  },
});
