var event = document.createEvent("MouseEvents");
event.initEvent("click", false, true);
document.querySelectorAll("table > tbody form input")[0].dispatchEvent(event);

chrome.extension.sendMessage({
	action: "request",
    source: true
});