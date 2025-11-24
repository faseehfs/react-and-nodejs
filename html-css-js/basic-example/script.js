const donateBtn = document.getElementById("donate-btn");

donateBtn.addEventListener("click", function () {
  /* "this" won't work with arrow functions */
  this.innerText = "Thanks";
  this.disabled = true;
});
