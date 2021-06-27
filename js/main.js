function loding() {
  let preload = document.querySelector(".loder");
  preload.style.display = "none";
  document.querySelector(".image").style.display = "block";
}

window.addEventListener("load", loding);
