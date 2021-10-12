<details>
<summary>목차</summary>

- 📗 Chapter04. 스타일링 [🔗](#-Chapter04-스타일링)
  - 📖 스타일링 [🔗](#-스타일링)
    - 🔖 인라인 스타일링 [🔗](#-인라인-스타일링)
    - 🔖 클래스 스타일링 [🔗](#-클래스-스타일링)
    - 🔖 여러 개의 스타일 적용 [🔗](#-여러-개의-스타일-적용)
    - 🔖 외부 스타일 이용하기 [🔗](#-외부-스타일-이용하기)
  - 📖 리액트 네이티브 스타일 [🔗](#-리액트-네이티브-스타일)
    - 🔖 flex [🔗](#-flex)
  - 📖 스타일드 컴포넌트 [🔗](#-스타일드-컴포넌트)

</details>

## 📗 Chapter04 스타일링

- 리액트 네이티브 스타일링은 웹 프로그래밍에서 사용하는 CSS와 약간 차이가 있다.
- background-color처럼 하이픈으로 된 CSS와 달리 backgroundColor처럼 카멜 표기법으로 작성한다.

```shell
> expo init react-native-style
```

### 📖 스타일링

- 인라인 스타일을 적용하는 방법과 `StyleSheet`에 정의된 스타일을 사용하는 방법이 있다.

#### 🔖 인라인 스타일링

- 리액트 네이티브에서는 객체 형태로 전달해야 한다.
- 어떤 스타일이 적용되는지 잘 보인다는 장점이 있다.
- 비슷한 역할을 하는 컴포넌트에 동일한 코드가 반복되고, 코드만으로는 스타일링의 명확한 이유를 알기 어렵다.

```javascript
import React from "react";
import { View, Text } from "react-native";

const InlineStyle = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: "600",
          color: "black",
        }}
      >
        Inline Styling - Text
      </Text>
      <Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: "400",
          color: "red",
        }}
      >
        Inline Styling - Error
      </Text>
    </View>
  );
};

export default InlineStyle;
```

#### 🔖 클래스 스타일링

- 웹 프로그래밍에서 CSS 클래스를 이용하는 방법과 유사하다.
- 장기적인 관점에서 클래스 스타일을 사용하는 것이 관리 측면에서 유리하다.

```javascript
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ClassStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Class Styling - Text</Text>
      <Text style={styles.error}>Class Styling - Error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: "600",
    color: "black",
  },
  error: {
    padding: 10,
    fontSize: 26,
    fontWeight: "400",
    color: "red",
  },
});

export default ClassStyle;
```

#### 🔖 여러 개의 스타일 적용

- 배열을 이용하여 `style` 속성에 여러 개의 스타일을 적용할 수 있다.
- 배열 요소의 순서에 따라 적용되는 스타일이 달라진다는 것을 주의해야한다.
- 뒤에 오는 스타일이 앞에 있는 스타일을 덮는다.
- 인라인 스타일과 클래스 스타일 방식을 혼용해서 사용할 수 있다.

```javascript
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ClassStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: "green" }]}>
        Class Styling - Text
      </Text>
      <Text style={[styles.text, styles.error]}>Class Styling - Error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: "600",
    color: "black",
  },
  error: {
    fontWeight: "400",
    color: "red",
  },
});

export default ClassStyle;
```

#### 🔖 외부 스타일 이용하기

- 외부 파일에 스타일을 작성하고 불러와서 사용할 수 있다.

```javascript
import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const textStyles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: "600",
    color: "black",
  },
  error: {
    fontWeight: "400",
    color: "red",
  },
});
```

```javascript
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
```

### 📖 리액트 네이티브 스타일

#### 🔖 flex
