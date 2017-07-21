function startdetect() {
  var u = detectmob()
}
var mobile = 0;
function detectmob() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    mobile=1;
    var x = document.getElementById('st');
    x.style.left="15%";
    return true;
  }
 else {
    mobile=0;
    return false;
  }
}
