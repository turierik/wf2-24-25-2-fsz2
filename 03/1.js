const ul = document.querySelector("ul")

const t = ["ananász", "banán", "citrom",
    "datolya", "eper", "füge",
    "gesztenye", "hibiszkusz"
]

// paraszt verzió - működik, de ronda
let s = ""
for (const el of t)
    s += "<li>" + el + "</li>"
ul.innerHTML = s

// szép verzió - map
ul.innerHTML = t.map(u => "<li>" + u + "</li>").join("")

// csak ijesztésnek - ne használd!
for (const el of t){
    let li = document.createElement("li")
    li.innerText = el
    ul.appendChild(li)
}

function kezeldAListat(e){
    console.log(e)
    if (e.target.matches("li")){
        e.target.style.color = "green"
    }
}

ul.addEventListener("click", kezeldAListat)