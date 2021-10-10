import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const EventButton = () => {
  const _onPressIn = () => console.log("PressIn");
  const _onPressOut = () => console.log("PressOut");
  const _onPress = () => console.log("Press");
  const _onLongPress = () => console.log("LongPress");

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      onPress={_onPress}
      onLongPress={_onLongPress}
      delayLongPress={3000}
    >
      <Text style={styles.text}>Press</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: "#f1c40f",
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default EventButton;
