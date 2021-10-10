import React from "react";
import {
  StyleSheet,
  View,
  //Text,
  //Button
} from "react-native";
// import MyButton from "./components/MyButton";
// import MyButton2 from "./components/MyButton2";
// import Counter from "./components/Counter";
// import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";

const App = () => {
  return (
    <View style={styles.view}>
      {/* <Text style={{ fontSize: 20, marginBottom: 10 }}>Button component</Text>
      <Button title="BUTTON" onPress={() => alert("clicked button!")} />
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        MyButton components
      </Text>
      <MyButton
        title="Touchable Button"
        onPress={() => alert("Custom Button")}
      />
      <MyButton2 />
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Props</Text>
      <MyButton title="MyButton1 title" onPress={() => alert("props")} />
      <MyButton title="MyButton1 title2" onPress={() => alert("children")}>
        Children Props
      </MyButton> */}
      {/* <Counter /> */}
      {/* <EventButton /> */}
      <EventInput />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
