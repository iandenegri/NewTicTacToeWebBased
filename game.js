// Restart game button
// this creates an object for the restart button
var restart = document.querySelector("#restart_button")

//grabs all squares
// The query select below creates an array or list type object that can be iterated through
var squares = document.querySelectorAll("td");


//clear all sqaures
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);

//check current marker

//inefficient way below

// var cellOne = document.querySelector("#cell1_1")
// cellOne.addEventListener('click', function(){
//     if (cellOne.textContent === ''){
//       cellOne.textContent = 'X';
//     }
//     else if (cellOne.textContent === 'X') {
//       cellOne.textContent = 'O';
//     }
//     else {
//       cellOne.textContent = '';
//     }
// })

//better way below

function changeMarker() {
  if (this.textContent === ''){
    this.textContent = 'X';
  }
  else if (this.textContent === 'X') {
      this.textContent = 'O';
  }
  else {
    this.textContent = '';
  }
};

//for loop to add events to sqaures
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker)
}

//check for wins

// function checkWin(){
//   if(squares[0] === 'X' && squares[1] === 'X' && squares[2] === 'X' || cell1_1 == 'X' && cell2_1 == 'X' && cell3_1 == 'X' || cell1_1 == 'X' && cell2_2 == 'X' && cell3_3 == 'X' || cell1_2 == 'X' && cell2_2 == 'X' && cell3_2 == 'X' || cell1_3 == 'X' && cell2_3 == 'X' && cell3_3 == 'X'
//   ){
//     alert("X wins!");
//   }
//   else{
//     console.log('no winners yet....')
//   }
// }
// 
//
// setInterval("checkWin()",500);
