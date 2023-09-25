// Declare global variables
let numRows = 2;
let numCols = 2;
let colorSelected;
printGrid()
let all_rows = document.querySelectorAll('tr');

// Add a row
function addR() {
    if(numCols == 0) numCols++;
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
    console.log("row: " + numRows + " cols: " + numCols);
}

// Add a column
function addC() {
    if(numRows == 0) {
        numRows += 1;
        const new_row = document.createElement('tr');
        grid.appendChild(new_row);
    }
    numCols++;
    const all_rows = document.querySelectorAll('tr');
    for (let i = 0; i < numRows; i++) {
        const new_col = document.createElement('td'); 
        all_rows[i].appendChild(new_col);
        new_col.onclick = function () {
            new_col.style.backgroundColor = colorSelected;
        };
    }
    console.log("row: " + numRows + " cols: " + numCols);
}

// Remove a row
function removeR() {
    if(numRows > 0) {
        let all_row = document.querySelectorAll('tr');
        all_row[numRows-1].remove();
        numRows--;
    }
    if(numRows == 0) numCols = 0;
    console.log("row: " + numRows + " cols: " + numCols);
}

// Remove a column
function removeC() {
    if(numCols > 0) {
        let all_rows = document.querySelectorAll('tr');
        for(let i = 0; i < all_rows.length; i++) {
            let last_column = all_rows[i].lastChild;
            all_rows[i].removeChild(last_column);
        }
        numCols--;
        if (numCols == 0) {
            numRows = 0;
            let all_rows = document.querySelectorAll('tr');
            all_rows.forEach(function (row) {
                row.remove();
            });
        }
    }
    if(numCols == 0) numRows = 0;
    console.log("row: " + numRows + " cols: " + numCols);
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