import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function AddItem({ addItem }) {
  const [text, setText] = useState("");
  const onchange = (textValue) => setText(textValue);

  const addItemHandler = async () => {
    await addItem(text);
    setText("");
  };

  return (
    <View style={styles.header}>
      <TextInput
        clearButtonMode="always"
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onchange}
      />
      <TouchableOpacity style={styles.btn} onPress={addItemHandler}>
        <FontAwesome style={styles.plus} name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    borderWidth: 1,
  },
  btn: {
    backgroundColor: "limegreen",
    padding: 6,
    margin: 5,
    height: 50,
    marginHorizontal: 140,
    justifyContent: "center",
    borderRadius: 8,
  },
  plus: {
    textAlign: "center",
    fontSize: 25,
  },
});
