# AI text to speech

這是一個使用 javascript 撰寫的語音合成程式，可以將指定的文字轉換成語音並輸出為音訊檔案。

## 使用方法:

step1 : 請先安裝相關的套件。

`npm install
`

step2 : 
在根目錄下新增一個 .env 檔案，並填入以下的環境變數：

`SPEECH_KEY=<your_speech_key>
`

`
SPEECH_REGION=<your_speech_region>
`

請將 <your_speech_key> 與 <your_speech_region> 替換成 Azure 語音服務的金鑰和地區。

step3 :

修改 input.ts 檔案，填入要合成的文字內容。

step4 :
選擇要使用的語音，修改 VoiceNameList.ts 中的 voiceListCN 變數，選擇其中一個語音名稱，並將它指派給 choosenVoice 變數。

step5 :
在終端機中執行 npm start，開始合成語音並輸出為音訊檔案。

## 程式架構 :
speechSynthesis.js: 程式進入點，設定語音合成的相關參數並啟動合成。

input.ts: 存放要合成的文字內容。

VoiceNameList.ts: 存放可用的語音清單。

.env.example: 範例的環境變數設定檔案。

## 開發環境
Node.js v14.17.0
npm v7.19.1


## 使用的套件
microsoft-cognitiveservices-speech-sdk: 語音合成 SDK 庫。

dotenv: 讀取環境變數的套件。
