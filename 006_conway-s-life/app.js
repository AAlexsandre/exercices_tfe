function createCells() {
    let cell;
    let divColors = ["black","white"];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            cell = document.createElement("div");
            cell.id = "cell_" + i + '|' + j;
            if(i%3 == 0){
                cell.classList = divColors[Math.floor(Math.random() * 2)];
            } else {
                cell.classList = "black";
            }
            document.getElementById("grid").appendChild(cell);
        }
    }

}

createCells();

