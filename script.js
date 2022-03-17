const playBtn = document.getElementById("play");
playBtn.addEventListener("click", () => startGame());

const pointCointainer = document.getElementById("points-container");
const gridBox = document.getElementById("box");

function startGame() {
    createGrid();
    clickEvent();
}

function difficulty() {
    const selectValue = document.getElementById("difficulty");
    if (selectValue.selectedIndex == 0) {
        num = 100;
        level = "lvlEasy";
    }
    else if (selectValue.selectedIndex == 1) {
        num = 81;
        level = "lvlMed";
    }
    else {
        num = 49;
        level = "lvlHard";
    }
    return { num, level };
}

function createGrid() {
    const maxCells = difficulty().num;
    const levelName = difficulty().level;
    gridBox.innerHTML = "";
    gridBox.classList.remove("lose");
    pointCointainer.classList.remove("d-block");
    pointCointainer.classList.add("d-none");


    for (let i = 0; i < maxCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.classList.add(levelName);
        cell.innerHTML = i + 1;
        gridBox.appendChild(cell);
    }
}

function clickEvent() {
    const bombNumbers = createBombs();
    console.log(bombNumbers);
    const totalCell = document.querySelectorAll(".cell");
    let points = 0;
    let clicked = [];
    let message;

    for (let i = 0; i < totalCell.length; i++) {
        totalCell[i].addEventListener("click", function () {
            if (bombNumbers.includes(i + 1)) {
                showAllBombs(bombNumbers);
                gridBox.classList.add("lose");
                message = "Hai perso! Hai totalizzato: " + points + " punti"
                pointsShow(message);
            }
            else {
                if (!clicked.includes(i + 1)) {
                    clicked.push(i + 1);
                    if (points != totalCell.length - 17) {
                        totalCell[i].classList.add("bg-click");
                        points++;
                    }
                    else {
                        message = "Congratulazioni! Hai vinto"
                        pointsShow(message);
                    }
                }
            }
        })
    }
}

function createBombs() {
    let randNumber = [];
    let num = 0;
    for (let i = 0; i < 16; i++) {
        num = (Math.floor(Math.random() * difficulty().num) + 1);
        if (!randNumber.includes(num)) {
            randNumber.push(num);
        }
        else {
            i--;
        }
    }
    return randNumber;
}

function showAllBombs(allBomb) {
    const totalCells = document.querySelectorAll(".cell");
    for (let i = 0; i < totalCells.length; i++) {
        if (allBomb.includes(i + 1)) {
            totalCells[i].classList.add("bg-red");
        }
    }
}

function pointsShow(statement) {
    pointer = document.getElementById("point-states");
    pointer.innerHTML = statement;

    pointCointainer.classList.remove("d-none");
    pointCointainer.classList.add("d-block");
}