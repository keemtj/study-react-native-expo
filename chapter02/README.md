<details>
<summary>목차</summary>

- 📗 Chapter01. 리액트 네이티브란? [🔗](#-Chapter02-리액트-네이티브-시작하기)
  - 📖 개발 환경 준비하기 [🔗](#-개발-환경-준비하기)
    - 🔖 왓치맨 [🔗](#-왓치맨)
    - 🔖 NodeJS 설치 [🔗](#-NodeJS-설치)
    - 🔖 파이썬 설치 [🔗](#-파이썬-설치)
    - 🔖 iOS 개발 환경 [🔗](#-iOS-개발-환경)
    - 🔖 JDK 설치 [🔗](#-JDK-설치)
    - 🔖 안드로이드 스튜디오 설치 [🔗](#-안드로이드-스튜디오-설치)
    - 🔖 에디터 설치 [🔗](#-에디터-설치)
  - 📖 리액트 네이티브 프로젝트 만들기 [🔗](#-리액트-네이티브-프로젝트-만들기)
    - 🔖 Expo [🔗](#-Expo)
    - 🔖 리액트 네이티브 CLI [🔗](#-리액트-네이티브-CLI)
    - 🔖 메인 파일 변경 [🔗](#-메인-파일-변경)

</details>

## 📗 Chapter02 리액트 네이티브 시작하기

### 📖 개발 환경 준비하기

- Mac 환경을 기준으로 진행한다.

#### 🔖 왓치맨

- 홈브류(Homebrew)를 이용하여 설치한다.

```shell
> /bin/bash -c "$(curl -fsSL httsp://raw.githubusercontent.com/Homebrew/install/mater/install.sh)"
> brew --version
> brew install watchman
> watchman --version
```

#### 🔖 NodeJs 설치

- 현재 JavaScript를 이용하여 개발하고 있다면 node는 설치되어있다.
- 향후 Node.js 의 LTS버전이 업데이트되었을 때 이에 대응하기 위해 nvm을 사용한다.

```shell
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

- 설치가 완료되면 `.zshrc`파일을 열고 다음 코드를 추가한다.

```shell
> open ~/.zshrc
```

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

- .zshrc에 새로바뀐 데이터를 저장해주고 nvm이 잘 설치되었는지 확인한다.

```shell
> source ~/.zshrc
> nvm --version
```

- nvm을 이용하여 Node.js를 설치한다.

```shell
> nvm install --lts
> node --version
```

#### 🔖 파이썬 설치

- 리액트 네이티브는 빌드할 때 파이썬이 필요하다.
- 과거 리액트 네이티브에서는 파이썬2 버전을 사용했으나 현재는 파이썬3 버전까지 가능하다.
- Mac 환경에서는 기본적으로 파이썬2 버전이 설치되어 있다.

```shell
> python2 --version
> python3 --version
```

#### 🔖 iOS 개발 환경

- iOS 개발 환경은 Mac 환경에서만 진행 가능하다.

##### 📎 Xcode 설치

- Xcode는 iOS를 개발하는 데 반드시 필요한 개발 도구이다.
- Appstore에서 Xcode를 설치하면 iOS 시뮬레이터 및 iOS 앱을 빌드하는 데 필요한 모든 도구가 함께 설치된다.

> **Command Line Tools**  
> Xcode > Preferences > Locations > Command Line Tools > 가장 최신 버전을 선택

##### 📎 코코아팟 설치

- Mac, iOS 개발에 사용되는 라이브러리를 관리해주는 도구이다.

```shell
> sudo gem install cocoapods
```

```shell
> pod --version
```

##### 📎 시뮬레이터

- 가상 기기에서 테스트를 진행하기 위한 iOS 시뮬레이터이다.

> **실행 방법**  
> Xcode menu > Open Developer Tool > Simulator  
> Mac의 Spotlight > Simulator.app 검색
>
> Siumulator menu > File > Open Device > iPhone 11

#### 🔖 JDK 설치

- Android 개발을 위한 Android 개발 언어인 자바 개발 도구 JDK(Java Development Kit)를 설치한다.

```shell
> brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```

```shell
> java --version
```

```shell
> javac --version
```

#### 🔖 안드로이드 스튜디오 설치

- 안드로이드 스튜디오는 Android 개발을 위한 공식 IDE로, iOS의 Xcode와 같은 역할을 한다.

> **안드로이드 스튜디오:** https://bit.ly/android-ide-download

> **환경 설정**  
> 방법1. Preferences > Appearance & Behavior > System Settings > Android SDK  
> 방법2. Configure > SKD Manager
>
> SDK Manager > SDK-Platforms 탭 > Show Package Details 체크 후 아래 항목 설치
>
> - Android SDK Platform 29
> - Intel x86 Atom_64 System Image 또는 Google APIs Intel x86 Atom System Image
>
> SDK Tools 탭 > SHow Package Details 체크 후 아래 항목 설치
>
> - Android SDK Build-Tools > 29.0.2

- 안드로이드 스튜디오에서의 진행이 완료되면 .zshrc 파일을 열어 다음 내용을 추가한다.

- .zshrc 파일

```shell
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

- 첫 줄이 가리키는 위치는 설치된 안드로이드 SDK의 위치와 동일해야 한다.
- 안드로이드 SDK의 위치는 `SDK Manager > Android SDK Location`에서 확인 가능하다.
- 첫 줄의 자세한 내용은 아래의 명령어를 통해 알 수 있다.

```shell
> echo $HOME/Library/Android/sdk
```

- 두 경로가 동일하다면 설치가 정상적으로 진행되었는지 확인한다.

```shell
> source ~/.zshrc
```

```shell
> adb --version
```

> **NOTE**  
> adb: Android Debug Bridge

##### 📎 에뮬레이터

- `Configure > AVD Manager > Virtual Device > Pixel3`를 통해 기기 선택 후 `Next`
- `Select a system Image > x86 Images 탭 > API Level: 29, ABI: x86, Target: Android 10.0`항목 선택 후 기기 선택 완료
- `AVD Manager > 더블 클릭 또는 Actions의 녹색 시작 버튼 클릭`

#### 🔖 에디터 설치

- VS Code로 설치한다.

### 📖 리액트 네이티브 프로젝트 만들기

- 리액트 네이티브 프로젝트를 생성하는 방법은 두 가지로, Expo와 리액트 네이티브 CLI가 있다.

#### 🔖 Expo

- Expo는 리액트 네이티브를 편하게 사용할 수 있도록 미리 여러 가지 설정이 되어 있는 툴이다.
- 아래의 홈페이지 주소를 통해 회원가입한다.

> **Expo 홈페이지:** https://expo.io

##### 📎 장점

- Expo는 리액트 네이티브를 처음 시작하는 사람도 접근하기 편하게 되어 있으며 최종적으로 완성된 프로젝트를 쉽게 배포 및 관리할 수 있도록 다양한 기능을 제공한다.
- 리액트 네이티브 웹을 지원하여 iOS, Android뿐만 아니라 웹도 함께 개발할 수 있다.

##### 📎 단점

- Expo에서 제공하는 API만 사용할 수 있다.
- 필요한 기능이 제공되지 않을 경우 네이티브 묘듈을 추가로 만들어서 사용하는 것이 불가능하다.
- 리액트 네이티브 CLI를 이용했을 때 빌드 파일의 크기가 크다.

##### 📎 Expo 설치와 프로젝트 생성

- Expo를 설치하고, expo 프로젝트를 생성한다.

```shell
> npm install --global expo-cli
> expo init my-first-expo
? Choose a template
> Blank a minimal app as clean as an empty canvas
```

##### 📎 Expo 설치와 프로젝트 실행

```shell
> cd my-first-expo && npm start
```

```shell
Starting project
Expo Devtools is running at http://localhost:19002

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press d │ show developer tools
› shift+d │ toggle auto opening developer tools on startup (enabled)
```

- Press a, Press i 를 통해 Android emulator와 iOS simulator를 실행한다.

> **NOTE**  
> Android emulator의 경우 안드로이드 스튜디오에서 가상 디바이스를 생성한 다음 터미널에서 `Press a` 또는 `Expo Devtools > Running Android`를 통해 실행한다. 이때 터미널에서 Download되면서 Android emulator가 정상적으로 동작하는 것을 확인할 수 있다.

##### 📎 로그 확인하기

- 생성된 프로젝트의 App.js파일을 다음과 같이 변경한다.

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

- `Expo Devtools`에 문자열이 정상적으로 출력되는 것을 확인한다.

#### 🔖 리액트 네이티브 CLI

- Expo와 반대로 리액트 네이티브 CLI에서는 필요한 기능이 있을 경우 모듈을 직접 만들어 사용할 수 있다.
- EXpo에 비해 배포가 불편하고 리액트 네이팁르르 청므 다루는 이용자에게 좀 더 어렵게 느껴진다는 단점이 있다.

```shell
> npx react-native init MyFirstCLI
```

```shell
Welcome to React Native!
Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/keem/Documents/study-react-native-expo/chapter02/MyFirstCLI" && npx react-native run-android

  Run instructions for iOS:
    • cd "/Users/keem/Documents/study-react-native-expo/chapter02/MyFirstCLI" && npx react-native run-ios
    - or -
    • Open MyFirstCLI/ios/MyFirstCLI.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.
```

> **NOTE**  
> 리액트 네이티브 CLI 프로젝트의 경우 프로젝트 이름으로 영문과 숫자만 입력할 수 있다.  
> 다음 명령어 처럼 특정 버전의 리액트 네이티브를 사용해서 프로젝틀르 생성할 수도 있다.
>
> npx react-native init 프로젝트이름 --version x.xx.x

##### 📎 프로젝트 실행

- 프로젝트 폴더로 이동하여 프로젝트를 실행한다.

- run android

```shell
> cd MyFirstCLI && npm run android
```

또는

```shell
> cd MyFirstCLI && npx react-native run-android
```

- run ios

```shell
> cd MyFirstCLI && npm run ios
```

또는

```shell
> cd MyFirstCLI && npx react-native run-ios
```

- 터미널 창 하나가 추가로 열리고 Metro가 실행된다.

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

#### 🔖 메인 파일 변경

- Expo 프로젝트

```shell
my-first-expo
├── assets
├── src
│   ├── dir...
│   └── App.js
├── App.js
└── package.json
```

- 리액트 네이티브 CLI 프로젝트

```shell
MyFirstCLI
├── android
├── ios
├── src
│   ├── dir...
│   └── App.js
├── index.js
└── package.json
```
