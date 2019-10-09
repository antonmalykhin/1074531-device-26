var contactButtonOpen = document.querySelector(".contacts__button");

var contactWindow = document.querySelector(".write-us");
var contactButtonClose = contactWindow.querySelector(".close_button");

var contactForm = contactWindow.querySelector(".write-us__form");
var nameField = contactWindow.querySelector("[name=name]");
var emailField = contactWindow.querySelector("[name=email]");
var messageField = contactWindow.querySelector("[name=message]");

var lastFocusedElement;

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactButtonOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  lastFocusedElement = document.activeElement;
  contactWindow.classList.add("modal-show");
  if (storageName || storageEmail) {
    nameField.value = storageName;
    emailField.value = storageEmail;
    messageField.focus();
  } else {
    nameField.focus();
  }
});

contactButtonClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactWindow.classList.remove("modal-show");
  contactWindow.classList.remove("modal-error");
  lastFocusedElement.focus();
});

contactForm.addEventListener("submit", function(evt) {
  if (!nameField.value || !emailField.value || !messageField.value) {
    evt.preventDefault();
    contactWindow.classList.remove("modal-error");
    contactWindow.offsetWidth = contactWindow.offsetWidth;
    contactWindow.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameField.value);
      localStorage.setItem("email", emailField.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactWindow.classList.contains("modal-show")) {
      contactWindow.classList.remove("modal-show");
      contactWindow.classList.remove("modal-error");
      lastFocusedElement.focus();
    }
  }
});

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
