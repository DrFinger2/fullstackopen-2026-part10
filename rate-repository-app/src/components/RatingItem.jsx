import { View, StyleSheet } from "react-native";
import Text from "./Text";

function formatCount(count) {
  if (count >= 1000) {
    return parseFloat((count / 1000).toFixed(2)) + "k";
  }
  return String(count);
}

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 1,
    alignItems: "center",
  },
});

const RatingItem = ({ text, count }) => {
  return (
    <View style={style.container}>
      <Text fontWeight={"bold"}>{formatCount(count)}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default RatingItem;
