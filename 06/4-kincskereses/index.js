function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
function xyCoord(td) {
  return {
    x: td.cellIndex,
    y: td.parentNode.rowIndex,
  };
}
function distanceHue(x1, y1, x2, y2) {
  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  const maxDistance = Math.sqrt((10 - 1) ** 2 + (14 - 1) ** 2);
  console.log(distance / maxDistance);
  const hue = (120 * distance) / maxDistance;
  return hue;
}

const containerDiv = document.querySelector("#container");
const counterSpan = document.querySelector("#span-counter");
const widthInput = document.querySelector("#input-width");
const heightInput = document.querySelector("#input-height");
const generateForm = document.querySelector("#form-generate");

// Ide jön a megoldásod!
const treasureX = random(0, 13)
const treasureY = random(0, 9)
let count = 0
const table = document.querySelector("table")
table.addEventListener("click", function(e){
  if (e.target.matches("td")){
    if (e.target.dataset.anna != 1)
      count++
    e.target.dataset.anna = 1
    counterSpan.innerText = count
    const clickedX = xyCoord(e.target).x
    const clickedY = xyCoord(e.target).y
    const hue = distanceHue(clickedX, clickedY, treasureX, treasureY)
    e.target.style.backgroundColor = `hsla(${hue}, 100%, 50%, 0.7)`
    if (clickedX === treasureX && clickedY === treasureY)
      e.target.classList.add("treasure")
  }
})
