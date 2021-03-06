<details>
<summary>λͺ©μ°¨</summary>

- π Chapter02. λ¦¬μ‘νΈ λ€μ΄ν°λΈ μμνκΈ° [π](#-Chapter02-λ¦¬μ‘νΈ-λ€μ΄ν°λΈ-μμνκΈ°)
  - π κ°λ° νκ²½ μ€λΉνκΈ° [π](#-κ°λ°-νκ²½-μ€λΉνκΈ°)
    - π μμΉλ§¨ [π](#-μμΉλ§¨)
    - π NodeJS μ€μΉ [π](#-NodeJS-μ€μΉ)
    - π νμ΄μ¬ μ€μΉ [π](#-νμ΄μ¬-μ€μΉ)
    - π iOS κ°λ° νκ²½ [π](#-iOS-κ°λ°-νκ²½)
    - π JDK μ€μΉ [π](#-JDK-μ€μΉ)
    - π μλλ‘μ΄λ μ€νλμ€ μ€μΉ [π](#-μλλ‘μ΄λ-μ€νλμ€-μ€μΉ)
    - π μλν° μ€μΉ [π](#-μλν°-μ€μΉ)
  - π λ¦¬μ‘νΈ λ€μ΄ν°λΈ νλ‘μ νΈ λ§λ€κΈ° [π](#-λ¦¬μ‘νΈ-λ€μ΄ν°λΈ-νλ‘μ νΈ-λ§λ€κΈ°)
    - π Expo [π](#-Expo)
    - π λ¦¬μ‘νΈ λ€μ΄ν°λΈ CLI [π](#-λ¦¬μ‘νΈ-λ€μ΄ν°λΈ-CLI)
    - π λ©μΈ νμΌ λ³κ²½ [π](#-λ©μΈ-νμΌ-λ³κ²½)

</details>

## π Chapter02 λ¦¬μ‘νΈ λ€μ΄ν°λΈ μμνκΈ°

### π κ°λ° νκ²½ μ€λΉνκΈ°

- Mac νκ²½μ κΈ°μ€μΌλ‘ μ§ννλ€.

#### π μμΉλ§¨

- νλΈλ₯(Homebrew)λ₯Ό μ΄μ©νμ¬ μ€μΉνλ€.

```shell
> /bin/bash -c "$(curl -fsSL httsp://raw.githubusercontent.com/Homebrew/install/mater/install.sh)"
> brew --version
> brew install watchman
> watchman --version
```

#### π NodeJs μ€μΉ

- νμ¬ JavaScriptλ₯Ό μ΄μ©νμ¬ κ°λ°νκ³  μλ€λ©΄ nodeλ μ€μΉλμ΄μλ€.
- ν₯ν Node.js μ LTSλ²μ μ΄ μλ°μ΄νΈλμμ λ μ΄μ λμνκΈ° μν΄ nvmμ μ¬μ©νλ€.

```shell
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

- μ€μΉκ° μλ£λλ©΄ `.zshrc`νμΌμ μ΄κ³  λ€μ μ½λλ₯Ό μΆκ°νλ€.

```shell
> open ~/.zshrc
```

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

- .zshrcμ μλ‘λ°λ λ°μ΄ν°λ₯Ό μ μ₯ν΄μ£Όκ³  nvmμ΄ μ μ€μΉλμλμ§ νμΈνλ€.

```shell
> source ~/.zshrc
> nvm --version
```

- nvmμ μ΄μ©νμ¬ Node.jsλ₯Ό μ€μΉνλ€.

```shell
> nvm install --lts
> node --version
```

#### π νμ΄μ¬ μ€μΉ

- λ¦¬μ‘νΈ λ€μ΄ν°λΈλ λΉλν  λ νμ΄μ¬μ΄ νμνλ€.
- κ³Όκ±° λ¦¬μ‘νΈ λ€μ΄ν°λΈμμλ νμ΄μ¬2 λ²μ μ μ¬μ©νμΌλ νμ¬λ νμ΄μ¬3 λ²μ κΉμ§ κ°λ₯νλ€.
- Mac νκ²½μμλ κΈ°λ³Έμ μΌλ‘ νμ΄μ¬2 λ²μ μ΄ μ€μΉλμ΄ μλ€.

```shell
> python2 --version
> python3 --version
```

#### π iOS κ°λ° νκ²½

- iOS κ°λ° νκ²½μ Mac νκ²½μμλ§ μ§ν κ°λ₯νλ€.

##### π Xcode μ€μΉ

- Xcodeλ iOSλ₯Ό κ°λ°νλ λ° λ°λμ νμν κ°λ° λκ΅¬μ΄λ€.
- Appstoreμμ Xcodeλ₯Ό μ€μΉνλ©΄ iOS μλ?¬λ μ΄ν° λ° iOS μ±μ λΉλνλ λ° νμν λͺ¨λ  λκ΅¬κ° ν¨κ» μ€μΉλλ€.

> **Command Line Tools**  
> Xcode > Preferences > Locations > Command Line Tools > κ°μ₯ μ΅μ  λ²μ μ μ ν

##### π μ½μ½μν μ€μΉ

- Mac, iOS κ°λ°μ μ¬μ©λλ λΌμ΄λΈλ¬λ¦¬λ₯Ό κ΄λ¦¬ν΄μ£Όλ λκ΅¬μ΄λ€.

```shell
> sudo gem install cocoapods
```

```shell
> pod --version
```

##### π μλ?¬λ μ΄ν°

- κ°μ κΈ°κΈ°μμ νμ€νΈλ₯Ό μ§ννκΈ° μν iOS μλ?¬λ μ΄ν°μ΄λ€.

> **μ€ν λ°©λ²**  
> Xcode menu > Open Developer Tool > Simulator  
> Macμ Spotlight > Simulator.app κ²μ
>
> Siumulator menu > File > Open Device > iPhone 11

#### π JDK μ€μΉ

- Android κ°λ°μ μν Android κ°λ° μΈμ΄μΈ μλ° κ°λ° λκ΅¬ JDK(Java Development Kit)λ₯Ό μ€μΉνλ€.

```shell
> brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```

```shell
> java --version
```

```shell
> javac --version
```

#### π μλλ‘μ΄λ μ€νλμ€ μ€μΉ

- μλλ‘μ΄λ μ€νλμ€λ Android κ°λ°μ μν κ³΅μ IDEλ‘, iOSμ Xcodeμ κ°μ μ­ν μ νλ€.

> **μλλ‘μ΄λ μ€νλμ€:** https://bit.ly/android-ide-download

> **νκ²½ μ€μ **  
> λ°©λ²1. Preferences > Appearance & Behavior > System Settings > Android SDK  
> λ°©λ²2. Configure > SKD Manager
>
> SDK Manager > SDK-Platforms ν­ > Show Package Details μ²΄ν¬ ν μλ ν­λͺ© μ€μΉ
>
> - Android SDK Platform 29
> - Intel x86 Atom_64 System Image λλ Google APIs Intel x86 Atom System Image
>
> SDK Tools ν­ > SHow Package Details μ²΄ν¬ ν μλ ν­λͺ© μ€μΉ
>
> - Android SDK Build-Tools > 29.0.2

- μλλ‘μ΄λ μ€νλμ€μμμ μ§νμ΄ μλ£λλ©΄ .zshrc νμΌμ μ΄μ΄ λ€μ λ΄μ©μ μΆκ°νλ€.

- .zshrc νμΌ

```shell
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

- μ²« μ€μ΄ κ°λ¦¬ν€λ μμΉλ μ€μΉλ μλλ‘μ΄λ SDKμ μμΉμ λμΌν΄μΌ νλ€.
- μλλ‘μ΄λ SDKμ μμΉλ `SDK Manager > Android SDK Location`μμ νμΈ κ°λ₯νλ€.
- μ²« μ€μ μμΈν λ΄μ©μ μλμ λͺλ Ήμ΄λ₯Ό ν΅ν΄ μ μ μλ€.

```shell
> echo $HOME/Library/Android/sdk
```

- λ κ²½λ‘κ° λμΌνλ€λ©΄ μ€μΉκ° μ μμ μΌλ‘ μ§νλμλμ§ νμΈνλ€.

```shell
> source ~/.zshrc
```

```shell
> adb --version
```

> **NOTE**  
> adb: Android Debug Bridge

##### π μλ?¬λ μ΄ν°

- `Configure > AVD Manager > Virtual Device > Pixel3`λ₯Ό ν΅ν΄ κΈ°κΈ° μ ν ν `Next`
- `Select a system Image > x86 Images ν­ > API Level: 29, ABI: x86, Target: Android 10.0`ν­λͺ© μ ν ν κΈ°κΈ° μ ν μλ£
- `AVD Manager > λλΈ ν΄λ¦­ λλ Actionsμ λΉμ μμ λ²νΌ ν΄λ¦­`

#### π μλν° μ€μΉ

- VS Codeλ‘ μ€μΉνλ€.

### π λ¦¬μ‘νΈ λ€μ΄ν°λΈ νλ‘μ νΈ λ§λ€κΈ°

- λ¦¬μ‘νΈ λ€μ΄ν°λΈ νλ‘μ νΈλ₯Ό μμ±νλ λ°©λ²μ λ κ°μ§λ‘, Expoμ λ¦¬μ‘νΈ λ€μ΄ν°λΈ CLIκ° μλ€.

#### π Expo

- Expoλ λ¦¬μ‘νΈ λ€μ΄ν°λΈλ₯Ό νΈνκ² μ¬μ©ν  μ μλλ‘ λ―Έλ¦¬ μ¬λ¬ κ°μ§ μ€μ μ΄ λμ΄ μλ ν΄μ΄λ€.
- μλμ ννμ΄μ§ μ£Όμλ₯Ό ν΅ν΄ νμκ°μνλ€.

> **Expo ννμ΄μ§:** https://expo.io

##### π μ₯μ 

- Expoλ λ¦¬μ‘νΈ λ€μ΄ν°λΈλ₯Ό μ²μ μμνλ μ¬λλ μ κ·ΌνκΈ° νΈνκ² λμ΄ μμΌλ©° μ΅μ’μ μΌλ‘ μμ±λ νλ‘μ νΈλ₯Ό μ½κ² λ°°ν¬ λ° κ΄λ¦¬ν  μ μλλ‘ λ€μν κΈ°λ₯μ μ κ³΅νλ€.
- λ¦¬μ‘νΈ λ€μ΄ν°λΈ μΉμ μ§μνμ¬ iOS, AndroidλΏλ§ μλλΌ μΉλ ν¨κ» κ°λ°ν  μ μλ€.

##### π λ¨μ 

- Expoμμ μ κ³΅νλ APIλ§ μ¬μ©ν  μ μλ€.
- νμν κΈ°λ₯μ΄ μ κ³΅λμ§ μμ κ²½μ° λ€μ΄ν°λΈ λ¬λμ μΆκ°λ‘ λ§λ€μ΄μ μ¬μ©νλ κ²μ΄ λΆκ°λ₯νλ€.
- λ¦¬μ‘νΈ λ€μ΄ν°λΈ CLIλ₯Ό μ΄μ©νμ λ λΉλ νμΌμ ν¬κΈ°κ° ν¬λ€.

##### π Expo μ€μΉμ νλ‘μ νΈ μμ±

- Expoλ₯Ό μ€μΉνκ³ , expo νλ‘μ νΈλ₯Ό μμ±νλ€.

```shell
> npm install --global expo-cli
> expo init my-first-expo
? Choose a template
> Blank a minimal app as clean as an empty canvas
```

##### π Expo μ€μΉμ νλ‘μ νΈ μ€ν

```shell
> cd my-first-expo && npm start
```

```shell
Starting project
Expo Devtools is running at http://localhost:19002

βΊ Press a β open Android
βΊ Press i β open iOS simulator
βΊ Press w β open web

βΊ Press r β reload app
βΊ Press m β toggle menu
βΊ Press d β show developer tools
βΊ shift+d β toggle auto opening developer tools on startup (enabled)
```

- Press a, Press i λ₯Ό ν΅ν΄ Android emulatorμ iOS simulatorλ₯Ό μ€ννλ€.

> **NOTE**  
> Android emulatorμ κ²½μ° μλλ‘μ΄λ μ€νλμ€μμ κ°μ λλ°μ΄μ€λ₯Ό μμ±ν λ€μ ν°λ―Έλμμ `Press a` λλ `Expo Devtools > Running Android`λ₯Ό ν΅ν΄ μ€ννλ€. μ΄λ ν°λ―Έλμμ Downloadλλ©΄μ Android emulatorκ° μ μμ μΌλ‘ λμνλ κ²μ νμΈν  μ μλ€.

##### π λ‘κ·Έ νμΈνκΈ°

- μμ±λ νλ‘μ νΈμ App.jsνμΌμ λ€μκ³Ό κ°μ΄ λ³κ²½νλ€.

```shell
> code ./
```

```javascript
// my-first-expo/App.js
...
export default function App() {
  console.log("Expo Devtools Log Test");
  return (...);
}
...
```

- `Expo Devtools`μ λ¬Έμμ΄μ΄ μ μμ μΌλ‘ μΆλ ₯λλ κ²μ νμΈνλ€.

#### π λ¦¬μ‘νΈ λ€μ΄ν°λΈ CLI

- Expoμ λ°λλ‘ λ¦¬μ‘νΈ λ€μ΄ν°λΈ CLIμμλ νμν κΈ°λ₯μ΄ μμ κ²½μ° λͺ¨λμ μ§μ  λ§λ€μ΄ μ¬μ©ν  μ μλ€.
- EXpoμ λΉν΄ λ°°ν¬κ° λΆνΈνκ³  λ¦¬μ‘νΈ λ€μ΄νλ₯΄λ₯΄ μ²­λ― λ€λ£¨λ μ΄μ©μμκ² μ’ λ μ΄λ ΅κ² λκ»΄μ§λ€λ λ¨μ μ΄ μλ€.

```shell
> npx react-native init MyFirstCLI
```

```shell
Welcome to React Native!
Run instructions for Android:
    β’ Have an Android emulator running (quickest way to get started), or a device connected.
    β’ cd "/Users/keem/Documents/study-react-native-expo/chapter02/MyFirstCLI" && npx react-native run-android

  Run instructions for iOS:
    β’ cd "/Users/keem/Documents/study-react-native-expo/chapter02/MyFirstCLI" && npx react-native run-ios
    - or -
    β’ Open MyFirstCLI/ios/MyFirstCLI.xcworkspace in Xcode or run "xed -b ios"
    β’ Hit the Run button

  Run instructions for macOS:
    β’ See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.
```

> **NOTE**  
> λ¦¬μ‘νΈ λ€μ΄ν°λΈ CLI νλ‘μ νΈμ κ²½μ° νλ‘μ νΈ μ΄λ¦μΌλ‘ μλ¬Έκ³Ό μ«μλ§ μλ ₯ν  μ μλ€.  
> λ€μ λͺλ Ήμ΄ μ²λΌ νΉμ  λ²μ μ λ¦¬μ‘νΈ λ€μ΄ν°λΈλ₯Ό μ¬μ©ν΄μ νλ‘μ νλ₯΄ μμ±ν  μλ μλ€.
>
> npx react-native init νλ‘μ νΈμ΄λ¦ --version x.xx.x

##### π νλ‘μ νΈ μ€ν

- νλ‘μ νΈ ν΄λλ‘ μ΄λνμ¬ νλ‘μ νΈλ₯Ό μ€ννλ€.

- run android

```shell
> cd MyFirstCLI && npm run android
```

λλ

```shell
> cd MyFirstCLI && npx react-native run-android
```

- run ios

```shell
> cd MyFirstCLI && npm run ios
```

λλ

```shell
> cd MyFirstCLI && npx react-native run-ios
```

- ν°λ―Έλ μ°½ νλκ° μΆκ°λ‘ μ΄λ¦¬κ³  Metroκ° μ€νλλ€.

```shell
Welcome to Metro!
Fast - Scalable - Integrated

To reload the app press "r"
To open developer menu press "d"

BUNDLE ./index.js
LOG Running "MyFirstCLI" with {"rootTag":1}
BUNDLE ./index.js
LOG Running "MyFirstCLI" with {"rootTag":1,"initialProps":{}}
```

#### π λ©μΈ νμΌ λ³κ²½

- Expo νλ‘μ νΈ

```shell
my-first-expo
βββ assets
βββ src
β   βββ dir...
β   βββ App.js
βββ App.js
βββ package.json
```

- λ¦¬μ‘νΈ λ€μ΄ν°λΈ CLI νλ‘μ νΈ

```shell
MyFirstCLI
βββ android
βββ ios
βββ src
β   βββ dir...
β   βββ App.js
βββ index.js
βββ package.json
```
