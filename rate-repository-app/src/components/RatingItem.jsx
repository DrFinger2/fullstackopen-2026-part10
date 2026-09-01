import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
  },
});

const formatCount = (count) => {
  if (count >= 1_000_000_000_000) {
    return parseFloat((count / 1_000_000_000_000).toFixed(2)) + "T";
  }
  if (count >= 1_000_000_000) {
    return parseFloat((count / 1_000_000_000).toFixed(2)) + "B";
  }
  if (count >= 1_000_000) {
    return parseFloat((count / 1_000_000).toFixed(2)) + "M";
  }
  if (count >= 1000) {
    return parseFloat((count / 1000).toFixed(2)) + "k";
  }
  return String(count);
};

const RatingItem = ({ text, count }) => {
  const formattedCount = formatCount(count);

  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{formattedCount}</Text>
      <Text color="textSecondary">{text}</Text>
    </View>
  );
};

export default RatingItem;
