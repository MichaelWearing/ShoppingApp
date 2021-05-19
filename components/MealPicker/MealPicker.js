import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function MealPicker({ history }) {
  return (
    <View style={styles.container}>
      <Text>Meal Picker!</Text>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => history.push("/")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height: "50%",
  },
  homeButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "dodgerblue",
    color: "white",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
