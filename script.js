const playBtn = document.getElementById("play");
playBtn.addEventListener("click", () => startGame());

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
    const gridBox = document.getElementById("box");
    gridBox.innerHTML = "";
    gridBox.classList.remove("lose");
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
    const gridBox = document.getElementById("box");
    let points = 0;
    let clicked = [];

    for (let i = 0; i < totalCell.length; i++) {
        totalCell[i].addEventListener("click", function () {
            if (bombNumbers.includes(i + 1)) {
                showAllBombs(bombNumbers);
                gridBox.classList.add("lose");
                alert("Hai perso! Sei riuscito a fare: " + points + " punti!");
            }
            else {
                if (!clicked.includes(i + 1)) {
                    clicked.push(i + 1);
                    if (points != totalCell.length - 17) {
                        totalCell[i].classList.add("bg-click");
                        points++;
                    }
                    else {
                        youWin();
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

function youWin() {
    alert("Hai vinto");
}