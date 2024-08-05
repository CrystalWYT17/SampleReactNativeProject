import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import LoginScreen from "@/components/LoginScreen";
import MenuItems from "@/components/MenuItems";
import MenuItemsFlatList from "@/components/MenuItemsFlatList";
import Welcome from "@/components/Welcome";
import WelcomeColorScheme from "@/components/WelcomeColorScheme";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Image, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Instantiate Stack
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function LogoTitle(props: any) {
  return (
    <Image
      source={require("../assets/images/LittleLemonLogo.png")}
      style={{
        height: 40,
        width: 300,
        resizeMode: "contain",
        alignSelf: "center",
      }}
    />
  );
}

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
    // <NavigationContainer independent={true}>
    //   <View style={styles.container}>
    //     <LittleLemonHeader />
    //     <Stack.Navigator
    //       initialRouteName="Login"
    //       screenOptions={{
    //         headerStyle: { backgroundColor: "#333333" },
    //         headerTintColor: "fff",
    //         headerTitleStyle: { fontWeight: "bold" },
    //       }}
    //     >
    //       <Stack.Screen
    //         options={{
    //           title: "Home",
    //           headerTitle: (props) => <LogoTitle {...props} />,
    //         }}
    //         name="Welcome"
    //         component={WelcomeScreen}
    //       />
    //       <Stack.Screen name="Menu" component={MenuItemsFlatList} />
    //       <Stack.Screen name="Login" component={LoginScreen} />
    //     </Stack.Navigator>
    //   </View>
    //   <View style={styles.footer}>
    //     <Footer />
    //   </View>
    // </NavigationContainer>
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }: any) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName: any;
            if (route.name === "Welcome") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            } else if (route.name === "Menu") {
              iconName = "list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuItemsFlatList} />
      </Tab.Navigator>
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
