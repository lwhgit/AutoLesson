var ids = [2479];
var index = 0;
var first = true;

function executeReload() {
	chrome.tabs.executeScript(null, {file: "reload.js"}, function() {
		var lastError = chrome.extension.lastError;
		
		if(lastError) {
			alert("WRANING : " + lastError.message);
		}
	});
}

function executeCheck() {
	chrome.tabs.executeScript(null, {file: "check.js"}, function() {
		var lastError = chrome.extension.lastError;
		
		if(lastError) {
			alert("WRANING : " + lastError.message);
		}
	});
}

function executeRequest() {
	chrome.tabs.executeScript(null, {file: "request.js"}, function() {
		var lastError = chrome.extension.lastError;
		
		if(lastError) {
			alert("WRANING : " + lastError.message);
		}
	});
}

function openWindow() {
	if (ids.length == index) return;
	
	window.open("https://mygarim.cafe24.com/sugang/student/order.php?LB_no=" + ids[index] + "&cmd=&flag=&y1=&y2=&hh=&field=&str=&returl=consent.php");
	index ++;
}

chrome.extension.onMessage.addListener(function(request, sender) {
	/*if (request.action == "popup") {
		if (request.source) {
			executeReload();
		}
	} else */if (request.action == "check") {
		if (request.source) {
			openWindow();
		} else {
			executeReload();
		}
	} else if (request.action == "request") {
		if (request.source) {
			openWindow();
		}
	}
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo.status == "loading") {
		if (tab.url.startsWith("https://mygarim.cafe24.com/sugang/student/consent.php")) {
			executeCheck();
		} else if (tab.url.startsWith("https://mygarim.cafe24.com/sugang/student/order.php?LB_no=")) {
			executeRequest();
		}
	}
});