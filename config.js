function enter() {
  window.open("site.html","_self")
}
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
    enter();
    return false;
  }
}
function startdetect2() {
  var u = detectmob2()
}
function detectmob2() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    mobile=1;
    return true;
  }
 else {
    mobile=0;
    return false;
  }
}
var op = 0;
var op2 = 0;
var op3 = 0;
var op4 = 0;
var op5 = 0;
var opfinal = 0;
var puta
function opening() {
  var x = document.getElementById('p1');
  x.style.opacity=1;
  isopening();
}
function isopening() {
  op++;
  if(op>40){clearInterval(puta);isopening2(); return}
  var x = document.getElementById('p1');
  x.style.fontSize=op + "px";
  puta = setTimeout("isopening()",50);
}
function isopening2() {
  op2++;
  if(op2>15){
    var x = document.getElementById('p1');
    x.style.opacity=0;
    clearInterval(puta);
    isopening3();
    return
  }
  puta = setTimeout("isopening2()",50);
}
function isopening3(){
  var x = document.getElementById('d1');
  var x2 = document.getElementById('d2');
  x.style.width="0px";
  x.style.borderBottomRightRadius="200%";
  x2.style.width="0px";
  x2.style.borderBottomLeftRadius="200%";
  isopening4();
}
function isopening4() {
  op3++;
  if(op3<40) {puta = setTimeout("isopening4()",50); return }
  else { clearInterval(puta); isopening5(); return }
}
function isopening5() {
  var x = document.getElementById('nn');
  if(mobile==0){
    x.style.top="10%";
    x.style.left="5%";
    x.style.margin="0px";
    x.style.marginRight="-5%";
    x.style.width="90%";
    x.style.height="80%";
    x.style.backgroundColor="white";
    x.style.borderWidth="thin";
    x.style.border="solid gray";
    x.style.boxShadow="5px 5px 5px darkgray";
  } else {
    x.style.margin="0px";
    x.style.width="100%";
    x.style.height="100%";
    x.style.backgroundColor="white";
    x.style.borderWidth="thin";
    x.style.border="solid gray";
    x.style.boxShadow="5px 5px 5px darkgray";
  }
  isopening6();
}
function isopening6() {
  op4++;
  if(op4>20){clearInterval(puta); isopening7(); }
  else { puta = setTimeout("isopening6()",50); return }
}
function isopening7() {
  op5++;
  var x2 = document.body;
  var x = document.getElementById('p2');
  x.style.opacity="1";
  x.innerHTML="Criador do Website: Márcio Carvalho<br>Para o Curso: Técnicos de Multimédia<br>IEFP Setúbal";
  isopening8();
}
function isopening8() {
  opfinal++;
  if(opfinal<50){puta = setTimeout("isopening8()",50); return }
  else {
  clearInterval(puta);
  var x = document.getElementById('p2');
  x.style.opacity="0";
  puta = setTimeout("isopening9()",3300);
}
}
function isopening9() {
  clearInterval(puta);
  window.open("inicio.html","_self");
}
