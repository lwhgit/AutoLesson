var lists = document.querySelectorAll("table tbody table tbody tr table tbody table tr td table tbody tr");
var flag = false;
for (var  i = 0;i < lists.length;i ++) {
	var a = lists[i].querySelector("td font a");
	if (a == null) continue;
	var btnimg = a.querySelector("img").getAttribute("src");
	var link = a.getAttribute("href");
	var id = parseInt(link.substring(link.indexOf("LB_no=") + 6, link.indexOf("&cmd=")));
	if (!(btnimg.endsWith("btn_preview.gif"))) {
		flag = true;
	}
}

chrome.extension.sendMessage({
	action: "check",
	source: flag
});