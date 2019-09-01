#幹話產生器

## 環境建置與需求

- Node.js v10.15.3

#### npm 套件

- nodemon
- body-parser: ^1.19.0
- express: ^4.17.1
- express-handlebars: ^3.1.0
- handlebars: ^4.1.2

## 安裝與執行步驟

#### 安裝方法 1

在終端機(Terminal)輸入

```
git colone https://github.com/wendyhsiao/trash_talk_generator.git
```

如果在終端機訊息中看見「done」，就表示成功了！

#### 安裝方法 2

先點選 "Clone or download / Download ZIP" 把檔案下載下來，解壓縮。

#### 執行步驟

1.在終端機(Terminal)切換到 trash_talk_generator 目錄下

```
cd trash_talk_generator
```

2.安裝套件

```
npm install
```

3.使用 nodemon 啟動伺服器

```
nodemon app.js
```

4.在瀏覽器輸入網址 `localhost:3000`即可看到內容

## 功能描述

- 可選擇工程師、設計師或創業家其中一個對象
- 點選【產生幹話】按鈕
- 將隨機產生一句對應此職業的幹話內容

## 專案畫面

![image](https://github.com/wendyhsiao/trash_talk_generator/blob/master/public/img/show1.PNG)
