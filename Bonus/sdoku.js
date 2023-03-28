let puzzle = [9][9];

function check_3x3(x, x_, y, y_, num){
  for(let i = x*3; i<x*3 + x_; i++){
    for(let j = y*3; j<y*3 + y_; j++){
      if(puzzle[i][j] == num) return 0;
    }
  }
  return num;
}

function check_width(i, j, num){
  for(let x = 0; x<=j; x++){
    if(puzzle[i][x] == num) return 0;
  }
  return num;
}

function check_height(i, j, num){
  for(let x = 0; x<=i; x++){
    if(puzzle[x][j] == num) return 0;
  }
  return num;
}

function create_sudoku(){
  let rand_number=0;
  
  
  for(let i = 0;i<9;i++){
    for(let j=0;j<9;j++){
      while(1){
        rand_number = Math.floor(Math.random() * 10);
        let x = j/3; // 가로 몫
        let x_ = j%3; // 가로 나머지
        let y = i/3; // 세로 몫
        let y_ = i%3; // 세로 나머지
        if(check_3x3(x, x_, y, y_, rand_number)===rand_number){
          if(check_width(i, j, num)===rand_number){
            if(check_height(i, j, num)===rand_number){
              puzzle[i][j]=rand_number;
              break;
            }
          }
        }
      }
    }
  }
}

function generateTable() {
  create_sudoku();

  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (var i = 0; i < 9; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < 9; j++) {
          var cell = document.createElement("td");
          cell.textContent = puzzle[i][j];
          row.appendChild(cell);
      }
      tableBody.appendChild(row);
  }
}