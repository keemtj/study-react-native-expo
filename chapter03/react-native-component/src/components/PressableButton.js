import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const PressableButton = (props) => {
  return (
    <Pressable
      style={styles.pressable}
      onPressIn={() => console.log("press in")}
      onPressOut={() => console.log("press out")}
      onPress={() => console.log("press")}
      onLongPress={() => console.log("long press")}
      delayLongPress={3000}
      pressRetentionOffset={{
        bottom: 50,
        left: 50,
        right: 50,
        top: 50,
      }}
      hitSlop={50}
    >
      <Text>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    padding: 10,
    backgroundColor: "#1abc9c",
  },
  text: {
    padding: 10,
    fontSize: 20,
  },
});

export default PressableButton;
