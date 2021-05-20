import React, { useState } from "react";
import { View, FlatList, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";

import uuid from "uuid-random";

import ListItem from "./ListItem";
import Header from "./Header";
import AddItem from "./Additem";

// To-Do 
  //100%
    // Add an edit button for changing the item name
    // LocalStorage for remembering lists
  // Maybe
    // Add sub categories (Healthy, Vegan etc)
    // Add Pictures of foods
    // Suggest 3 meals at, click plus to choose one, could choose all if you want

export default function ShoppingList({ history }) {
  const [items, setitems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setitems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("No item =/", "Please enter an item into the text box", [
        { text: "Ok" },
      ]);
    } else {
      setitems((prevItems) => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
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
    height: "100%",
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
