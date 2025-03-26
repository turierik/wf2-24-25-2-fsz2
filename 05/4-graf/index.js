function delegal(szulo, esemeny, szelektor, esemenykezelo) {
    szulo.addEventListener(esemeny, function (event) {
        const targetElement = event.target.closest(szelektor)

        if (this.contains(targetElement)) {
            esemenykezelo.call(targetElement, event)
        }
    })
}

const graf = document.querySelector("svg")
const pontok = document.querySelectorAll("ellipse")
const hibaBekezdes = document.querySelector("p")

// Megoldás innentől

let szabad = null

delegal(graf, "click", "ellipse", function(){
    if (szabad === null || szabad.includes(this.dataset.name)){
        console.log(`${this.dataset.name} -> ${this.dataset.paths}`)

        for (const p of pontok){
            p.classList.remove("aktualis")
            p.classList.remove("elerheto")
        }
    
        this.classList.add("aktualis")
        szabad = this.dataset.paths.split(",")
        for (const h of szabad){
            const melyik = document.querySelector(`[data-name="${h}"]`)
            melyik.classList.add("elerheto")
        }
        hibaBekezdes.innerText = ""
    } else {
        hibaBekezdes.innerText = "Ide nem jöhetsz!"
    }
})
