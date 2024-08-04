import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function WelcomeScreen() {
  const [firstname, onChangeFirstName] = useState("");

  return (
    <ScrollView indicatorStyle="white" style={{ flex: 1 }}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.body}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        style={styles.textInput}
        value={firstname}
        onChangeText={onChangeFirstName}
        placeholder={"First Name"}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#EDEFEE",
    fontSize: 30,
    padding: 40,
    textAlign: "center",
  },
  body: {
    color: "#EDEFEE",
    fontSize: 24,
    padding: 20,
    textAlign: "center",
    marginVertical: 8,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
