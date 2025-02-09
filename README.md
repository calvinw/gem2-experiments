The following was taken from original project here: [gemini-2-live-api-demo](https://github.com/viaanthroposbenevolentia/gemini-2-live-api-demo/)

We have simiplified the code considerably removing the tools and the
transcribers for now.

See our github pages version here:

#### [gem2-experiments](https://calvinw.github.io/gem2-experiments/)

First you must put in your Gemini API key in the settings.

There also you pick the output modality (Response Modality) of the model:
You can choose either Text or Audio.

## Outputs 

### Response Modality (Text or Audio) - How the Model Responds

If you choose Text all responses from the LLM will be in text and will go in the chat window as text.

If you choose Audio all responses from the LLM will be in audio and they will not be printed in the chat window.

The model only uses one response modality at a time at the moment (Text or Audio but not
both)

Once you pick the LLM response modality you can begin input prompting.

Note:  
- Changing the response modality currently resets the chat completely and turns off any prompting modalities you are using.

## Inputs 

### Prompting Modalities (Webcam, Screenshare, Mic) - What You Send 

You can turn these on optionally:

1) Mic - here you will be able to speak audio and the model will hear that. 
The audio will not be printed as text in the chat window though.

2) Webcam - here you will activate a webcam that should appear in preview above the chat window 

3) ScreenShare - you can choose to share a window or tab with the model.

When you have Webcam and Screenshare at the same time, the model will sometimes get confused since it recieves everything as just an image. So you might have to distinguish the images sometimes when you refer to them

