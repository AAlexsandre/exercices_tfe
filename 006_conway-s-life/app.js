let numberOfCells = 25;
let representation = [];
let counter = 0;
let status = ["empty", "empty", "empty", "empty", "filled"];

function createCells() {
    let container = document.getElementById("container2");
    let row;
    let cell;
    for (let index = 0; index < numberOfCells; index++) {
        row = document.createElement("div");
        row.className = "row";
        for (let index2 = 0; index2 < numberOfCells; index2++) {
            cell = document.createElement("div");
            cell.className = "cell " + status[Math.floor(Math.random() * 5)];
            cell.id = "cell_" + counter;
            counter++;
            representation.push(cell);
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

createCells();

function getNeighbors(id) {
    let cell = document.getElementById(id);
    let cellCoords = id.split("_");
    let rowIndex = parseInt(cellCoords[1]);
    let colIndex = parseInt(cellCoords[2]);
    let neighbors = [];

    let rowAbove = document.getElementById(
        "cell_" + (rowIndex - 1) + "_" + (colIndex - 1)
    );
    let rowAboveMiddle = document.getElementById(
        "cell_" + (rowIndex - 1) + "_" + colIndex
    );
    let rowAboveRight = document.getElementById(
        "cell_" + (rowIndex - 1) + "_" + (colIndex + 1)
    );
    let sameRowLeft = document.getElementById(
        "cell_" + rowIndex + "_" + (colIndex - 1)
    );
}

function getNextState(x, y) {
    let neighbors = getNumberOfNeighbors(x, y);

    if (representation[y * numberOfCells + x].classList.contains("filled")) {
        if (neighbors < 2 || neighbors > 3) {
            return "empty";
        } else {
            return "filled";
        }
    } else {
        if (neighbors === 3) {
            return "filled";
        } else {
            return "empty";
        }
    }
}

function getNumberOfNeighbors(x, y) {
    let count = 0;

    if (x > 0) {
        if (representation[y * numberOfCells + x - 1].classList.contains("filled")) {
            count++;
        }
    }

    if (x < numberOfCells - 1) {
        if (representation[y * numberOfCells + x + 1].classList.contains("filled")) {
            count++;
        }
    }

    if (y > 0) {
        if (representation[(y - 1) * numberOfCells + x].classList.contains("filled")) {
            count++;
        }

        if (x > 0) {
            if (representation[(y - 1) * numberOfCells + x - 1].classList.contains("filled")) {
                count++;
            }
        }

        if (x < numberOfCells - 1) {
            if (representation[(y - 1) * numberOfCells + x + 1].classList.contains("filled")) {
                count++;
            }
        }
    }

    if (y < numberOfCells - 1) {
        if (representation[(y + 1) * numberOfCells + x].classList.contains("filled")) {
            count++;
        }

        if (x > 0) {
            if (representation[(y + 1) * numberOfCells + x - 1].classList.contains("filled")) {
                count++;
            }
        }

        if (x < numberOfCells - 1) {
            if (representation[(y + 1) * numberOfCells + x + 1].classList.contains("filled")) {
                count++;
            }
        }
    }

    return count;
}

function updateCells() {
    let newRepresentation = [];

    for (let y = 0; y < numberOfCells; y++) {
        for (let x = 0; x < numberOfCells; x++) {
            let newState = getNextState(x, y);
            let cell = document.getElementById("cell_" + (y * numberOfCells + x));
            cell.classList.remove("filled", "empty");
            cell.classList.add(newState);
            newRepresentation.push(cell);
        }
    }

    representation = newRepresentation;
}

setInterval(function () {
    updateCells();
}, 1000);

