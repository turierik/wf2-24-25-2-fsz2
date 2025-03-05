const m = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

// 1. generáld ki a táblázatot :)
// 2. ha rákattintok a táblázat egy cellájára,
//    duplázódjon meg az ott lévő szám
// 3. ha rámutatok a táblázat egy sorára,
//    kapjon sárga hátteret, ami eltűnik,
//    ha lejövök a sorról (mouseover + mouseout)

const table = document.querySelector("table")

table.innerHTML = m.map(r => `<tr>${
    r.map(c => `<td>${c}</td>`).join("")
}</tr>`).join("")

table.addEventListener("click", duplaz)

function duplaz(e){
    if (e.target.matches("td")){
        e.target.innerText = e.target.innerText * 2
    }
}

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
      const targetElement = event.target.closest(selector);
  
      if (this.contains(targetElement)) {
        handler.call(targetElement, event);
      }
    });
}

delegate(table, "mouseover", "tr", sargit)
function sargit(){
    this.style.backgroundColor = "yellow"
}

delegate(table, "mouseout", "tr", kisargit)
function kisargit(){
    this.style.backgroundColor = "white"
}
