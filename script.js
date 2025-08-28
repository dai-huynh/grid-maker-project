// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

let table = document.getElementById("grid");

// Add a row
function addR() {
  let newRow = table.insertRow();
  for (let i = 0; i < numCols; i++) {
    let newCell = newRow.insertCell();
    newCell.onclick = () => {
      newCell.style.backgroundColor = colorSelected;
    };
  }
  numRows++;
}

// Add a column
function addC() {
  for (let i = 0; i < numRows; i++) {
    let newCell = table.rows[i].insertCell();
    newCell.onclick = () => {
      newCell.style.backgroundColor = colorSelected;
    };
  }
  if (numRows === 0) {
    let newRow = table.insertRow();
    let newCell = newRow.insertCell();
    newCell.onclick = () => {
      newCell.style.backgroundColor = colorSelected;
    };
    numRows++;
  }
  numCols++;
}

// Remove a row
function removeR() {
  if (numRows > 0) {
    table.deleteRow(numRows - 1);
    numRows--;
  }
}

// Remove a column
function removeC() {
  if (numCols > 0) {
    for (let i = 0; i < numRows; i++) {
      table.rows[i].deleteCell(numCols - 1);
    }
    numCols--;
  }
}

// Set global variable for selected color
function selectColor() {
  colorSelected = document.getElementById("selectedColorId").value;
  console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let cell = table.rows[i].cells[j];
      console.log(cell);
      if (cell.style.backgroundColor === "") {
        cell.style.backgroundColor = colorSelected;
      }
    }
  }
}

// Fill all cells
function fillAll() {
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let cell = table.rows[i].cells[j];
      cell.style.backgroundColor = colorSelected;
    }
  }
}

// Clear all cells
function clearAll() {
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let cell = table.rows[i].cells[j];
      cell.style.backgroundColor = "";
    }
  }
}
