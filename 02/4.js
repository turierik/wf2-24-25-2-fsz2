const input = document.querySelector("input[type=color]")

function handleColorInput(){
    document.body.style.backgroundColor = input.value
}

input.addEventListener("input", handleColorInput)
