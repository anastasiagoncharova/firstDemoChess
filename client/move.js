var start=""; 
var board = document.getElementsByClassName("board");

document.addEventListener("DOMContentLoaded", function(){
  [].forEach.call(document.getElementsByClassName('board'), function(item, index){
    item.style.backgroundColor = 
    ((parseInt(index / 8) + index) % 2 === 0 ? 'white' : 'black');
    item.style.color = 
    ((parseInt(index / 8) + index) % 2 === 0 ? 'black' : 'white');
  })
});

var app = angular.module('chessApp', []);

app.directive('postRepeat', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      setTimeout(function(){
      var allButtonsArray = document.getElementsByClassName('board');
        for(var i=0; i<allButtonsArray.length; i++) {
          allButtonsArray[i].onclick = function (){
          var coordinatesFrom = document.getElementById("coordFrom");
          var coordinatesTo = document.getElementById("coordTo");
          console.log(event.target);
          if(event.target.id !=="&nbsp;"){
            var row = coordinatesFrom.insertRow();
            var from = '<tr><td>'  + event.target.name + '</td></tr>';
            row.innerHTML = from; 
          }else{
              var row = coordinatesTo.insertRow();
              var to = '<tr><td>'  + event.target.name + '</td></tr>';
              row.innerHTML = to; 
            }
            if(start===""){ 
            start = event.target.innerHTML; 
            event.target.innerHTML = "&nbsp;"; 
          } 
          else{ 
            event.target.innerHTML = start; 
            start = ""; 
          } 
        }
      }
      }, 1000)
    }
  };
});

app.controller('chessController', ['$scope', '$window', function($scope, $window){
  $scope.onEnd = function(){
    console.log(document.getElementsByClassName('board'));
  };

  $scope.chessInscope = [
  [{id: 1, name:'ROOK', position:'A8', unicode:'\u265C'},
   {id: 2, name:'KNIGHT', position:'B8', unicode: '\u265E'},
   {id: 3, name: 'BISHOP', position:'C8', unicode:'\u265D'},
   {id: 4, name: 'KING', position:'D8', unicode:' \u265A'},
   {id: 5, name: 'QUEEN', position:'E8', unicode:'\u265B'},
   {id: 6, name: 'BISHOP', position:'F8', unicode:'\u265D'},
   {id: 7, name: 'KNIGHT', position:'G8', unicode:'\u265E'},
   {id: 8, name: 'ROOK', position:'H8', unicode:'\u265C'}],

  [{id: 9, name: 'PAWN', position:'A7', unicode:'\u265F'},
   {id: 10, name: 'PAWN', position:'B7', unicode:'\u265F'},
   {id: 11, name: 'PAWN', position:'C7', unicode:'\u265F'},
   {id: 12, name: 'PAWN', position:'D7', unicode:'\u265F'},
   {id: 13, name: 'PAWN', position:'E7', unicode:'\u265F'},
   {id: 14, name: 'PAWN', position:'F7', unicode:'\u265F'},
   {id: 15, name: 'PAWN', position:'G7', unicode:'\u265F'},
   {id: 16, name: 'PAWN', position:'H7', unicode:'\u265F'}],

 [{id: 17, name: '&nbsp;', position:'A6', unicode:'\u00A0'},
  {id: 18, name: '&nbsp;', position:'B6', unicode:'\u00A0'},
  {id: 19, name: '&nbsp;', position:'C6', unicode:'\u00A0'},
  {id: 20, name: '&nbsp;', position:'D6', unicode:'\u00A0'},
  {id: 21, name: '&nbsp;', position:'E6', unicode:'\u00A0'},
  {id: 22, name: '&nbsp;', position:'F6', unicode:'\u00A0'},
  {id: 23, name: '&nbsp;', position:'G6', unicode:'\u00A0'},
  {id: 24, name: '&nbsp;', position:'H6', unicode:'\u00A0'}],

 [{id: 25, name: '&nbsp;', position:'A5', unicode:'\u00A0'},
  {id: 26, name: '&nbsp;', position:'B5', unicode:'\u00A0'},
  {id: 27, name: '&nbsp;', position:'C5', unicode:'\u00A0'},
  {id: 28, name: '&nbsp;', position:'D5', unicode:'\u00A0'},
  {id: 29, name: '&nbsp;', position:'E5', unicode:'\u00A0'},
  {id: 30, name: '&nbsp;', position:'F5', unicode:'\u00A0'},
  {id: 31, name: '&nbsp;', position:'G5', unicode:'\u00A0'},
  {id: 32, name: '&nbsp;', position:'H5', unicode:'\u00A0'}],

 [{id: 33, name: '&nbsp;', position:'A4', unicode:'\u00A0'},
  {id: 34, name: '&nbsp;', position:'B4', unicode:'\u00A0'},
  {id: 35, name: '&nbsp;', position:'C4', unicode:'\u00A0'},
  {id: 36, name: '&nbsp;', position:'D4', unicode:'\u00A0'},
  {id: 37, name: '&nbsp;', position:'E4', unicode:'\u00A0'},
  {id: 38, name: '&nbsp;', position:'F4', unicode:'\u00A0'},
  {id: 39, name: '&nbsp;', position:'G4', unicode:'\u00A0'},
  {id: 40, name: '&nbsp;', position:'H4', unicode:'\u00A0'}],

 [{id: 41, name: '&nbsp;', position:'A3', unicode:'\u00A0'},
  {id: 42, name: '&nbsp;', position:'B3', unicode:'\u00A0'},
  {id: 43, name: '&nbsp;', position:'C3', unicode:'\u00A0'},
  {id: 44, name: '&nbsp;', position:'D3', unicode:'\u00A0'},
  {id: 45, name: '&nbsp;', position:'E3', unicode:'\u00A0'},
  {id: 46, name: '&nbsp;', position:'F3', unicode:'\u00A0'},
  {id: 47, name: '&nbsp;', position:'G3', unicode:'\u00A0'},
  {id: 48, name: '&nbsp;', position:'H3', unicode:'\u00A0'}],

  [{id: 49, name: 'PAWN', position:'A2', unicode:'\u2659'},
   {id: 50, name: 'PAWN', position:'B2', unicode:'\u2659'},
   {id: 51, name: 'PAWN', position:'C2', unicode:'\u2659'},
   {id: 52, name: 'PAWN', position:'D2', unicode:'\u2659'},
   {id: 53, name: 'PAWN', position:'E2', unicode:'\u2659'},
   {id: 54, name: 'PAWN', position:'F2', unicode:'\u2659'},
   {id: 55, name: 'PAWN', position:'G2', unicode:'\u2659'},
   {id: 56, name: 'PAWN', position:'H2', unicode:'\u2659'}],

  [{id: 57, name: 'ROOK', position:'A1', unicode:'\u2656'},
   {id: 58, name: 'KNIGHT', position:'B1', unicode:'\u2658'},
   {id: 59, name: 'BISHOP', position:'C1', unicode:'\u2657'},
   {id: 60, name: 'KING', position:'D1', unicode:'\u2654'},
   {id: 61, name: 'QUEEN', position:'E1', unicode:'\u2655'},
   {id: 62, name: 'BISHOP', position:'F1', unicode:'\u2657'},
   {id: 63, name: 'KNIGHT', position:'G1', unicode:'\u2658'},
   {id: 64, name: 'ROOK', position:'H1', unicode:'\u2656'}]
  ];
}]);

/*https://moqups.com/nastinka666/j4xPphkI*/