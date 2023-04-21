var chart = Array.from(document.querySelectorAll('.square'));
var display = document.querySelector('.starting');
var rButton = document.querySelector('#reset');
var announcer = document.querySelector('.announcer');

var bmatrix = ['', '', '', '', '', '', '', '', ''];
var playerC = 'X';
var gamePosition = true;

var X_WON = 'PLAYERX_WON';
var O_WON = 'PLAYERO_WON';
var TIE = 'TIE'