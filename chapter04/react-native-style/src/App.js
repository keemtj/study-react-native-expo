import React from "react";
import { View } from "react-native";
import { viewStyles } from "./styles";
import ShadowBox from "./components/ShadowBox";

const App = () => {
  return (
    <View style={viewStyles.container}>
      <ShadowBox />
    </View>
  );
};

export default App;
