/*creare una griglia di gioco quadrata, in cui ogni cella contiene un 
numero tra quelli compresi in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/



const btnEasy = document.getElementById("easy");
const btnMed = document.getElementById("med");
const btnHard = document.getElementById("hard");

btnEasy.addEventListener("click", () => playGrid(100, "lvlEasy"));
btnMed.addEventListener("click", () => playGrid(81, "lvlMed"));
btnHard.addEventListener("click", () => playGrid(49, "lvlHard"));


function playGrid(maxCells, level) {
    const gridBox = document.getElementById("box");
    gridBox.innerHTML = "";
    for (let i = 0; i < maxCells; i++) {
        const cells = createCells();
        cells.classList.add(level);
        cells.innerHTML = i + 1;
        gridBox.appendChild(cells);
    }
    const main = bomb(maxCells);
    console.log(main);

}

function createCells() {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => { cell.classList.toggle("bg-click") });
    return cell;
}

function bomb(lvlCells) {
    let randNumber = [];
    for (let i = 0; i < 16; i++) {
        randNumber.push(Math.floor(Math.random() * lvlCells) + 1);
    }
    return randNumber;
}

