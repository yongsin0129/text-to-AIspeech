"use strict"
// The following code does not need to be modified, just do the three steps in input.js to get the audio file

require('dotenv').config()

var sdk = require("microsoft-cognitiveservices-speech-sdk")
var readline = require("readline")

const { input } = require('./input.js')
const { chosenVoice } = require('./input.js')

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
    synthesizer.close(() => {
      console.log('Speech synthesizer closed.')
      process.exit()
    })
    synthesizer = null
  },
  function (err) {
    console.trace("err - " + err)
    synthesizer.close()
    synthesizer = null
  })
console.log("Now synthesizing to: " + audioFile)

