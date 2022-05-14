let counter = 0

const btns = document.querySelectorAll(".btn")
const output = document.querySelector("#output")

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let btnClass = e.currentTarget.classList
    
    if (btnClass.contains("decrease")) {
      counter--
    } else if (btnClass.contains("increase")){
      counter++
    } else {
      counter = 0
    }

    if (counter < 0) {
      output.style.color = "#b00"
    } else if (counter > 0) {
      output.style.color = "#0b0"
    } else {
      output.style.color = "#222"
    }

    output.textContent = counter
  })
})

window.addEventListener("DOMContentLoaded", () => {
  output.textContent = counter
})