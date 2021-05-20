import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

// To-Do 
  //100%
  // Maybe
    // Change background images - https://unsplash.com/photos/NFoerQuvzrs
                                //https://unsplash.com/photos/ncKxCn5SI3A
                                //https://unsplash.com/photos/e4EmPx91Aj4
    // Make buttons extend entire screen, check DoneWithIt


export default function Welcome({ history }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <FontAwesome name="shopping-basket" size={200} color="black" />
      <TouchableOpacity
        style={styles.mealButton}
        onPress={() => history.push("/MealPicker")}
      >
        <Text style={styles.buttonText}>Meal Picker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shoppingButton}
        onPress={() => history.push("/ShoppingList")}
      >
        <Text style={styles.buttonText}>Shopping List</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    marginTop: 100,
    marginBottom: 20,
    fontSize: 40,
  },
  mealButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 4,
    backgroundColor: "dodgerblue",
    color: "white",
    marginTop: 60,
    marginBottom: 20,
  },
  shoppingButton: {
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
  topButton: {
    marginBottom: 100,
    paddingTop: 100,
    fontSize: 100,
  },
  bottomButton: {
    marginBottom: 100,
    paddingTop: 100,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
