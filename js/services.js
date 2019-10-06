var serviceButtons = document.querySelectorAll(".services__input");
var serviceDescriptions = document.querySelectorAll(".services__item");

var makeVisible = function(items, id) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains(id)) {
      items[i].classList.add("block-show");
    } else {
      items[i].classList.remove("block-show");
    }
  }
};

var btn_click = function(btn) {
  btn.addEventListener("click", function() {
    makeVisible(serviceDescriptions, btn.id);
  });
};

for (var i = 0; i < serviceButtons.length; i++) {
  btn_click(serviceButtons[i]);
}
