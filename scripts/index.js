window.onscroll = function() {fixed()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function fixed() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
}