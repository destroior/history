var menu = 0;
function myFunction() {
    var x = document.getElementById("submenu");
    if(menu==0) {
      menu=1;
      x.style.display="initial";
    }
    else {
      menu=0;
      x.style.display="none";
    }
}
