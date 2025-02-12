let t = [5, -2, 0, 1, 3, 7, -5, 2]

console.log(t)

let u = []
for(let i = 0; i < t.length; i++){
    if(t[i] % 2 === 0){
        u.push(t[i])
        // u[u.length] = t[i]
    }
}
console.log(u)

let v = []
for(const elem of t){
    if (elem % 2 === 0){
        v.push(elem)
    }
}
console.log(v)

let w = t.filter(x => x % 2 === 0)
console.log(w)

let car = {
    model: "Tesla M",
    year: 2024,
    broken: false
}

let cars = [
    {
        model: "Tesla M",
        year: 2024,
        broken: false
    },
    {
        model: "Valami",
        year: 2016,
        broken: true
    },
    {
        model: "Covidmobil",
        year: 2020,
        broken: false
    }
]

// 2018 után gyártott autók nevek

let x = cars.filter(x => x.year > 2018).map(x => x.model)
console.log(x)

// Feladatok:
// 1.) t tömb köbre emelve
let f1 = t.map(x => x ** 3)
console.log(f1)

// 2.) t elemeinek összege (reduce, nehéz!)
let f2 = t.reduce((s, x) => s + x, 0)
console.log(f2)

let f2b = 0
for(const elem of t)
    f2b += elem
console.log(f2b)

// 3.) t tömb legnagyobb eleme
console.log(Math.max(...t))
console.log(t.reduce((s, x) => s > x ? s : x, -Infinity))

// 4.) t tömb első negatív eleme
console.log(t.find(x => x < 0))
