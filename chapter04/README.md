<details>
<summary>목차</summary>

- 📗 Chapter04. 스타일링 [🔗](#-Chapter04-스타일링)
  - 📖 스타일링 [🔗](#-스타일링)
    - 🔖 인라인 스타일링 [🔗](#-인라인-스타일링)
    - 🔖 클래스 스타일링 [🔗](#-클래스-스타일링)
    - 🔖 여러 개의 스타일 적용 [🔗](#-여러-개의-스타일-적용)
    - 🔖 외부 스타일 이용하기 [🔗](#-외부-스타일-이용하기)
  - 📖 리액트 네이티브 스타일 [🔗](#-리액트-네이티브-스타일)
    - 🔖 flex와 범위 [🔗](#-flex와-범위)
    - 🔖 정렬 [🔗](#-정렬)
    - 🔖 그림자 [🔗](#-그림자)
  - 📖 스타일드 컴포넌트 [🔗](#-스타일드-컴포넌트)
    - 🔖 스타일드 컴포넌트 사용법 [🔗](#-스타일드-컴포넌트-사용법)
    - 🔖 스타일 적용하기 [🔗](#-스타일-적용하기)
    - 🔖 props 사용하기 [🔗](#-props-사용하기)
    - 🔖 attrs 사용하기 [🔗](#-attrs-사용하기)
    - 🔖 ThemeProvider [🔗](#-ThemeProvider)

#### 🔖 스타일드 컴포넌트 사용법

#### 🔖 스타일 적용하기

#### 🔖 props 사용하기

#### 🔖 attrs 사용하기

#### 🔖 ThemeProvider

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

#### 🔖 flex와 범위

- flex값을 이용해 차지할 수 있는 영역을 정할 수 있다.
- 아래의 코드는 `Header`, `Footer` 컴포넌트는 `height: 80`을 유지하고 `Contents` 컴포넌트는 나머지 모든 영역을 차지하도록 한다.

```javascript
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={[styles.container, styles.header]}>
      <Text style={styles.text}>HEADER</Text>
    </View>
  );
};

export const Contents = () => {
  return (
    <View style={[styles.container, styles.contents]}>
      <Text style={styles.text}>CONTENTS</Text>
    </View>
  );
};

export const Footer = () => {
  return (
    <View style={[styles.container, styles.footer]}>
      <Text style={styles.text}>FOOTER</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
  header: {
    backgroundColor: "#f1c40f",
  },
  contents: {
    flex: 1,
    backgroundColor: "#1abc9c",
    height: 640,
  },
  footer: {
    backgroundColor: "#3498db",
  },
  text: {
    fontSize: 26,
  },
});
```

> **NOTE**  
> iPhone X 모델 이후로 상단 노치(Notch) 떄문에 크기가 다르게 보일 수 있다. `SafeAreaView` 컴포넌트를 이용하여 문제를 해결할 수 있다.

#### 🔖 정렬

- 컴포넌트가 쌓이는 방향을 정할 수 있다.

> **NOTE**  
> CSS Flex: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

> **flexDirection에 설정할 수 있는 네 가지 값**
>
> - column: 세로 방향으로 정렬(기본값)
> - column-reverse: 세로 방향 역순 정렬
> - row: 가로 방향으로 정렬
> - row-reverse: 가로 방향 역순 정렬

- `justifyContent`는 `flexDirection`에서 결정한 방향과 동일한 방향으로 정렬하는 속성이다.

> **flexDirection이 row일 때 justifyContent의 값에 따라 정렬되는 모습**
>
> - flex-start: 시작점에서부터 정렬(기본값)
> - flex-end: 끝에서부터 정렬
> - center: 중앙 정렬
> - space-between: 컴포넌트 사이의 공간을 동일하게 만들어서 정렬
> - space-around: 컴포넌트 각각의 주변 공간ㅇ르 동일하게 만들어서 정렬
> - space-evenly: 컴포넌트 사이와 양 끝에 동일한 공간을 만들어서 정렬

- `alignItems`는 `flexDirection`에서 결정한 방향과 수직인 방향으로 정렬하는 속성이다.

> **alignItems에 설정할 수 있는 값**
>
> - flex-start: 시작점에서부터 정렬(기본값)
> - flex-end: 끝에서부터 정렬
> - center: 중앙 정렬
> - stretch: alignItems의 방향으로 컴포넌트 확장
> - baseline: 컴포넌트 내부의 텍스트(text) 베이스라인(baseline)을 기준으로 정렬

#### 🔖 그림자

- 그림자는 리액트 네이티브에서 플랫폼마다 다르게 적용되는 스타일이다.

> **그림자 속성 4가지**
>
> - shadowColor: 그림자 색 설정
> - shadowOffset: width와 height값을 지정하여 그림자 거리 설정
> - shadowOpacity: 그림자의 불투명도 설정
> - shadowRadius: 그림자의 흐림 반경 설정

> **주의 사항**  
> 이 속성들은 iOS에만 적용되는 속성들이다. Android에서 그림자를 표현하려면 elevation이라는 속성을 사용해야 한다. 리액트 네이티브에서 제공하는 `Platform` 모듈을 이용해 각 플랫폼마다 다른 코드가 적용되도록 코드를 작성할 수 있다.
>
> - Platform: https://reactnative.dev/docs/platform-specific-code

```javascript
import React from "react";
import { StyleSheet, View, Platform } from "react-native";

export default () => {
  return <View style={styles.shadow}></View>;
};

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "#fff",
    width: 200,
    height: 200,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});
```

### 📖 스타일드 컴포넌트

- 리액트 네이티브와 웹 프로그래밍과의 스타일 적용은 유사한 만큼 차이점도 있기 때문에 혼동하거나 실수가 발생할 수 있다.
- 이러한 점은 스타일드 컴포넌트로 해소할 수 있고, 스타일드 컴포넌트에서 제공하는 기능을 활용하여 추가적인 이점도 얻을 수 있다.

> 스타일드 컴포넌트: https://styled-components.com/

- 스타일드 컴포넌트는 자바스크립트 파일 안에 스타일을 작성하는 CSS-in-JS 라이브러리이다.
- 스타일이 적용된 컴포넌트라고 생각하면 이해하기 쉽다.

```shell
> npm install styled-components
```

#### 🔖 스타일드 컴포넌트 사용법

- 예시 코드

```javascript
import styled, { css } from "styled-components/native";

const MyTextComponent = styled.Text`
  color: "#fff";
`;

const whiteText = css`
  color: "#fff";
  font-size: 14px;
`;

const MyBoldTextComponent = styled.Text`
  ${whiteText}
  font-weight: 600;
`;

const ErrorText = styled(MyBoldTextComponent)`
  color: red;
`;
```

#### 🔖 스타일 적용하기

- 적용 코드

```javascript
import React from "react";
import styled from "styled-components/native";

const Button = (props) => {
  return (
    <ButtonContainer>
      <Title>{props.title}</Title>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: #9b59b6;
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export default Button;
```

#### 🔖 props 사용하기

- 스타일드 컴포넌트에서는 스타일을 작성하는 백틱 안에서 props에 접근할 수 있다.

```javascript
import React from "react";
import styled from "styled-components/native";
import Button from "./components/Button";

const App = () => {
  return (
    <Container>
      <Button title="Styled" />
      <Button title="Button" />
    </Container>
  );
};

const Container = styled.View`
  ...
`;

export default App;
```

```javascript
import React from "react";
import styled from "styled-components/native";

const Button = (props) => {
  return (
    <ButtonContainer title={props.title}>
      <Title>{props.title}</Title>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.title === "Styled" ? "#3498db" : "#9b59b6"};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export default Button;
```

#### 🔖 attrs 사용하기

- 스타일드 컴포넌트를 이용하면 스타일을 작성하는 곳에서 컴포넌트의 속성도 설정할 수 있다.
- 속성을 설정할 때 전달된 props를 이용할 수도 있다.
- attrs를 이용하면 스타일을 설정하는 곳에서 props의 값에 따라 컴포넌트의 속성을 다르게 적용할 수도 있고 항상 일정한 속성을 미리 정의해놓을 수 있다.

```javascript
import React from "react";
import styled from "styled-components/native";
import Input from "./components/Input";

const App = () => {
  return (
    <Container>
      <Input borderColor="#3498db" />
      <Input borderColor="#9b59b6" />
    </Container>
  );
};

const Container = styled.View`
  ...
`;

export default App;
```

```javascript
import React from "react";
import styled from "styled-components/native";

const Input = (props) => {
  return <StyledInput borderColor={props.borderColor} />;
};

const StyledInput = styled.TextInput.attrs((props) => {
  return {
    placeholder: "Enter a text...",
    placeholderTExtColor: props.borderColor,
  };
})`
  width: 200px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 2px;
  border-color: ${(props) => props.borderColor};
  font-size: 24px;
`;

export default Input;
```

#### 🔖 ThemeProvider

- 스타일드 컴포넌트의 ThemeProvider는 Context API를 활용해 애플리케이션 전체에서 스타일드 컴포넌트를 이용할 때 미리 정의한 값들을 사용할 수 있도록 props로 전달합니다.

```javascript
export const lightTheme = {
  background: "#ffffff",
  text: "#ffffff",
  placeholder: "gray",
  purple: "#9b59b6",
  blue: "#3498db",
};

export const darkTheme = {
  background: "#34495e",
  text: "#34495e",
  placeholder: "gray",
  purple: "#9b59b6",
  blue: "#3498db",
};
```

- 원하는 theme을 사용하고 싶은 컴포넌트의 최상의 부모를 `ThemeProvider`로 감싸준다.

```javascript
import React, { useState } from "react";
import { Switch } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import Button from "./components/Button";
import Input from "./components/Input";
import { lightTheme, darkTheme } from "./theme";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Switch value={isDark} onValueChange={_toggleSwitch} />
        ...
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.View`
  ...
`;

export default App;
```

- 스타일드 컴포넌트에서 props를 통해 theme을 받아 원하는 스타일을 적용할 수 있다.

```javascript
import React from "react";
import styled from "styled-components/native";
import { theme } from "../theme";

const Button = (props) => {
  return (
    <ButtonContainer title={props.title}>
      <Title>{props.title}</Title>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.title === "Styled" ? props.theme.blue : props.theme.purple};
  ...
`;

const Title = styled.Text`
  ...
  color: ${(props) => props.theme.text};
`;

export default Button;
```
