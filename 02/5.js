const input = document.querySelector("input")
const button = document.querySelector("button")
const span = document.querySelector("span")

const target = Math.floor(Math.random() * 100)

function handleButtonClick(){
    // itt kell okosnak lenni :)
    const guess = input.valueAsNumber
    if (target > guess)
        span.innerText = "Nagyobbra gondoltam."
    else if (target < guess)
        span.innerText = "Kisebbre gondoltam."
    else if (isNaN(guess))
        span.innerText = "Tippelj egy számmal!"
    else
        span.innerText = "ELTALÁLTAD! :)"
}

button.addEventListener("click", handleButtonClick)