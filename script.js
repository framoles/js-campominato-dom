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
    const bombNum = bomb(maxCells);
    for (let i = 0; i < maxCells; i++) {
        const cells = createCells();
        cells.classList.add(level);
        cells.innerHTML = i + 1;
        gridBox.appendChild(cells);

        cells.addEventListener("click", function () {

            if (bombNum.includes(i + 1)) {
                cells.classList.add("bg-red");
                alert("Hai perso");
                gridBox.innerHTML = "";
            }
            else {
                cells.classList.add("bg-click");
            }

        })
    }

    console.log(bombNum);


}

function createCells() {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    return cell;
}

function bomb(lvlCells) {
    let randNumber = [];
    let num = 0;
    for (let i = 0; i < 16; i++) {
        num = (Math.floor(Math.random() * lvlCells) + 1);
        if (!randNumber.includes(num)) {
            randNumber.push(num);
        }
        else {
            i--;
        }
    }
    return randNumber;
}

