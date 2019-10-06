var mapButtonOpen = document.querySelector(".contacts__map");

var mapWindow = document.querySelector(".popup-map");
var mapButtonClose = mapWindow.querySelector(".close_button");

mapButtonOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapWindow.classList.add("modal-show");
});

mapButtonClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapWindow.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapWindow.classList.contains("modal-show")) {
      mapWindow.classList.remove("modal-show");
    }
  }
});
