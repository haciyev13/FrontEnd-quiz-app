let inputTheme = document.querySelector("#theme");
let body = document.querySelector("body");

inputTheme.addEventListener("click", function (e) {
     if (e.target.checked) {
          localStorage.setItem("theme", "dark")
     } else {
          localStorage.setItem("theme", "light")
     }
     body.classList.toggle("dark")
})

window.onload = function () {
     let pageTheme = localStorage.getItem("theme")
     if (pageTheme == "dark") {
          body.classList.add("dark");
          inputTheme.checked = true;
     } else {
          body.classList.remove("dark");
     }
}