$(document).ready(function() {
  //jQuery('#qrcode').qrcode("this plugin is great");
  var myURL = "not set yet";
  chrome.tabs.getSelected(null,function(tab){
    myURL=tab.url;
    console.log(myURL);
    jQuery('#qrcodeTable').qrcode({
      render  : "table",
      text  : myURL
    });
  });
});

