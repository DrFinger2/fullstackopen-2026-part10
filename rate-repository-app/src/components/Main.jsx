import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import theme from "../theme";
import useUsers from "../hooks/useUsers";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: theme.colors.backgroundSecondary,
  },
});

const Main = () => {
  const { data, loading } = useUsers();

  if (!loading) {
    console.log("----DATA----", data);
  }

  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </View>
  );
};

export default Main;
