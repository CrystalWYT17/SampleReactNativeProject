import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle="white" style={{ flex: 1 }}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.body}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#EDEFEE",
    fontSize: 50,
    padding: 40,
    textAlign: "center",
  },
  body: {
    color: "#EDEFEE",
    fontSize: 45,
    padding: 20,
    textAlign: "center",
    marginVertical: 8,
  },
});
