(function () {
  
  "use strict"
  require('dotenv').config()
  const voiceList = require('./voiceNameList.js').voiceListCN

  // step 0 Make sure the environmental variables are correct

  // step 1 Choose a different voice
  const chosenVoice = voiceList['zh-CN-XiaomengNeural']

  // step 2 Modify the content of input.js
  const { input } = require('./input.js')

  // step 3 Execute this program

  // The following code does not need to be modified, just do the above three steps to get the audio file
  var sdk = require("microsoft-cognitiveservices-speech-sdk")
  var readline = require("readline")

  var audioFile = "YourAudioFile.mp3"
  // This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
  const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION)
  const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile)

  // The language of the voice that speaks.
  speechConfig.speechSynthesisVoiceName = chosenVoice

  // Create the speech synthesizer.
  var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig)

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


  // Start the synthesizer and wait for a result.
  synthesizer.speakTextAsync(input,
    function (result) {
      if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
        console.log("synthesis finished.")
      } else {
        console.error("Speech synthesis canceled, " + result.errorDetails +
          "\nDid you set the speech resource key and region values?")
      }
      synthesizer.close()
      synthesizer = null
    },
    function (err) {
      console.trace("err - " + err)
      synthesizer.close()
      synthesizer = null
    })
  console.log("Now synthesizing to: " + audioFile)

}())