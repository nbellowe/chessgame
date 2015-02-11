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


var board = function(){
  var tr = document.getElementById("chess_board").getElementsByTagName("tr")
  return tr;
}

var replaceText = function(x, y, current_board, newValue){
  var currentElement = current_board[x].getElementsByTagName('td')[y]
  var oldValue = currentElement.innerHTML;
  currentElement.innerHTML = newValue;
  console.log('(' + x + ',' + y + ')' + " changed from " + (oldValue || 'no set value') +" to new value " + newValue)
}

var test = function(){
    replaceText(0,0,board(),pieces.black.rook)
}