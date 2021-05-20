import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import uuid from "uuid-random";

import ListItem from "./ListItem";
import Header from "./Header";
import AddItem from "./Additem";

// To-Do
//100%
  // Async problems updating AsyncStorage
  // Add an edit button for changing the item name
  // LocalStorage for remembering lists
// Maybe
// Add sub categories (Healthy, Vegan etc)
// Add Pictures of foods
// Suggest 3 meals at, click plus to choose one, could choose all if you want

export default function ShoppingList({ history }) {
  /* const [items, setitems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Juice" },
  ]); */
  const [items, setitems] = useState();

  useEffect(() => {
    firstLoadData();
  }, []);

  const deleteItem = (id) => {
    setitems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = async (text) => {
    if (!text) {
      Alert.alert("No item =/", "Please enter an item into the text box", [
        { text: "Ok" },
      ]);
    } else {
      setitems((prevItems) => {
        return [{ id: uuid(), text }, ...prevItems];
      });
      //await updateItems(text)
      saveData();
    }
    // await AsyncStorage.setItem("Items", JSON.stringify(items))
  };

  const updateItems = async (text) => {
    await setitems((prevItems) => {
      return [{ id: uuid(), text }, ...prevItems];
    });
  };

  const saveData = async () => {
    try {
      console.log(JSON.stringify(items));
      //await AsyncStorage.setItem("Name", "Mikey")

      /* let data = [
        { id: uuid(), text: "Milk" },
        { id: uuid(), text: "Eggs" },
        { id: uuid(), text: "Bread" },
        { id: uuid(), text: "Juice" },
      ] */

      /*  let data = await getData()
      console.log(data, " <<< ")
      data.push({id: "cat", text: "Please Work"})
      console.log(data, " >>> ")
      //console.log(JSON.stringify(data), " >>> ") */

      /*  let data = JSON.stringify(items)
      console.log(data) */

      await AsyncStorage.setItem("Items", JSON.stringify(items));

      // let work = JSON.stringify(data)
      //let work = JSON.parse(data);
      //await AsyncStorage.setItem("Items", work);
    } catch (err) {
      console.log("Error - ", err);
    }
  };

  const firstLoadData = async () => {
    let value;
    try {
      value = await AsyncStorage.getItem("Items");

      if (value !== null) {
        // console.log(value);
        setitems(JSON.parse(value));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    let value;
    try {
      value = await AsyncStorage.getItem("Items");

      if (value !== null) {
        // console.log(value);
        return JSON.parse(value);
      }
    } catch (err) {
      console.log(err);
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
      {/* <Button title="Save" onPress={saveData} />
      <Button title="Print" onPress={firstLoadData} /> */}
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
