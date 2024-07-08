// script.js
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal-custom");
  var createPostBtn = document.getElementById("openModal-custom");
  var editButtons = document.getElementsByClassName("btn-edit-custom");
  var span = document.getElementsByClassName("close-custom")[0];

  if (createPostBtn) {
    createPostBtn.onclick = function () {
      modal.style.display = "block";
    };
  }

  if (span) {
    span.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  Array.prototype.forEach.call(editButtons, function (button) {
    button.onclick = function () {
      modal.style.display = "block";
    };
  });
});
