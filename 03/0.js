const btn = document.querySelector('button')
const h1 = document.querySelector('h1')

function Gomb(){
    h1.style.color="blue"
    h1.innerText="Megváltozott"
}

btn.addEventListener("click", Gomb)