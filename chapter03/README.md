<details>
<summary>λͺ©μ°¨</summary>

- π Chapter03. μ»΄ν¬λνΈ [π](#-Chapter03-μ»΄ν¬λνΈ)
  - π JSX [π](#-JSX)
    - π νλμ λΆλͺ¨ [π](#-νλμ-λΆλͺ¨)
    - π μλ°μ€ν¬λ¦½νΈ λ³μ [π](#-μλ°μ€ν¬λ¦½νΈ-λ³μ)
    - π μλ°μ€ν¬λ¦½νΈ μ‘°κ±΄λ¬Έ [π](#-μλ°μ€ν¬λ¦½νΈ-μ‘°κ±΄λ¬Έ)
    - π nullκ³Ό undefined [π](#-nullκ³Ό-undefined)
    - π μ£Όμ [π](#-μ£Όμ)
    - π μ€νμΌλ§ [π](#-μ€νμΌλ§)
  - π μ»΄ν¬λνΈ [π](#-μ»΄ν¬λνΈ)
    - π λ΄μ₯ μ»΄ν¬λνΈ [π](#-λ΄μ₯-μ»΄ν¬λνΈ)
    - π μ»€μ€ν μ»΄ν¬λνΈ [π](#-μ»€μ€ν-μ»΄ν¬λνΈ)
  - π propsμ state [π](#-propsμ-state)
    - π props [π](#-props)
    - π state [π](#-state)
  - π μ΄λ²€νΈ [π](#-μ΄λ²€νΈ)
    - π press μ΄λ²€νΈ [π](#-press-μ΄λ²€νΈ)
    - π change μ΄λ²€νΈ [π](#-change-μ΄λ²€νΈ)
    - π Pressable μ»΄ν¬λνΈ [π](#-Pressable-μ»΄ν¬λνΈ)

</details>

## π Chapter03 μ»΄ν¬λνΈ

- μ»΄ν¬λνΈλ μ¬μ¬μ©ν  μ μλ μ‘°λ¦½ λΈλ‘μΌλ‘ νλ©΄μ λνλλ UI μμλΌκ³  μκ°νλ©΄ μ΄ν΄νκΈ° μ½λ€.

  > **NOTE**  
  > μμ΄μ΄νλ μμ΄λ μ΅μ’ νλ©΄μ κ΅¬μ±λ  μ½νμΈ λ₯Ό κ°λ¨ν μμ½ν΄μ λ³΄μ¬μ£Όλ κ²μΌλ‘, κ²½μ°μ λ°λΌ μμ, μ΄λ―Έμ§ λ±μ μλ΅ν  λλ μλ€.

- expo νλ‘μ νΈλ₯Ό μμ±νλ€.

```shell
> expo init react-native-component
> code ./
```

### π JSX

- JSXλ κ°μ²΄ μμ±κ³Ό ν¨μ νΈμΆμ μν λ¬Έλ²μ  νΈμλ₯Ό μ κ³΅νκΈ° μν΄ λ§λ€μ΄μ§ νμ₯ κΈ°λ₯μΌλ‘ λ¦¬μ‘νΈ νλ‘μ νΈμμ μ¬μ©λλ€.
- κ°λμ±μ΄ λκ³  μμ±νκΈ° μ½λ€.
- XMLκ³Ό μ μ¬νλ€λ μ μμ μ€μ²©λ κ΅¬μ‘°λ₯Ό μ λνλΌ μ μλ€.

#### π νλμ λΆλͺ¨

- JSXμμλ μ¬λ¬ κ°μ μμλ₯Ό λ°ννλ κ²½μ° λ°λμ νλμ λ¬΄λ³΄λ‘ λλ¨Έμ§ μμλ€μ κ°μΈμ λ°νν΄μΌ νλ€.
- `View` μ»΄ν¬λνΈλ UIλ₯Ό κ΅¬μ±νλ κ°μ₯ κΈ°λ³Έμ μΈ μμλ‘ μΉ νλ‘κ·Έλλ°μμ `div`μ λΉμ·ν μ­ν μ νλ μ»΄ν¬λνΈμ΄λ€.
- `Fragment` λλ λ¨μΆ λ¬Έλ²μΈ `<></>`λ‘ κ°μΈμ€ μ μλ€.

```javascript
export default function App() {
  return (
    <View>
      <Text>React-native expo project!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

```javascript
export default function App() {
  return (
    <Fragment>
      <Text>React-native expo project!</Text>
      <StatusBar style="auto" />
    </Fragment>
  );
}
```

```javascript
export default function App() {
  return (
    <>
      <Text>React-native expo project!</Text>
      <StatusBar style="auto" />
    </>
  );
}
```

#### π μλ°μ€ν¬λ¦½νΈ λ³μ

- μλ°μ€ν¬λ¦½νΈμ λ³μλ₯Ό μ λ¬νμ¬ μ΄μ©ν  μ μλ€.

```javascript
export default function App() {
  const name = "Taejin";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My name is {name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

#### π μλ°μ€ν¬λ¦½νΈ μ‘°κ±΄λ¬Έ

##### π if μ‘°κ±΄λ¬Έ

- ifλ¬Έμ μ¦μμ€νν¨μ ννλ‘ μμ±ν΄μΌ νλ€.

```javascript
export default function App() {
  const name = "hoho";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {(() => {
          if (name === "jay") return "My name is jay";
          else if (name === "keemtj") return "My name is keemtj";
          else return "My name is React Native";
        })()}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

##### π μΌν­ μ°μ°μ

```javascript
export default function App() {
  const name = "Jay";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My name is {name === "jay" ? "Jay" : "React Native"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

##### π AND μ°μ°μμ OR μ°μ°μ

- JSXμμ `false`λ λ λλ§λμ§ μλλ€.

```javascript
export default function App() {
  const name = "Teddy";
  return (
    <View style={styles.container}>
      {name === "jay" && <Text style={styles.title}>My name is {name}</Text>}
      {name !== "jay" && (
        <Text style={styles.title}>My name is not Jay, I'm {name}</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
```

#### π nullκ³Ό undefined

- JSXλ nullμ νμ©νμ§λ§ undefinedλ μ€λ₯κ° λ°μν¨μ μ£Όμνλ€.

```javascript
export default function App() {
  return null;
}
```

```javascript
export default function App() {
  return undefined;
}
```

```shell
Error: App(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
```

#### π μ£Όμ

- JSXμ μ£Όμμ `{/* */}`λ₯Ό μ΄μ©νμ¬ μμ±νλ€.
- νκ·Έ μμμλ μλ°μ€ν¬λ¦½νΈμ²λΌ `//`λ `/* */`λ₯Ό μ¬μ©ν  μ μλ€.

```javascript
export default function App() {
  const name = "jay";
  return (
    <View style={styles.container}>
      {/* <Text>Comment</Text> */}
      <Text /* Comment */>{name}</Text>
      <Text
      // Comment
      >
        {name}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

#### π μ€νμΌλ§

- JSXμμ μΈλΌμΈ μ€νμΌλ§μ κ²½μ° κ°μ²΄ ννλ‘ μλ ₯ν΄μΌ νλ€.
- css propertyμ κ²½μ° `-`μΌλ‘ μ°κ²°λ propertyλ μΉ΄λ© νκΈ°λ²μΌλ‘ μμ±νλ€.
  (`background-color` β `backgroundColor`)

```javascript
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>inline styling</Text>
    </View>
  );
}
```

### π μ»΄ν¬λνΈ

- μ»΄ν¬λνΈλ μ¬μ¬μ©μ΄ κ°λ₯ν μ‘°λ¦½ λΈλ‘μΌλ‘ νλ©΄μ λνλλ UI μμμ΄λ€.
- λ¨μν UIμ­ν λ§ νλ κ²μ΄ μλλΌ λΆλͺ¨λ‘λΆν° λ°μ μμ±(props)λ μμ μ μν(state)μ λ°λΌ ννμ΄ λ¬λΌμ§κ³  λ€μν κΈ°λ₯μ μννλ€.

#### π λ΄μ₯ μ»΄ν¬λνΈ

- App μ»΄ν¬λνΈμ μλ `View`, `Text` μ»΄ν¬λνΈ λͺ¨λ λνμ μΈ λ΄μ₯ μ»΄ν¬λνΈ μ€ νλμ΄λ€.

> **λ¦¬μ‘νΈ λ€μ΄ν°λΈ μ»΄ν¬λνΈ**  
> https://reactnative.dev/docs/components-and-apis

> **Button μ»΄ν¬λνΈ**  
> https://reactnative.dev/docs/button

```javascript
import React from "react";
import { View, Text, Button } from "react-native";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Button component</Text>
      <Button title="BUTTON" onPress={() => alert("clicked!")} />
    </View>
  );
};

export default App;
```

- iOSμ Androidμμ `Button` μ»΄ν¬λνΈμ λͺ¨μ΅μ΄ λ€λ₯Έ μ΄μ λ iOSμμ color μμ±μ νμ€νΈ μμ νλλ΄λ κ°μ΄μ§λ§ Androidμμ color μμ±μ λ²νΌμ λ°νμμ λνλ΄λ κ°μ΄κΈ° λλ¬Έμ΄λ€.
- iOSμ Android λͺ¨λ νμΈνλ©΄μ κ°λ°νλ μ΅κ΄μ λ€μ΄λ κ²μ΄ μ€μνλ€.

#### π μ»€μ€ν μ»΄ν¬λνΈ λ§λ€κΈ°

- `Button` μ»΄ν¬λνΈλ iOSμ Androidμμ λ€λ₯Έ λͺ¨μ΅μΌλ‘ λ λλ§λλ€λ λ¨μ μ΄ μλ€.
- κ·Έ λ¨μ μ λ³΄μνκΈ° μν΄ `TouchableOpacity` μ»΄ν¬λνΈμ `Text` μ»΄ν¬λνΈλ₯Ό μ΄μ©ν΄μ `Button` μ»΄ν¬λνΈλ₯Ό λμ²΄ν  `MyButton` μ»΄ν¬λνΈλ₯Ό λ§λ€ μ μλ€.

> **NOTE**  
> λ¦¬μ‘νΈ λ€μ΄ν°λΈ 0.63λ²μ μμ `TouchableOpacity`λ₯Ό λμ²΄ν  `Pressable` μ»΄ν¬λνΈκ° μΆκ°λμλ€.

```javascript
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MyButton = () => {
  return (
    <TouchableOpacity>
      <Text style={{ fontSize: 24 }}>Touchable Button</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
```

- `import React from "react";` μ½λλ λ¦¬μ‘νΈλ₯Ό λΆλ¬μμ μ¬μ©ν  μ μκ² ν΄μ€λ€.
- JSXλ `React.createElement`λ₯Ό νΈμΆνλ μ½λλ‘ μ»΄νμΌλκΈ° λλ¬Έμ μ»΄ν¬λνΈλ₯Ό μμ±ν  λ λ°λμ μμ±ν΄μΌ νλ€.

- `TouchableOpacity` μ»΄ν¬λνΈλ₯Ό μ΄μ©ν λ²νΌ

```javascript
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MyButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#3498db",
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => alert("clicked My Touchable BUTTON!")}
    >
      <Text style={{ color: "white", fontSize: 24 }}>Touchable Button</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
```

- `Pressable` μ»΄ν¬λνΈλ₯Ό μ΄μ©ν λ²νΌ

```javascript
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
      <Text style={{ color: "white", fontSize: 24 }}>Pressable Button</Text>
    </Pressable>
  );
};

export default MyButton2;
```

### π propsμ state

#### π props

- propsλ λΆλͺ¨ μ»΄ν¬λνΈλ‘λΆν° μ λ¬λ μμ±κ° νΉμ μμλ°μ μμ±κ°μ λ§νλ€.

##### π props μ λ¬νκ³  μ¬μ©νκΈ°

- `<Button title="Button" />` μ²λΌ `title` μμ±μ μ§μ νλ©΄ `Button` μ»΄ν¬λνΈμ propsλ‘ 'title'μ΄ μ λ¬λλ€.

```javascript
const MyButton = (props) => {
  console.log(props);
  return (...);
};
```

- `console.log(props)` κ²°κ³Όκ°

```shell
Object {
  "title": "Button",
}
```

- `<Button title="Button">Children props</Button>` μ²λΌ μ»΄ν¬λνΈμ νκ·Έ μ¬μ΄μ κ°μ μλ ₯ν΄μ μ λ¬νλ λ°©λ²λ μλ€.

```shell
Object {
  "children": "Children props",
  "title": "Button",
}
```

##### π defaultProps

- λ°λμ μ λ¬λμ΄μΌ νλ μ€μν κ°μ΄ μ λ¬λμ§ μμμ λ defaultPropsλ‘ μ§μ νλ©΄ λΉ κ°μ΄ λνλλ μν©μ λ°©μ§ν  μ μλ€.

```javascript
const MyButton = (props) => {...};

MyButton.defaultProps = {
  title: 'Button',
};

export default MyButton;
```

##### π propTypes

- νλ‘μ νΈμ ν¬κΈ°κ° μ»€μ§λ©΄μ μ»΄ν¬λνΈμ propsλ₯Ό μ λ¬ν  λ μλͺ»λ νμμ μ λ¬νκ±°λ, νμλ‘ μ λ¬ν΄μΌ νλ κ°μ μ λ¬νμ§ μμμ λ¬Έμ κ° μκΈΈ μ μλ€.
- μλͺ»λ propsκ° μ λ¬λμλ€λ κ²μ κ²½κ³  λ©μμ§λ₯Ό ν΅ν΄ μλ¦¬λ λ°©λ²μΌλ‘ propTypesλ₯Ό μ¬μ©νλ€.
- string, number, func, object, array λ± λ€μν νμμ μ§μ ν  μ μλ€.

```shell
> npm install prop-types
```

```javascript
import propTypes from 'prop-types';

const MyButton = (props) => {...};

...

MyButton.propTypes = {
  title: propTypes.string,
};

export default MyButton;
```

- `propTypes.number`μΌ κ²½μ° μ λ¬λ°μ `title`μ κ°μ΄ `number`κ° μλλ―λ‘ μλμ κ°μ κ²½κ³  λ©μμ§κ° μΆλ ₯λλ€.

```shell
Warning: Failed prop type: Invalid prop `title` of type `string` supplied to `MyButton`, expected `number`.
```

- `propTypes.string`μ `isRequired`λ₯Ό λΆμ΄λ©΄ νμ μ λ¬ μ¬λΆλ₯Ό μ€μ ν  μ μλ€.

```javascript
import propTypes from 'prop-types';

const MyButton = (props) => {...};

...

MyButton.propTypes = {
  title: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default MyButton;
```

- `name: propTypes.string.isRequired`λ‘ `name`μ΄ νμλ‘ μ λ¬λμ§ μμΌλ©΄ μλμ κ°μ κ²½κ³  λ©μμ§κ° μΆλ ₯λλ€.

```shell
Warning: Failed prop type: The prop `name` is marked as required in `MyButton`, but its value is `undefined`.
```

#### π props

- propsλ λΆλͺ¨ μ»΄ν¬λνΈμμ λ°μ κ°μΌλ‘ λ³κ²½ν  μ μλ λ°λ©΄, stateλ μ»΄ν¬λνΈ λ΄λΆμμ μμ±λκ³  κ°μ λ³κ²½ν  μ μμΌλ©° μ΄λ₯Ό μ΄μ©ν΄ μ»΄ν¬λνΈ μνλ₯Ό κ΄λ¦¬νλ€.
- μν(state)λ μ»΄ν¬λνΈμμ λ³νν  μ μλ κ°μ λνλ΄λ©°, μνκ° λ³νλ©΄ μ»΄ν¬λνΈλ λ¦¬λ λλ§λλ€.

##### π useState μ¬μ©νκΈ°

- useState Hookμ ν¨μν μ»΄ν¬λνΈμμ μνλ₯Ό κ΄λ¦¬ν  μ μλλ‘ νλ€.

```javascript
const [state, setState] = useState(initialState);
```

```javascript
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "./MyButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{count}</Text>
      <MyButton title="+1" onPress={() => setCount(count + 1)} />
      <MyButton title="-1" onPress={() => setCount(count - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});

export default Counter;
```

##### π μ¬λ¬ κ°μ useState

- μ»΄ν¬λνΈμμ κ΄λ¦¬ν΄μΌνλ μνκ° μ¬λ¬ κ°μΌ μ μλλ°, useStateλ₯Ό μ¬λ¬λ² μ¬μ©ν  μ μλ€.

```javascript
const Counter = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>count: {count}</Text>
      <Text style={styles.text}>double: {double}</Text>
      <MyButton
        title="+"
        onPress={() => {
          setCount(count + 1);
          setDouble(double + 2);
        }}
      />
      <MyButton
        title="-"
        onPress={() => {
          setCount(count - 1);
          setDouble(double - 2);
        }}
      />
    </View>
  );
};
```

### π μ΄λ²€νΈ

- λ¦¬μ‘νΈ λ€μ΄ν°λΈλ μ¬μ©μμ νλμ λ°λΌ μνΈ μμ©νλ μ΄λ²€νΈλ₯Ό λ€μνκ² μ κ³΅νλ€.

#### π press μ΄λ²€νΈ

- μΉ νλ‘κ·Έλλ°μμ κ°μ₯ λ§μ΄ μ¬μ©νλ μ΄λ²€νΈ μ€ νλλ onClickμ΄λ²€νΈμ΄λ€.
- λ¦¬μ‘νΈ λ€μ΄ν°λΈμμ onClick μ΄λ²€νΈμ κ°μ₯ λΉμ·ν μ΄λ²€νΈλ press μ΄λ²€νΈμ΄λ€.

> **TouchableOpacityμμ μ¬μ©ν  μ μλ press μ΄λ²€νΈ 4κ°μ§**
>
> 1. **onPressIn:** ν°μΉκ° μμλ  λ ν­μ νΈμΆ
> 2. **onPressOut:** ν°μΉκ° ν΄μ λ  λ ν­μ νΈμΆ
> 3. **onPress:** ν°μΉκ° ν΄μ λ  λ onPressOut μ΄ν νΈμΆ
> 4. **onLongPress:** ν°μΉκ° μΌμ  μκ° μ΄μ μ§μλλ©΄ νΈμΆ
>
> λ¬Έμ: https://reactnative.dev/docs/pressable

```javascript
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
    >
      <Text style={styles.text}>Press</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({...});

export default EventButton;
```

> **μ£Όμ μ¬ν­**  
> `onPressIn`κ³Ό `onPressOut`μ ν­μ νΈμΆλμ§λ§, `onPress`μ `onLongPress`λ μ¬μ©μκ° ν΄λ¦­νλ μκ°μ λ°λΌ λ μ€ νλλ§ νΈμΆλλ€.

- `onLongPress`κ° νΈμΆλλ μκ°μ μ‘°μ νκ³  μΆλ€λ©΄ `delayLongPress`μ κ°μ μ‘°μ ν΄μ μνλ μκ°μΌλ‘ μ€μ ν  μ μλ€.

```javascript
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const EventButton = () => {
  ...

  return (
    <TouchableOpacity
      ...
      delayLongPress={3000}
    >
      <Text style={styles.text}>Press</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({...});

export default EventButton;
```

#### π change μ΄λ²€νΈ

- change μ΄λ²€νΈλ κ°μ μλ ₯νλ `TextInput` μ»΄ν¬λνΈμμ λ§μ΄ μ¬μ©λλ€.

```javascript
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const EventInput = () => {
  const [text, setText] = useState("");
  const _onChange = (e) => setText(e.nativeEvent.text);

  return (
    <View>
      <Text style={styles.text}>text: {text}</Text>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Enter text"
        onChange={_onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({...});

export default EventInput;
```

- onChange μμ±μ `TextInput` μ»΄ν¬λνΈμ μλ ₯λ νμ€νΈκ° λ³κ²½λ  λ νΈμΆλλ€.
- λ€μκ³Ό κ°μ ννλ‘ μΈμλ₯Ό μ λ¬νλ€.

```shell
# console.log(e.nativeEvent)
Object {
  "nativeEvent": {
    "eventCount": ...,
    "target": ...,
    "text": ...,
  }
}
```

- onChangeText μμ±μ λ³κ²½λ `text`μ λ¬Έμμ΄λ§ μΈμλ‘ μ λ¬νλ©° νΈμΆνλ€.

```javascript
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const EventInput = () => {
  const [text, setText] = useState("");
  const _onChangeText = (text) => setText(text);

  return (
    <View>
      <Text style={styles.text}>text: {text}</Text>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Enter text"
        onChangeText={_onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({...});

export default EventInput;
```

#### π Pressable μ»΄ν¬λνΈ

- `TouchableOpacity` μ»΄ν¬λνΈλ₯Ό λμ²΄νλ `Pressable` μ»΄ν¬λνΈκ° μΆκ°λμλ€.
- μ¬μ©μμ ν°μΉμ μνΈ μμ©νλ μ»΄ν¬λνΈμ΄λ€.
- press μ΄λ²€νΈλ λμΌνκ² μ‘΄μ¬νκ³  λμ λ°©μλ κ°λ€.
- λ€λ₯Έ νΉμ§μ `HitRect`μ `PressRect`μ΄ μ‘΄μ¬νλ€.

> **NOTE**  
> μ°Έκ³ : https://reactnative.dev/docs/pressable

```javascript
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
```

- `PressRect`μ λ²μ΄λλ©΄ λ²νΌμ λλ₯Έ μνμμ λ²μ΄λ¬λ€κ³  νλ¨νλ€.
- `PressRect`μ λ²μλ `HitRect`μ λ²μ λμμ μμλλ―λ‘ `hitSlop`μ κ°μ λ°λΌ `PressRect`μ λ²μκ° λ¬λΌμ§λ€λ κ²

> **NOTE**  
> `Pressable` μ»΄ν¬λνΈμμ press μ΄λ²€νΈ λμ μμ
>
> 1. **λ¨μ ν΄λ¦­:** PressIn β PressOut β Press
> 2. **κΈΈκ² ν΄λ¦­:** PressIn β LongPress β PressOut
> 3. **ν΄λ¦­ μ€ λ°μΌλ‘ μ΄λ:** PressIn β Out of PressRect β PressOut
> 4. **κΈΈκ² ν΄λ¦­ μ€ λ°μΌλ‘ μ΄λ** PressIn β LongPress β Out of PressRect β PressOut
