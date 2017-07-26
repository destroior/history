function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
        var p = document.getElementById("myTopnav");
    } else {
        x.className = "menu";
    }
}
