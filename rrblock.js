var is_start = null;
chrome.storage.local.get("rrblock_running", function(result){
    is_start = result.rrblock_running;
    console.log(is_start);
    if(is_start=="true") {
        window.location=chrome.extension.getURL('inner.html');
    }
});

