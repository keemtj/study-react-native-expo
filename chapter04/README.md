<details>
<summary>λͺ©μ°¨</summary>

- π Chapter04. μ€νμΌλ§ [π](#-Chapter04-μ€νμΌλ§)
  - π μ€νμΌλ§ [π](#-μ€νμΌλ§)
    - π μΈλΌμΈ μ€νμΌλ§ [π](#-μΈλΌμΈ-μ€νμΌλ§)
    - π ν΄λμ€ μ€νμΌλ§ [π](#-ν΄λμ€-μ€νμΌλ§)
    - π μ¬λ¬ κ°μ μ€νμΌ μ μ© [π](#-μ¬λ¬-κ°μ-μ€νμΌ-μ μ©)
    - π μΈλΆ μ€νμΌ μ΄μ©νκΈ° [π](#-μΈλΆ-μ€νμΌ-μ΄μ©νκΈ°)
  - π λ¦¬μ‘νΈ λ€μ΄ν°λΈ μ€νμΌ [π](#-λ¦¬μ‘νΈ-λ€μ΄ν°λΈ-μ€νμΌ)
    - π flexμ λ²μ [π](#-flexμ-λ²μ)
    - π μ λ ¬ [π](#-μ λ ¬)
    - π κ·Έλ¦Όμ [π](#-κ·Έλ¦Όμ)
  - π μ€νμΌλ μ»΄ν¬λνΈ [π](#-μ€νμΌλ-μ»΄ν¬λνΈ)
    - π μ€νμΌλ μ»΄ν¬λνΈ μ¬μ©λ² [π](#-μ€νμΌλ-μ»΄ν¬λνΈ-μ¬μ©λ²)
    - π μ€νμΌ μ μ©νκΈ° [π](#-μ€νμΌ-μ μ©νκΈ°)
    - π props μ¬μ©νκΈ° [π](#-props-μ¬μ©νκΈ°)
    - π attrs μ¬μ©νκΈ° [π](#-attrs-μ¬μ©νκΈ°)
    - π ThemeProvider [π](#-ThemeProvider)

#### π μ€νμΌλ μ»΄ν¬λνΈ μ¬μ©λ²

#### π μ€νμΌ μ μ©νκΈ°

#### π props μ¬μ©νκΈ°

#### π attrs μ¬μ©νκΈ°

#### π ThemeProvider

</details>

## π Chapter04 μ€νμΌλ§

- λ¦¬μ‘νΈ λ€μ΄ν°λΈ μ€νμΌλ§μ μΉ νλ‘κ·Έλλ°μμ μ¬μ©νλ CSSμ μ½κ° μ°¨μ΄κ° μλ€.
- background-colorμ²λΌ νμ΄νμΌλ‘ λ CSSμ λ¬λ¦¬ backgroundColorμ²λΌ μΉ΄λ© νκΈ°λ²μΌλ‘ μμ±νλ€.

```shell
> expo init react-native-style
```

### π μ€νμΌλ§

- μΈλΌμΈ μ€νμΌμ μ μ©νλ λ°©λ²κ³Ό `StyleSheet`μ μ μλ μ€νμΌμ μ¬μ©νλ λ°©λ²μ΄ μλ€.

#### π μΈλΌμΈ μ€νμΌλ§

- λ¦¬μ‘νΈ λ€μ΄ν°λΈμμλ κ°μ²΄ ννλ‘ μ λ¬ν΄μΌ νλ€.
- μ΄λ€ μ€νμΌμ΄ μ μ©λλμ§ μ λ³΄μΈλ€λ μ₯μ μ΄ μλ€.
- λΉμ·ν μ­ν μ νλ μ»΄ν¬λνΈμ λμΌν μ½λκ° λ°λ³΅λκ³ , μ½λλ§μΌλ‘λ μ€νμΌλ§μ λͺνν μ΄μ λ₯Ό μκΈ° μ΄λ ΅λ€.

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

#### π ν΄λμ€ μ€νμΌλ§

- μΉ νλ‘κ·Έλλ°μμ CSS ν΄λμ€λ₯Ό μ΄μ©νλ λ°©λ²κ³Ό μ μ¬νλ€.
- μ₯κΈ°μ μΈ κ΄μ μμ ν΄λμ€ μ€νμΌμ μ¬μ©νλ κ²μ΄ κ΄λ¦¬ μΈ‘λ©΄μμ μ λ¦¬νλ€.

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

#### π μ¬λ¬ κ°μ μ€νμΌ μ μ©

- λ°°μ΄μ μ΄μ©νμ¬ `style` μμ±μ μ¬λ¬ κ°μ μ€νμΌμ μ μ©ν  μ μλ€.
- λ°°μ΄ μμμ μμμ λ°λΌ μ μ©λλ μ€νμΌμ΄ λ¬λΌμ§λ€λ κ²μ μ£Όμν΄μΌνλ€.
- λ€μ μ€λ μ€νμΌμ΄ μμ μλ μ€νμΌμ λ?λλ€.
- μΈλΌμΈ μ€νμΌκ³Ό ν΄λμ€ μ€νμΌ λ°©μμ νΌμ©ν΄μ μ¬μ©ν  μ μλ€.

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

#### π μΈλΆ μ€νμΌ μ΄μ©νκΈ°

- μΈλΆ νμΌμ μ€νμΌμ μμ±νκ³  λΆλ¬μμ μ¬μ©ν  μ μλ€.

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

### π λ¦¬μ‘νΈ λ€μ΄ν°λΈ μ€νμΌ

#### π flexμ λ²μ

- flexκ°μ μ΄μ©ν΄ μ°¨μ§ν  μ μλ μμ­μ μ ν  μ μλ€.
- μλμ μ½λλ `Header`, `Footer` μ»΄ν¬λνΈλ `height: 80`μ μ μ§νκ³  `Contents` μ»΄ν¬λνΈλ λλ¨Έμ§ λͺ¨λ  μμ­μ μ°¨μ§νλλ‘ νλ€.

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
> iPhone X λͺ¨λΈ μ΄νλ‘ μλ¨ λΈμΉ(Notch) λλ¬Έμ ν¬κΈ°κ° λ€λ₯΄κ² λ³΄μΌ μ μλ€. `SafeAreaView` μ»΄ν¬λνΈλ₯Ό μ΄μ©νμ¬ λ¬Έμ λ₯Ό ν΄κ²°ν  μ μλ€.

#### π μ λ ¬

- μ»΄ν¬λνΈκ° μμ΄λ λ°©ν₯μ μ ν  μ μλ€.

> **NOTE**  
> CSS Flex: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

> **flexDirectionμ μ€μ ν  μ μλ λ€ κ°μ§ κ°**
>
> - column: μΈλ‘ λ°©ν₯μΌλ‘ μ λ ¬(κΈ°λ³Έκ°)
> - column-reverse: μΈλ‘ λ°©ν₯ μ­μ μ λ ¬
> - row: κ°λ‘ λ°©ν₯μΌλ‘ μ λ ¬
> - row-reverse: κ°λ‘ λ°©ν₯ μ­μ μ λ ¬

- `justifyContent`λ `flexDirection`μμ κ²°μ ν λ°©ν₯κ³Ό λμΌν λ°©ν₯μΌλ‘ μ λ ¬νλ μμ±μ΄λ€.

> **flexDirectionμ΄ rowμΌ λ justifyContentμ κ°μ λ°λΌ μ λ ¬λλ λͺ¨μ΅**
>
> - flex-start: μμμ μμλΆν° μ λ ¬(κΈ°λ³Έκ°)
> - flex-end: λμμλΆν° μ λ ¬
> - center: μ€μ μ λ ¬
> - space-between: μ»΄ν¬λνΈ μ¬μ΄μ κ³΅κ°μ λμΌνκ² λ§λ€μ΄μ μ λ ¬
> - space-around: μ»΄ν¬λνΈ κ°κ°μ μ£Όλ³ κ³΅κ°γλ₯΄ λμΌνκ² λ§λ€μ΄μ μ λ ¬
> - space-evenly: μ»΄ν¬λνΈ μ¬μ΄μ μ λμ λμΌν κ³΅κ°μ λ§λ€μ΄μ μ λ ¬

- `alignItems`λ `flexDirection`μμ κ²°μ ν λ°©ν₯κ³Ό μμ§μΈ λ°©ν₯μΌλ‘ μ λ ¬νλ μμ±μ΄λ€.

> **alignItemsμ μ€μ ν  μ μλ κ°**
>
> - flex-start: μμμ μμλΆν° μ λ ¬(κΈ°λ³Έκ°)
> - flex-end: λμμλΆν° μ λ ¬
> - center: μ€μ μ λ ¬
> - stretch: alignItemsμ λ°©ν₯μΌλ‘ μ»΄ν¬λνΈ νμ₯
> - baseline: μ»΄ν¬λνΈ λ΄λΆμ νμ€νΈ(text) λ² μ΄μ€λΌμΈ(baseline)μ κΈ°μ€μΌλ‘ μ λ ¬

#### π κ·Έλ¦Όμ

- κ·Έλ¦Όμλ λ¦¬μ‘νΈ λ€μ΄ν°λΈμμ νλ«νΌλ§λ€ λ€λ₯΄κ² μ μ©λλ μ€νμΌμ΄λ€.

> **κ·Έλ¦Όμ μμ± 4κ°μ§**
>
> - shadowColor: κ·Έλ¦Όμ μ μ€μ 
> - shadowOffset: widthμ heightκ°μ μ§μ νμ¬ κ·Έλ¦Όμ κ±°λ¦¬ μ€μ 
> - shadowOpacity: κ·Έλ¦Όμμ λΆν¬λͺλ μ€μ 
> - shadowRadius: κ·Έλ¦Όμμ νλ¦Ό λ°κ²½ μ€μ 

> **μ£Όμ μ¬ν­**  
> μ΄ μμ±λ€μ iOSμλ§ μ μ©λλ μμ±λ€μ΄λ€. Androidμμ κ·Έλ¦Όμλ₯Ό νννλ €λ©΄ elevationμ΄λΌλ μμ±μ μ¬μ©ν΄μΌ νλ€. λ¦¬μ‘νΈ λ€μ΄ν°λΈμμ μ κ³΅νλ `Platform` λͺ¨λμ μ΄μ©ν΄ κ° νλ«νΌλ§λ€ λ€λ₯Έ μ½λκ° μ μ©λλλ‘ μ½λλ₯Ό μμ±ν  μ μλ€.
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

### π μ€νμΌλ μ»΄ν¬λνΈ

- λ¦¬μ‘νΈ λ€μ΄ν°λΈμ μΉ νλ‘κ·Έλλ°κ³Όμ μ€νμΌ μ μ©μ μ μ¬ν λ§νΌ μ°¨μ΄μ λ μκΈ° λλ¬Έμ νΌλνκ±°λ μ€μκ° λ°μν  μ μλ€.
- μ΄λ¬ν μ μ μ€νμΌλ μ»΄ν¬λνΈλ‘ ν΄μν  μ μκ³ , μ€νμΌλ μ»΄ν¬λνΈμμ μ κ³΅νλ κΈ°λ₯μ νμ©νμ¬ μΆκ°μ μΈ μ΄μ λ μ»μ μ μλ€.

> μ€νμΌλ μ»΄ν¬λνΈ: https://styled-components.com/

- μ€νμΌλ μ»΄ν¬λνΈλ μλ°μ€ν¬λ¦½νΈ νμΌ μμ μ€νμΌμ μμ±νλ CSS-in-JS λΌμ΄λΈλ¬λ¦¬μ΄λ€.
- μ€νμΌμ΄ μ μ©λ μ»΄ν¬λνΈλΌκ³  μκ°νλ©΄ μ΄ν΄νκΈ° μ½λ€.

```shell
> npm install styled-components
```

#### π μ€νμΌλ μ»΄ν¬λνΈ μ¬μ©λ²

- μμ μ½λ

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

#### π μ€νμΌ μ μ©νκΈ°

- μ μ© μ½λ

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

#### π props μ¬μ©νκΈ°

- μ€νμΌλ μ»΄ν¬λνΈμμλ μ€νμΌμ μμ±νλ λ°±ν± μμμ propsμ μ κ·Όν  μ μλ€.

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

#### π attrs μ¬μ©νκΈ°

- μ€νμΌλ μ»΄ν¬λνΈλ₯Ό μ΄μ©νλ©΄ μ€νμΌμ μμ±νλ κ³³μμ μ»΄ν¬λνΈμ μμ±λ μ€μ ν  μ μλ€.
- μμ±μ μ€μ ν  λ μ λ¬λ propsλ₯Ό μ΄μ©ν  μλ μλ€.
- attrsλ₯Ό μ΄μ©νλ©΄ μ€νμΌμ μ€μ νλ κ³³μμ propsμ κ°μ λ°λΌ μ»΄ν¬λνΈμ μμ±μ λ€λ₯΄κ² μ μ©ν  μλ μκ³  ν­μ μΌμ ν μμ±μ λ―Έλ¦¬ μ μν΄λμ μ μλ€.

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

#### π ThemeProvider

- μ€νμΌλ μ»΄ν¬λνΈμ ThemeProviderλ Context APIλ₯Ό νμ©ν΄ μ νλ¦¬μΌμ΄μ μ μ²΄μμ μ€νμΌλ μ»΄ν¬λνΈλ₯Ό μ΄μ©ν  λ λ―Έλ¦¬ μ μν κ°λ€μ μ¬μ©ν  μ μλλ‘ propsλ‘ μ λ¬ν©λλ€.

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

- μνλ themeμ μ¬μ©νκ³  μΆμ μ»΄ν¬λνΈμ μ΅μμ λΆλͺ¨λ₯Ό `ThemeProvider`λ‘ κ°μΈμ€λ€.

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

- μ€νμΌλ μ»΄ν¬λνΈμμ propsλ₯Ό ν΅ν΄ themeμ λ°μ μνλ μ€νμΌμ μ μ©ν  μ μλ€.

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
