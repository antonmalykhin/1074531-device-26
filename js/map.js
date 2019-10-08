var mapButtonOpen = document.querySelector(".contacts__map");

var mapWindow = document.querySelector(".popup-map");
var mapButtonClose = mapWindow.querySelector(".close_button");

var lastFocusedElement;

var modalClose = function() {
  mapWindow.classList.remove("modal-show");
  lastFocusedElement.focus();
};

mapButtonOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  lastFocusedElement = document.activeElement;
  mapWindow.classList.add("modal-show");
  mapWindow.focus();
});

mapButtonClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalClose();
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapWindow.classList.contains("modal-show")) {
      modalClose();
    }
  }
});
