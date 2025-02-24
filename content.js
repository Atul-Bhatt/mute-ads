chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "mute") {
        mute();
    }
});

function mute() {
    const muteButton = document.querySelector('button[data-testid="volume"]');

    if (muteButton && muteButton.getAttribute("aria-label") === "Mute") {
        muteButton.click();
        console.log("Muted Hotstar!");

	// unmute after 20 seconds
	setTimeout(() => {
		unmute();
	}, 20000);

    } else {
        console.log("Mute button not found!");
    }
}

function unmute() {
    const muteButton = document.querySelector('button[data-testid="volume"]');

    if (muteButton && muteButton.getAttribute("aria-label") === "Unmute") {
        muteButton.click();
        console.log("Unmuted Hotstar!");
    } else {
        console.log("Unmute button not found!");
    }
}
