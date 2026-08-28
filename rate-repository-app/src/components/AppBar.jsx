import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.appBarBackground,
    gap: 20,
    paddingLeft: 20,
  },
});

const AppBar = () => {
  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <AppBarTab onPress={handlePress}>Repositories</AppBarTab>
    </View>
  );
};

export default AppBar;
