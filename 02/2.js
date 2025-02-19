// ESEMÉNYKEZELÉS TUTORIAL :)

// 1.) Milyen elemek érintettek?
// (bemenet, kimenet, kiváltó)
const button = document.querySelector("button")
const span = document.querySelector("span")

// 2.) Mi történik? (Ez egy függvény!)
function handleButtonClick(){
    span.innerText = "Jaj, ez fájt!"
}

// 3.) Mikor történik?
button.addEventListener("click", handleButtonClick)
// pl. click helyett: input (gépelek egy mezőbe)
//                    mouseover (rámutatok valamire)
//                    mousemove (valami fölött húzgálom az egeret)

