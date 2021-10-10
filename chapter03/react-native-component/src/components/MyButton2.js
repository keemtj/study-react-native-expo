import React from "react";
import { Pressable, Text } from "react-native";

const MyButton2 = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "#3498db",
          padding: 16,
          margin: 10,
          borderRadius: 8,
        },
      ]}
      onPress={() => alert("clicked My Pressable BUTTON!")}
    >
      <Text style={{ color: "white", fontSize: 20 }}>Pressable Button</Text>
    </Pressable>
  );
};

export default MyButton2;
