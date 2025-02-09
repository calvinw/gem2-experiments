let agent;
let socket;

// Ensure that setupEventListeners assigns geminiAgent to the agent variable.
document.getElementById('disconnectBtn').removeEventListener('click', null);
document.getElementById('disconnectBtn').addEventListener('click', async () => {
    try {
        console.log('Disconnecting...');

        // Close WebSocket if open
        if (window.socket && window.socket.readyState === WebSocket.OPEN) {
            window.socket.close();
        }

        // If agent has a disconnect method, call it; otherwise, clear agent.
        if (agent && typeof agent.disconnect === 'function') {
            await agent.disconnect();
        } else {
            console.log('No disconnect method found on agent, skipping...');
        }
        
        agent = null;
        window.socket = null;
        
        // Update UI
        updateConnectionStatus(false);
        console.log('Disconnected successfully');
        
        // Clear chat history
        document.getElementById('chatHistory').innerHTML = '';
        
    } catch (error) {
        console.error('Error during disconnect:', error);
    }
});

function updateConnectionStatus(isConnected) {
    const disconnectBtn = document.getElementById('disconnectBtn');
    const connectBtn = document.getElementById('connectBtn');
    disconnectBtn.style.display = isConnected ? 'block' : 'none';
    connectBtn.style.display = isConnected ? 'none' : 'block';
}