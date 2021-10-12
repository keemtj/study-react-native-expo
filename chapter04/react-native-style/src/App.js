import React from "react";
import { View } from "react-native";
import { Contents, Footer, Header } from "./components/Layout";
import { viewStyles } from "./styles";

const App = () => {
  return (
    <View style={viewStyles.container}>
      <Header />
      <Contents />
      <Footer />
    </View>
  );
};

export default App;
