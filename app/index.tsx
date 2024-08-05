import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import LoginScreen from "@/components/LoginScreen";
import MenuItems from "@/components/MenuItems";
import MenuItemsFlatList from "@/components/MenuItemsFlatList";
import Welcome from "@/components/Welcome";
import WelcomeColorScheme from "@/components/WelcomeColorScheme";
import WelcomeScreen from "@/components/WelcomeScreen";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Instantiate Stack
const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    // <>
    //   <View style={styles.container}>
    //     <LittleLemonHeader />
    //     <WelcomeScreen />
    //     {/* <MenuItems /> */}
    //     {/* <MenuItemsFlatList /> */}
    //     {/* <FeedbackForm /> */}
    //     {/* <LoginScreen /> */}
    //     {/* <Welcome /> */}
    //     {/* <WelcomeColorScheme /> */}
    //   </View>
    //   <View style={styles.footer}>
    //     <Footer />
    //   </View>
    // </>
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
        >
          <Stack.Screen
            options={{ title: "Home" }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen name="Menu" component={MenuItemsFlatList} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footer: {
    backgroundColor: "#333333",
  },
});
