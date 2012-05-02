/*****************
Actions for Buried Alive extension

******************/

function add_bookmark() {
	var title = document.title;
	var timestamp = Date.now();
	var url;
	chrome.tabs.getSelected(null, function(tab) {
        url = tab.url;
        console.log(tab.url);
        console.log(tab.title);
        console.log(Date.now());
    });
	
	//alert(title + " " + url + " " + timestamp);
}

function write_stuff() {
	console.log("Dave is rad");
}