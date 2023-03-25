const puzzle = document.getElementById('puzzle');
const cells = puzzle.getElementsByTagName('input');
const gradeButton = document.getElementById('grade-button');
const result = document.getElementById('result');

// Function to check if all cells are filled
function allCellsFilled() {
	for (let i = 0; i < cells.length; i++) {
		if (cells[i].value === '') {
			return false;
		}
	}
	return true;
}

function isValidPuzzle() {
	// Check rows
	for (let row = 0; row < 9; row++) {
		let rowSet = new Set();
		for (let col = 0; col < 9; col++) {
			let val = cells[(row * 9) + col].value;
			if (isNaN(val) || val < 1 || val > 9 || rowSet.has(val)) {
				console.log(val);
				return false;
			}
			rowSet.add(val);
		}
	}

	// Check columns
	for (let col = 0; col < 9; col++) {
		let colSet = new Set();
		for (let row = 0; row < 9; row++) {
			let val = cells[(row * 9) + col].value;
			if (isNaN(val) || val < 1 || val > 9 || colSet.has(val)) {
				console.log(val);
				return false;
			}
			colSet.add(val);
		}
	}

	// Check regions
	for (let regionRow = 0; regionRow < 3; regionRow++) {
		for (let regionCol = 0; regionCol < 3; regionCol++) {
			let regionSet = new Set();
			for (let row = regionRow * 3; row < regionRow * 3 + 3; row++) {
				for (let col = regionCol * 3; col < regionCol * 3 + 3; col++) {
					let val = cells[(row * 9) + col].value;
					if (isNaN(val) || val < 1 || val > 9 || regionSet.has(val)) {
						console.log(val);
						return false;
					}
					regionSet.add(val);
				}
			}
		}
	}

	return true;
}

// Event listener for grade button click
gradeButton.addEventListener('click', function() {
	if (!allCellsFilled()) {
		result.textContent = 'Please fill in all cells.';
		return;
	}
	if (isValidPuzzle()) {
		result.textContent = 'Congratulations! Sudoku solved correctly.';
	} else {
		result.textContent = 'Sorry, Sudoku is not solved correctly.';
	}
});
