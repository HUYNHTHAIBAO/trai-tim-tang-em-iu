const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-content">
<img class="image" src="z3871021126509_d7765415937abb16b4964a531d296b26.jpg" alt="">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;
button.addEventListener("click", function () {
  document.body.insertAdjacentHTML("beforeend", template);
});
document.body.addEventListener("click", function (event) {
  if (event.target.matches(".modal-close")) {
    const modal = event.target.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  } else if (event.target.matches(".modal")) {
    event.target.parentNode.removeChild(event.target);
  }
});
