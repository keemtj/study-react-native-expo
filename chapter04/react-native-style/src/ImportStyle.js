import React from "react";
import { View, Text } from "react-native";
import { viewStyles, textStyles } from "./styles";

const ImportStyle = () => {
  return (
    <View style={viewStyles.container}>
      <Text style={[textStyles.text, { color: "green" }]}>
        Import Style - text
      </Text>
      <Text style={[textStyles.text, textStyles.error]}>
        Import Style - error
      </Text>
    </View>
  );
};

export default ImportStyle;
