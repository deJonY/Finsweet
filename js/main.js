function openNavbar() {
  document.getElementById("navbar-responsive").style.right = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.right = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

const body__overlay = document.querySelector("body");
const navbar__responsive = document.getElementById("navbar-responsive");
body__overlay.addEventListener("click", function (event) {
//   event.preventDefault();
  if (event.target.className == "open") {
    openNavbar();
  } else if (!event.target.className.includes("close-text")) {
    closeNavbar();
  }
});
