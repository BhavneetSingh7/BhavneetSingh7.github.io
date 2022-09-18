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

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.onclick = function(e) {
if (e.target.id !== 'mySidenav' && document.getElementById("mySidenav").style.width === "0px") {
        openNav();
   }
    if (e.target.id !== 'mySidenav' && document.getElementById("mySidenav").style.width === "250px") {
        closeNav();
   }
}
