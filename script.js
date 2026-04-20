const gridContainer = document.getElementById('gridContainer');
const resetBtn = document.getElementById('resetBtn');

function createGrid(size) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.addEventListener('mouseenter', changeColor);
        gridContainer.appendChild(square);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    e.target.style.opacity = '1';
}

function resetGrid() {
    const size = prompt("Enter grid size (max 100):", 16);
    const gridSize = Math.min(parseInt(size), 100);
    if (gridSize && gridSize > 0) {
        createGrid(gridSize);
    }
}

resetBtn.addEventListener('click', resetGrid);

createGrid(16);