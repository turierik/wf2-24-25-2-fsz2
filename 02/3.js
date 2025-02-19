const button = document.querySelector("button")
const span = document.querySelector("span")

function handleButtonClick(){
    span.innerText = +span.innerText + 1
}

button.addEventListener("click", handleButtonClick)