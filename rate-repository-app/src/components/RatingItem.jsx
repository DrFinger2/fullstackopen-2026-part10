import { View, StyleSheet } from "react-native";
import Text from "./Text";

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 1,
    alignItems: "center",
  },
});

const RatingItem = ({ text, count }) => {
  let countStr = String(count);

  if (count >= 1_000_000_000_000) {
    countStr = parseFloat((count / 1_000_000_000_000).toFixed(2)) + "T";
  } else if (count >= 1_000_000_000) {
    countStr = parseFloat((count / 1_000_000_000).toFixed(2)) + "B";
  } else if (count >= 1_000_000) {
    countStr = parseFloat((count / 1_000_000).toFixed(2)) + "M";
  } else if (count >= 1000) {
    countStr = parseFloat((count / 1000).toFixed(2)) + "k";
  }

  return (
    <View style={style.container}>
      <Text fontWeight={"bold"}>{countStr}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default RatingItem;
