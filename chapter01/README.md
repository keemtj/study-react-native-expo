<details>
<summary>๋ชฉ์ฐจ</summary>

- ๐ Chapter01. ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ๋? [๐](#-Chapter01-๋ฆฌ์กํธ-๋ค์ดํฐ๋ธ๋?)
  - ๐ ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ์ ์ฅ์ ๊ณผ ๋จ์  [๐](#-๋ฆฌ์กํธ-๋ค์ดํฐ๋ธ์-์ฅ์ ๊ณผ-๋จ์ )
    - ๐ ์ฅ์  [๐](#-์ฅ์ )
    - ๐ ๋จ์  [๐](#-๋จ์ )
  - ๐ ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ์ ๋์ ๋ฐฉ์ [๐](#-๋ฆฌ์กํธ-๋ค์ดํฐ๋ธ์-๋์-๋ฐฉ์)
    - ๐ ๋ธ๋ฆฟ์ง [๐](#-๋ธ๋ฆฟ์ง)
    - ๐ ๊ฐ์ DOM [๐](#-๊ฐ์-DOM)
    - ๐ JSX [๐](#-JSX)

</details>

## ๐ Chapter01 ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ๋?

- ๋ธ๋ผ์ฐ์ ๊ฐ ์๋ iOS์ Android์์ ๋์ํ๋ ๋ค์ดํฐ๋ธ ๋ชจ๋ฐ์ผ ์ ํ๋ฆฌ์ผ์ด์์ ๋ง๋๋ ์๋ฐ์คํฌ๋ฆฝํธ์ ํ๋ ์์ํฌ์ด๋ค.
- ํ์ด์ค๋ถ, ์ธ์คํ๊ทธ๋จ, ํํฐ๋ ์คํธ, ์๋งํธ ๋ฑ์ด ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ๋ฅผ ์ด์ฉํด ๊ฐ๋ฐ๋์๋ค.

### ๐ ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ์ ์ฅ์ ๊ณผ ๋จ์ 

- ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ๊ฐ ์ถ์๋๋ฉด์ Objective-c ๋๋ Java๋ฅผ ์ฌ์ฉํ์ฌ ๊ฐ๋ฐํ์ง ์์๋ ๋ชจ๋ฐ์ผ ์ ํ๋ฆฌ์ผ์ด์์ ์ถ์ํ  ์ ์๊ฒ ๋์๋ค.

#### ๐ ์ฅ์ 

- ํ๋ซํผ ๊ฐ ๊ณต์ ๊ฐ ๊ฐ๋ฅํด์ ๋ ํ๋ซํผ(iOS, Android)์ ๋์์ ๊ฐ๋ฐํ  ์ ์๋ค.
- ์๋ฐ์คํฌ๋ฆฝํธ๋ง ์๊ณ  ์์ผ๋ฉด ์ฝ๊ฒ ์์ํ  ์ ์๋ค.
- ์์ฑ๋ ๊ตฌ์ฑ ์์๋ค์ด ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ๋ค.
- Fast Refresh ๊ธฐ๋ฅ์ ์ ๊ณตํ์ฌ '์์ , ์ปดํ์ผ, ์๋ก๊ณ ์นจ'๊ฐ์ ๋ฒ๊ฑฐ๋ก์ด ์์์ด ์๋ต๋๊ณ  ์ฆ๊ฐ์ ์ธ ์์  ๋ด์ฉ ํ์ธ์ด ๊ฐ๋ฅํ๋ค.
- ๋ค์ดํฐ๋ธ ์ฝ๋๋ก ์ ํ๋๋ค.

#### ๐ ๋จ์ 

- Android๋ iOS์์ ์๋ฐ์ดํธ๋ฅผ ํตํด ์๋ก์ด API๋ฅผ ์ ๊ณตํ๋๋ผ๋ ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ๊ฐ ์ด๋ฅผ ์ง์ํ๊ธฐ๊น์ง ์๊ฐ์ด ๊ฑธ๋ฆฐ๋ค.
- ์ ์ง๋ณด์์ ์ด๋ ค์์ด ์๋ค.

### ๐ ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ์ ๋์ ๋ฐฉ์

#### ๐ ๋ธ๋ฆฟ์ง

- ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๋ฅผ ์ด์ฉํด ๋ค์ดํฐ๋ธ ๊ณ์ธต๊ณผ ํต์ ํ  ์ ์๋๋ก ์ฐ๊ฒฐํ๋ ์ญํ ์ ํ๋ ๋ธ๋ฆฟ์ง(Bridge)๊ฐ ์๋ค.
- ๋ธ๋ฆฟ์ง๋ ์๋ฐ์คํฌ๋ฆฝํธ Thread์์ ์ ๋ณด๋ฅผ ๋ฐ์ ๋ค์ดํฐ๋ธ๋ก ์ ๋ฌํ๋ค.
- ๋ค์ดํฐ๋ธ ์์ญ์๋ UI๋ฅผ ๋ด๋นํ๋ Main Thread๊ฐ ์๊ณ , ๋ ์ด์์์ ๊ณ์ฐํ๋ ๋ฐ ์ฌ์ฉํ๋ ๋ฐฑ๊ทธ๋ผ์ด๋ ์ค๋ ๋์ธ Shadow Thread๊ฐ ์๋ค. ๋ค์ดํฐ๋ธ ๋ชจ๋๋ ์๋๋ฐ, ๊ฐ ๋ชจ๋์๋ ์์ฒด Thread๊ฐ ์๋ค.
- ๊ธฐ๊ธฐ์ ํต์ ํ๋ ๋ชจ๋  ์๋ฐ์คํธ๋ฆฝํธ์ ๊ธฐ๋ฅ์ ๋ถ๋ฆฌ๋ Thread๋ก ์ฒ๋ฆฌํ๋ฉด์ ์ฑ๋ฅ ํฅ์์ ๊ฐ์ ธ์จ๋ค.

#### ๐ ๊ฐ์ DOM

- ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ๋ ๋ฆฌ์กํธ์ ๊ธฐ๋ฐ์ ๋๊ณ  ์ ์๋์๊ธฐ ๋๋ฌธ์ ์ด์ ๋ง์ฐฌ๊ฐ์ง๋ก ๊ฐ์ DOM์ด ์กด์ฌํ๋ค.

#### ๐ JSX

- ์๋ฐ์คํฌ๋ฆฝํธ์ ํ์ฅ ๋ฌธ๋ฒ์ผ๋ก XML๊ณผ ๋งค์ฐ ์ ์ฌํ๋ค.
- UI ์์์ ํ  ๋ ๊ฐ๋์ฑ์ ๋์์ ์ฃผ๋ ๋ฑ ์ฌ๋ฌ ๊ฐ์ง ์ฅ์ ์ด ์๋ค.
