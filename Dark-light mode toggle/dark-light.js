const toggle = document.getElementById("btnclick");

toggle.addEventListener("click", change);
function change() {
  if (!document.body.classList.contains("darkTheme")) {
    document.body.classList.add("darkTheme");
    document.getElementById("btn").innerHTML = "Click for Light Mode";
  } else {
    document.body.classList.remove("darkTheme");
    document.getElementById("btn").innerHTML = "Click for Dark Mode";
  }
}
