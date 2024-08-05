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

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/* <MenuItems /> */}
        {/* <MenuItemsFlatList /> */}
        {/* <FeedbackForm /> */}
        {/* <LoginScreen /> */}
        {/* <Welcome /> */}
        {/* <WelcomeColorScheme /> */}
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </>
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
