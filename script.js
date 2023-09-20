// Declare global variables
let numRows = 0;
let numCols = 1;
let colorSelected; 

const grid = document.getElementById('grid');

// Add a row
function addR() {
    numRows += 1;
    const new_row = document.createElement('tr');
    new_row.className = `row${numRows}`;
    grid.appendChild(new_row);
    for (let i = 0; i < numCols; i++){
        const new_col = document.createElement('td'); 
        new_row.appendChild(new_col);
    }
    console.log("New row created", new_row.className)
}

// Add a column
function addC() {
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