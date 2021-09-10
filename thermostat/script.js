const temperature = document.querySelector(".degrees")
const up = document.querySelector(".up i")
const down = document.querySelector(".down i")
let number = 20

temperature.innerHTML = number

function hotter() {
  up.style.opacity = "1"
  down.style.opacity = "1"

  if (number < 30) {
    number++
    temperature.innerHTML = number
  }

  if (number === 30) {
    up.style.opacity = "0.5"
  }
}

function colder() {
  up.style.opacity = "1"
  down.style.opacity = "1"

  if (number > 0) {
    number--;
    temperature.innerHTML = number
  }

  if (number === 0) {
    down.style.opacity = "0.5"
  }
}

up.addEventListener("click", hotter)
down.addEventListener("click", colder)