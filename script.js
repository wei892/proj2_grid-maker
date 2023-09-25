// Declare global variables
let numRows = 2;
let numCols = 2;
let colorSelected;
printGrid()

// Add a row
function addR() {
    numRows += 1;
    const new_row = document.createElement('tr');
    grid.appendChild(new_row);
    for (let i = 0; i < numCols; i++){
        const new_col = document.createElement('td'); 
        new_row.appendChild(new_col);
        new_col.onclick = function () {
            new_col.style.backgroundColor = colorSelected;
        };
    }
}

// Add a column
function addC() {
    numCols++;
    for (let i = 0; i < numRows; i++) {
        const new_col = document.createElement('td'); 
        grid.rows[i].appendChild(new_col);
        new_col.onclick = function () {
            new_col.style.backgroundColor = colorSelected;
        };
    }
}

// Remove a row
function removeR() {
    if(numRows > 0) {
        let all_row = document.querySelectorAll('tr');
        all_row[numRows-1].remove();
        numRows--;
    }
}

// Remove a column
function removeC() {
    if(numCols > 0) {
        let all_rows = document.querySelectorAll('tr');
        for(let i = 0; i < all_rows.length; i++) {
            let last_column = all_rows[i].lastElementChild;
            all_rows[i].removeChild(last_column);
        }
        numCols--;
        console.log(numCols);
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    const all_cells = document.querySelectorAll('td');
    all_cells.forEach(function (td) {
        if(!td.style.backgroundColor || td.style.backgroundColor == 'white')
        td.style.backgroundColor = colorSelected;
    });
}

// Fill all cells
function fillAll(){
    const all_cells = document.querySelectorAll('td');
    all_cells.forEach(function (td) {
        td.style.backgroundColor = colorSelected;
    });
}

// Clear all cells
function clearAll(){
    const all_cells = document.querySelectorAll('td');
    all_cells.forEach(function (td) {
        td.style.backgroundColor = 'white';
    });
}

function printGrid() {
    for(let i = 0; i < numRows; i++) {
        const new_row = document.createElement('tr');
        grid.appendChild(new_row);
        for (let j = 0; j < numCols; j++) {
            const new_col = document.createElement('td'); 
            new_row.appendChild(new_col);
            new_col.onclick = function () {
                new_col.style.backgroundColor = colorSelected;
            };
        }
    }
}