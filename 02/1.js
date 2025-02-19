const cim = document.querySelector("h1")
//cim.innerText = "<i>Átírom</i> a címet"
cim.innerHTML = "<i>Átírom</i> a címet"

const bek = document.querySelectorAll("p")
for (const b of bek){
    b.style.color = "green"
}

const kep = document.querySelector("img")
kep.src = "https://www.demilked.com/magazine/wp-content/uploads/2019/12/5dfb374af3828-B5cy6EYHWsP-png__700.jpg"

// 1. feladat
// Rakj linkeket az oldaladra! min. 3
// console.log
// [{ hova: "http://", szoveg: "katt ide" }] 

const linkek = document.querySelectorAll("a")
const eredmeny = []
for(const link of linkek){
    eredmeny.push({
        hova: link.href,
        szoveg: link.innerText
    })
}
console.log(eredmeny)

