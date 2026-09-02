import { View, ScrollView, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import Constants from "expo-constants";

import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useUser from "../hooks/useUser";
import useSignOut from "../hooks/useSignOut";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 20,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});

const AppBar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const signOut = useSignOut();

  const handleRepositories = () => {
    navigate("/");
  };
  const handleSignIn = () => {
    navigate("/signin");
  };
  const handleSignOut = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        <AppBarTab onPress={handleRepositories}>Repositories</AppBarTab>
        {user ? (
          <AppBarTab onPress={handleSignOut}>Sign out</AppBarTab>
        ) : (
          <AppBarTab onPress={handleSignIn}>Sign in</AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
