import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";

export default function WelcomeScreen({ navigation }: any) {
  const [firstname, onChangeFirstName] = useState("");
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      indicatorStyle="white"
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <View style={styles.headerWrapper}>
        <Image
          style={styles.logo}
          source={require("../assets/images/LittleLemonLogo.png")}
          accessible={true}
          accessibilityLabel="Logo"
          resizeMode="cover"
        />
        <Text
          style={[
            styles.title,
            colorScheme === "light" ? { color: "black" } : { color: "#fff" },
          ]}
        >
          Little Lemon
        </Text>
      </View>

      <Text
        style={[
          styles.body,
          colorScheme === "light" ? { color: "black" } : { color: "#fff" },
        ]}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <Pressable onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.button}>View menu</Text>
      </Pressable>
      {/* <TextInput
        style={styles.textInput}
        value={firstname}
        onChangeText={onChangeFirstName}
        placeholder="First Name"
        placeholderTextColor="grey"
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
    textAlign: "center",
  },
  body: {
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
    borderRadius: 20,
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
});
