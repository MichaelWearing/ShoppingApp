import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

import Welcome from "./components/Welcome";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import MealPicker from "./components/MealPicker/MealPicker"

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/ShoppingList" component={ShoppingList} />
          <Route exact path="/MealPicker" component={MealPicker} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } // Needed 100% height before, if broken change back to no styles
});
