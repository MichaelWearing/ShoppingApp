import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";

import uuid from "uuid-random";

import Header from "./Header";
import RandomMeal from "./RandomMeal";

// To-Do
//100%
// Maybe
// Create button to show all meals
// Make it so you cannot get the same meal twice

export default function MealPicker({ history }) {
  const [items, setitems] = useState([
    { id: uuid(), text: "Pizza" },
    { id: uuid(), text: "Burgers" },
    { id: uuid(), text: "Tomato Soup" },
    { id: uuid(), text: "Pasta Salad" },
  ]);

  const [randomMeal, setRandomMeal] = useState(">>> Random Meal <<<");
  const [Index, setIndex] = useState();

  const showMeal = () => {
    let newIndex = false
    let index
    while (!newIndex) {
      index = Math.floor(Math.random() * items.length);
      if (index !== Index) {
        newIndex = true
      }
    }
    setIndex(index);
    setRandomMeal(items[index].text);
  };

  return (
    <View style={styles.container}>
      <Header />
      <RandomMeal meal={randomMeal} />
      <TouchableOpacity style={styles.randomMealButton} onPress={showMeal}>
        <Text style={styles.newMealButtonText}>Next Meal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.showAllMealsButton}
        onPress={() => history.push("/ShowAllMeals")}
      >
        <Text style={styles.buttonText}>Show All Meals</Text>
      </TouchableOpacity>
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
    paddingTop: 25,
    flex: 1,
  },
  randomMealButton: {
    backgroundColor: "#e9f0f0",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: 170,
    height: 170,
    borderRadius: 100,
    borderWidth: 2,
    //backgroundColor: "dodgerblue",
    color: "dodgerblue",
    marginTop: 10,
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

    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  showAllMealsButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "dodgerblue",
    color: "white",
    marginTop: 10,

    position: "absolute",
    bottom: 52,
    width: "100%",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  newMealButtonText: {
    fontSize: 20,
    color: "dodgerblue",
  },
});
