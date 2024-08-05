import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function WelcomeScreen() {
  const [firstname, onChangeFirstName] = useState("");

  return (
    <ScrollView indicatorStyle="white" style={{ flex: 1 }}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.logo}
          source={require("../assets/images/LittleLemonLogo.png")}
          accessible={true}
          accessibilityLabel="Logo"
        />
        <Text style={styles.title}>Little Lemon</Text>
      </View>

      <Text style={styles.body}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        style={styles.textInput}
        value={firstname}
        onChangeText={onChangeFirstName}
        placeholder="First Name"
        placeholderTextColor="grey"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  title: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: "#EDEFEE",
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
  logo: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
});
