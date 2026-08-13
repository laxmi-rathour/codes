var COLS = 20;
var ROWS = 20;
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
       placeFodd(); //create new food
}

function placeFodd(){
    do{
        food=
        {
            x:Math.floor(Math.random() * COLS),
            y:Math.floor(Math.random()* ROWS)
        };

    }while(snake.some(function(s){
        return s.x === food.x && s.y===food.y;
    }));
}

function start(){
    if (loopTimer) clearInterval(loopTimer);
    init();{
        phase = 'running';
        loopTimer = setInterval(tick,1000/FPS)

    }
}

function tick() {
    dir = nextDir

        var head = {
            s:snake[0].x + dir.x,
            y: snake[0].y + dir.y};

          
            var hitWall=head.x <0 || head.x>= COLS>= ROWS;

            var hitSelf = !hitWall && snake.some(function(s)
             {return s.x==head.x && s.y == head.y;});

             if(hitWall || hitSelf){
               phase = 'dead';
               best = Math.max(best, score);
               clearInterval(loopTimer);
               playGameOverSound();
               draw();
               return;
             }

             snake.unsift(head);

             if(head.x == food.x && head.y ===food.y){
                score++;
                placeFood();
                playEatSound();
            } else{
                snake.pop();
            }
            draw();
}


function resize(){
    var size = Math.min(window.innerWidth, window.innerHeight);

    CELL = Math.floor(size / COLS);

    var px = CELL *COLS;
    canvas.width = px;
    canvas.height = px;
    draw();

}

window.addEventListener('resize', resize);


best = 0;