import { GeminiAgent } from './main/agent.js';
import { getConfig, getWebsocketUrl, MODEL_SAMPLE_RATE } from './config/config.js';
import { ChatManager } from './chat/chat-manager.js';

import { setupEventListeners } from './dom/events.js';

const url = getWebsocketUrl();
const config = getConfig();


const chatManager = new ChatManager();

const geminiAgent = new GeminiAgent({
    url,
    config,
    modelSampleRate: MODEL_SAMPLE_RATE
});

// Handle chat-related events
geminiAgent.on('transcription', (transcript) => {
    chatManager.updateStreamingMessage(transcript);
});

geminiAgent.on('interrupted', () => {
    chatManager.finalizeStreamingMessage();
    if (!chatManager.lastUserMessageType) {
        chatManager.addUserAudioMessage();
    }
});

geminiAgent.on('turn_complete', () => {
    chatManager.finalizeStreamingMessage();
});

geminiAgent.connect();

setupEventListeners(geminiAgent);
