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

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (details.url.includes("bifrost-api.hotstar.com") && details.url.includes("adName=")) {
            chrome.tabs.sendMessage(details.tabId, { action: "mute" });
        }
    },
    { urls: ["*://bifrost-api.hotstar.com/*"] },
   ["blocking"]
);
