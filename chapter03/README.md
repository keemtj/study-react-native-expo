<details>
<summary>목차</summary>

- 📗 Chapter03. 컴포넌트 [🔗](#-Chapter03-컴포넌트)
  - 📖 JSX [🔗](#-JSX)
    - 🔖 하나의 부모 [🔗](#-하나의-부모)
    - 🔖 자바스크립트 변수 [🔗](#-자바스크립트-변수)
    - 🔖 자바스크립트 조건문 [🔗](#-자바스크립트-조건문)
    - 🔖 null과 undefined [🔗](#-null과-undefined)
    - 🔖 주석 [🔗](#-주석)
    - 🔖 스타일링 [🔗](#-스타일링)
  - 📖 컴포넌트 [🔗](#-컴포넌트)
    - 🔖 내장 컴포넌트 [🔗](#-내장-컴포넌트)
    - 🔖 커스텀 컴포넌트 [🔗](#-커스텀-컴포넌트)
  - 📖 props와 state [🔗](#-props와-state)
    - 🔖 props [🔗](#-props)
    - 🔖 state [🔗](#-state)
  - 📖 이벤트 [🔗](#-이벤트)

</details>

## 📗 Chapter03 컴포넌트

- 컴포넌트는 재사용할 수 있는 조립 블록으로 화면에 나타나는 UI 요소라고 생각하면 이해하기 쉽다.

  > **NOTE**  
  > 와이어프레임이란 최종 화면에 구성될 콘텐츠를 간단히 요약해서 보여주는 것으로, 경우에 따라 색상, 이미지 등을 생략할 때도 있다.

- expo 프로젝트를 생성한다.

```shell
> expo init react-native-component
> code ./
```

### 📖 JSX

- JSX는 객체 생성과 함수 호출을 위한 문법적 편의를 제공하기 위해 만들어진 확장 기능으로 리액트 프로젝트에서 사용된다.
- 가독성이 높고 작성하기 쉽다.
- XML과 유사하다는 점에서 중첩된 구조를 잘 나타낼 수 있다.

#### 🔖 하나의 부모

- JSX에서는 여러 개의 요소를 반환하는 경우 반드시 하나의 무보로 나머지 요소들을 감싸서 반환해야 한다.
- `View` 컴포넌트는 UI를 구성하는 가장 기본적인 요소로 웹 프로그래밍에서 `div`와 비슷한 역할을 하는 컴포넌트이다.
- `Fragment` 또는 단축 문법인 `<></>`로 감싸줄 수 있다.

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

#### 🔖 자바스크립트 변수

- 자바스크립트의 변수를 전달하여 이용할 수 있다.

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

#### 🔖 자바스크립트 조건문

##### 📎 if 조건문

- if문은 즉시실행함수 형태로 작성해야 한다.

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

##### 📎 삼항 연산자

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

##### 📎 AND 연산자와 OR 연산자

- JSX에서 `false`는 렌더링되지 않는다.

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

#### 🔖 null과 undefined

- JSX는 null은 허용하지만 undefined는 오류가 발생함에 주의한다.

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

#### 🔖 주석

- JSX의 주석은 `{/* */}`를 이용하여 작성한다.
- 태그 안에서는 자바스크립트처럼 `//`나 `/* */`를 사용할 수 있다.

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

#### 🔖 스타일링

- JSX에서 인라인 스타일링의 경우 객체 형태로 입력해야 한다.
- css property의 경우 `-`으로 연결된 property는 카멜 표기법으로 작성한다.
  (`background-color` -> `backgroundColor`)

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

### 📖 컴포넌트

- 컴포넌트란 재사용이 가능한 조립 블록으로 화면에 나타나는 UI 요소이다.
- 단순히 UI역할만 하는 것이 아니라 부모로부터 받은 속성(props)나 자신의 상태(state)에 따라 표현이 달라지고 다양한 기능을 수행한다.

#### 🔖 내장 컴포넌트

- App 컴포넌트에 있는 `View`, `Text` 컴포넌트 모두 대표적인 내장 컴포넌트 중 하나이다.

> **리액트 네이티브 컴포넌트**  
> https://reactnative.dev/docs/components-and-apis

> **Button 컴포넌트**  
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

- iOS와 Android에서 `Button` 컴포넌트의 모습이 다른 이유는 iOS에서 color 속성은 텍스트 색을 타나내는 값이지만 Android에서 color 속성은 버튼의 바탕색을 나타내는 값이기 때문이다.
- iOS와 Android 모두 확인하면서 개발하는 습관을 들이는 것이 중요하다.

#### 🔖 커스텀 컴포넌트 만들기

- `Button` 컴포넌트는 iOS와 Android에서 다른 모습으로 렌더링된다는 단점이 있다.
- 그 단점을 보완하기 위해 `TouchableOpacity` 컴포넌트와 `Text` 컴포넌트를 이용해서 `Button` 컴포넌트를 대체할 `MyButton` 컴포넌트를 만들 수 있다.

> **NOTE**  
> 리액트 네이티브 0.63버전에서 `TouchableOpacity`를 대체할 `Pressable` 컴포넌트가 추가되었다.

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

- `import React from "react";` 코드는 리액트를 불러와서 사용할 수 있게 해준다.
- JSX는 `React.createElement`를 호출하는 코드로 컴파일되기 때문에 컴포넌트를 작성할 때 반드시 작성해야 한다.

- `TouchableOpacity` 컴포넌트를 이용한 버튼

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

- `Pressable` 컴포넌트를 이용한 버튼

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

### 📖 props와 state

#### 🔖 props

- props는 부모 컴포넌트로부터 전달된 속성값 혹은 상속받은 속성값을 말한다.

##### 📎 props 전달하고 사용하기

- `<Button title="Button" />` 처럼 `title` 속성을 지정하면 `Button` 컴포넌트의 props로 'title'이 전달된다.

```javascript
const MyButton = (props) => {
  console.log(props);
  return (...);
};
```

- `console.log(props)` 결과값

```shell
Object {
  "title": "Button",
}
```

- `<Button title="Button">Children props</Button>` 처럼 컴포넌트의 태그 사이에 값을 입력해서 전달하는 방법도 있다.

```shell
Object {
  "children": "Children props",
  "title": "Button",
}
```

##### 📎 defaultProps

- 반드시 전달되어야 하는 중요한 값이 전달되지 않았을 때 defaultProps로 지정하면 빈 값이 나타나는 상황을 방지할 수 있다.

```javascript
const MyButton = (props) => {...};

MyButton.defaultProps = {
  title: 'Button',
};

export default MyButton;
```

##### 📎 propTypes

- 프로젝트의 크기가 커지면서 컴포넌트에 props를 전달할 때 잘못된 타입을 전달하거나, 필수로 전달해야 하는 값을 전달하지 않아서 문제가 생길 수 있다.
- 잘못된 props가 전달되었다는 것을 경고 메시지를 통해 알리는 방법으로 propTypes를 사용한다.
- string, number, func, object, array 등 다양한 타입을 지정할 수 있다.

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

- `propTypes.number`일 경우 전달받은 `title`의 값이 `number`가 아니므로 아래와 같은 경고 메시지가 출력된다.

```shell
Warning: Failed prop type: Invalid prop `title` of type `string` supplied to `MyButton`, expected `number`.
```

- `propTypes.string`에 `isRequired`를 붙이면 필수 전달 여부를 설정할 수 있다.

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

- `name: propTypes.string.isRequired`로 `name`이 필수로 전달되지 않으면 아래와 같은 경고 메시지가 출력된다.

```shell
Warning: Failed prop type: The prop `name` is marked as required in `MyButton`, but its value is `undefined`.
```

#### 🔖 props

- props는 부모 컴포넌트에서 받은 값으로 변경할 수 없는 반면, state는 컴포넌트 내부에서 생성되고 값을 변경할 수 있으며 이를 이용해 컴포넌트 상태를 관리한다.
- 상태(state)란 컴포넌트에서 변화할 수 있는 값을 나타내며, 상태가 변하면 컴포넌트는 리렌더링된다.

##### 📎 useState 사용하기

- useState Hook은 함수형 컴포넌트에서 상태를 관리할 수 있도록 한다.

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

##### 📎 여러 개의 useState

- 컴포넌트에서 관리해야하는 상태가 여러 개일 수 있는데, useState를 여러번 사용할 수 있다.

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

### 📖 이벤트

#### 🔖

##### 📎
