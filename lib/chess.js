//possible pieces
var pieces = {
  'black' : {
    'king'    : '&#9818;',
    'queen'   : '&#9819;',
    'bishop'  : '&#9821;',
    'pawn'    : '&#9823;',
    'rook'    : '&#9820;',
    'knight'  : '&#9822;'
  },
  'white' : {
    'king'    : '&#9812;',
    'queen'   : '&#9813;',
    'bishop'  : '&#9815;',
    'pawn'    : '&#9817;',
    'rook'    : '&#9814;',
    'knight'  : '&#9816;'
  }
}

//gameboard
var board = function(){
  var tr = document.getElementById("chess_board").getElementsByTagName("tr")
  return tr;
}

//current_board[x][y] = newValue
var replaceText = function(x, y, current_board, newValue){
  if(!newValue) return;
  var currentElement = current_board[x].getElementsByTagName('td')[y]
  var oldValue = currentElement.innerHTML;
  currentElement.innerHTML = '<a>' + newValue + '</a>';
  console.log('(' + x + ',' + y + ')' + " changed from " + (oldValue || 'no set value') +" to new value " + newValue)
}

//copies array to board
var applyArray= function(arr){
  var current_board = board();
  for (var i = 0; i < current_board.length; i++) {
    var row = current_board[i];
    for(var j = 0; j<current_board.length; j++){
      replaceText(i,j,current_board,arr[i][j])
    }
  }
}


var defaultBoard = [
  [pieces.black.rook, pieces.black.bishop, pieces.black.knight,pieces.black.king, pieces.black.queen, pieces.black.knight, pieces.black.bishop, pieces.black.rook],
  [pieces.black.pawn,pieces.black.pawn,pieces.black.pawn,pieces.black.pawn,pieces.black.pawn,pieces.black.pawn,pieces.black.pawn,pieces.black.pawn],
  [],
  [],
  [],
  [],
  [pieces.white.pawn,pieces.white.pawn,pieces.white.pawn,pieces.white.pawn,pieces.white.pawn,pieces.white.pawn,pieces.white.pawn,pieces.white.pawn],
  [pieces.white.rook, pieces.white.bishop, pieces.white.knight,pieces.white.king, pieces.white.queen, pieces.white.knight, pieces.white.bishop, pieces.white.rook]
]

var main = function(){
  applyArray(defaultBoard);
}();