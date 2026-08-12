var COLS = 20;
var ROWs = 20;
// 20*20 = 400
var FPS = 5;  //speed
var CELL;

var snake, dir, nextDir, food, score, best, phase, loopTimer;


function init(){
    snake[
        {x:10, y:10},
        { x: 9, y:10 },
        { x: 8, y:10 }
    ];
       dir = {x:1, y:0};
       nextDir = {x:1, y:0};
       score = 0;
       placeFodd();
    
}