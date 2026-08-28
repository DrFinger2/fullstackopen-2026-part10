import React from "react";
import { View, Image, StyleSheet } from "react-native";
import RatingItem from "./RatingItem";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 10,
    backgroundColor: theme.colors.background,
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  userRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    gap: 10,
    marginRight: 5,
    paddingBottom: 20,
  },

  userContent: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    flexShrink: 1,
    gap: 5,
  },

  userDetails: {
    minHeight: "46",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 4,
  },

  ratingContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: theme.border.radius,
  },

  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.border.radius,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: "white",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userRow}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        <View style={styles.userContent}>
          <View style={styles.userDetails}>
            <Text fontWeight="bold" fontSize="subheading">
              {item.fullName}
            </Text>

            <Text color="textSecondary">{item.description}</Text>
          </View>
          <Text style={styles.language}> {item.language}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <RatingItem count={item.stargazersCount} text="Stars" />
        <RatingItem count={item.forksCount} text="forks" />
        <RatingItem count={item.ratingAverage} text="Rating" />
        <RatingItem count={item.reviewCount} text="Reviews" />
      </View>
    </View>
  );
};

export default RepositoryItem;
