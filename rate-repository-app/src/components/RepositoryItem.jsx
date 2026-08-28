import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.background,
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  userContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    gap: 10,
    marginRight: 5,
    paddingBottom: 5,
  },

  userInfoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    flexShrink: 1,
    gap: 3,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: theme.border.radius,
  },

  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.border.radius,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "white",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        <View style={styles.userInfoContainer}>
          <Text fontWeight="bold" fontSize="subheading">
            {item.fullName}
          </Text>
          <Text style={styles.language}> {item.language}</Text>
          <Text color="textSecondary">Description: {item.description}</Text>
        </View>
      </View>

      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
    </View>
  );
};

export default RepositoryItem;
