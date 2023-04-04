// step 0 Make sure the environmental variables are correct

// step 1 Choose a different voice
// //  CN for chinese , ENg for English
const voiceList = require('./voiceNameList.js').voiceListCN
const chosenVoice = voiceList['zh-CN-XiaomengNeural']

// step 2 Modify the content of input.js
const input =
  `
您好，我是 AI 人工智能語音，很高興你能聽到我的聲音
`

// step 3 Execute this program by typing npm start in command line

module.exports = { input, chosenVoice }