var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");
var welcomeScreen = document.querySelector("#welcome");

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "block";
}

welcomeScreenClose.addEventListener("click", function () {
  closeWindow(welcomeScreen);
});
welcomeScreenOpen.addEventListener("click", function () {
  openWindow(welcomeScreen);
});
