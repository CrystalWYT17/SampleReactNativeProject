import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {!loggedIn ? (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder="Email"
            placeholderTextColor="grey"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
          />
          <Pressable
            style={styles.button}
            onPress={() => {
              // setLoggedIn(true);
              navigation.navigate("Welcome");
            }}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </>
      ) : (
        <Text style={styles.regularText}>You are logged in!</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "white",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
});
