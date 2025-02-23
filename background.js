chrome.runtime.onInstalled.addListener(() => {
	console.log("Mute Advertisement Extension Installed!");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === "complete") {
		console.log("Tab updated: ", tab.url);
	}
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "reload_extension") {
        chrome.runtime.reload();
    }
});
