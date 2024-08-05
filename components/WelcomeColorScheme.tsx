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
  useWindowDimensions,
} from "react-native";

// I give credits to Little Lemon Restaurant for photos
export default function WelcomeColorScheme() {
  const colorScheme = useColorScheme();
  const { width, height, fontScale } = useWindowDimensions();

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
      {/* <Text style={styles.titleColorScheme}>Color Scheme: {colorScheme}</Text> */}
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Text style={styles.regular}>Window Dimensions</Text>
      <Text style={styles.regular}>Height: {height}</Text>
      <Text style={styles.regular}>Width: {width}</Text>
      <Text style={styles.regular}>Font scale: {fontScale}</Text>
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
  titleColorScheme: {
    textAlign: "center",
    fontSize: 18,
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  regular: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
