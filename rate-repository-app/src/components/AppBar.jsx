import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { useNavigate } from "react-router-native";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingLeft: 20,
  },
  scrollView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        <AppBarTab onPress={() => navigate("/")}>Repositories</AppBarTab>
        <AppBarTab onPress={() => navigate("/signin")}>Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
