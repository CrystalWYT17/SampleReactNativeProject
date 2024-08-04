import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All right reserved by Little Lemon, 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
  },
  text: {
    padding: 20,
    fontSize: 15,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
});
