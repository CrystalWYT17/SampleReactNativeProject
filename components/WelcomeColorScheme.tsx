import { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";

// I give credits to Little Lemon Restaurant for photos
export default function WelcomeColorScheme() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <Image
        style={styles.logo}
        source={require("../assets/images/littleLemon.png")}
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.title}>Color Scheme: {colorScheme}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: { flex: 1, justifyContent: "center", height: 400, width: 350 },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
  },
});
