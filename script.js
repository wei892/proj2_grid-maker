// Declare global variables
let numRows = 2;
let numCols = 2;
let colorSelected; 
for(let i = 0; i < numRows; i++) {
    const newRow = grid.insertRow(0);
    for (let j = 0; j < numCols; j++) {
        const cell = newRow.insertCell(j);
    }
}

// Add a row
function addR() {
    numRows += 1;
    const new_row = document.createElement('tr');
    grid.appendChild(new_row);
    for (let i = 0; i < numCols; i++){
        const new_col = document.createElement('td'); 
        new_row.appendChild(new_col);
    }
}

// Add a column
function addC() {
    numCols++;
    for (let i = 0; i < numRows; i++) {
        const new_col = document.createElement('td'); 
        grid.rows[i].appendChild(new_col);
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

function printGrid() {
    console.log(1);
}