import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 15,
  },
  tabText: {
    color: theme.colors.appBarText,
    fontSize: 18,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ onPress, children }) => {
  return (
    <Pressable onPress={onPress} style={styles.tab}>
      <Text style={styles.tabText}>{children}</Text>
    </Pressable>
  );
};

export default AppBarTab;
