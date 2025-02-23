let count = 0;
const interval = setInterval(() => {
    console.log("Logging every 5 seconds...");
    count++;
	//muteHotstar();
    if (count >= 2) { // Stops after 2 logs (10 sec)
        clearInterval(interval);
        console.log("Stopped logging.");
    }
}, 5000);

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "mute") {
        muteHotstar();
    }
});

function muteHotstar() {
    const muteButton = document.querySelector('button[data-testid="volume"]');
    if (muteButton) {
        muteButton.click();
        console.log("Muted Hotstar!");
    } else {
        console.log("Mute button not found!");
    }
}
