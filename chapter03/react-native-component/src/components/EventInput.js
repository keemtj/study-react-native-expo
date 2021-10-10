import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const EventInput = () => {
  const [text, setText] = useState("");
  const _onChange = (e) => setText(e.nativeEvent.text);
  // const _onChangeText = (text) => setText(text);

  return (
    <View>
      <Text style={styles.text}>text: {text}</Text>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Enter text"
        multiline={false}
        onChange={_onChange}
        // onChangeText={_onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 300,
    padding: 10,
    fontSize: 20,
  },
  text: {
    margin: 10,
    fontSize: 20,
  },
});

export default EventInput;
