// $(document).ready(function () {
//   let count = 0;
//   let counter = setInterval(function () {
//     if (count < 101) {
//       $(".count").text(count + "%");
//       count++;
//     } else {
//       clearInterval(counter);
//     }
//   }, 80);
// });

function preloder() {
  let countDiv = document.querySelector(".count");
  let loads = document.querySelector(".load");
  let count = 0;
  let counter = setInterval(() => {
    if (count < 101) {
      countDiv.textContent = count + "%";
      loads.style.width = count + "%";
      count++;
    } else {
      clearInterval(counter);
    }
  }, 30);
}

window.addEventListener("load", preloder, true);
