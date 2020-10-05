const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const width = 720;
const height = 420;
const backgroundMusic = new sound('background.mp3'); 
const eatSound = new sound("eat sound.wav");
const dieSound = new sound("die sound.wav");


(function setup() {
    snake = new Snake();
    pieces = new Pieces();
    snake.update()
    pieces.randomLocation()
    this.interval

    window.setInterval(() => {
        this.clear();
        snake.newPos();
        snake.update();
        pieces.update();
        backgroundMusic.play()

        // need to do -1 to total to account starting position of the tail. Since this.total = 1, to account for tail need to subtract 1
        if (snake.total - 1 < 0)
            document.querySelector("#score").innerHTML = 0;
        else
            document.querySelector("#score").innerHTML = snake.total - 1;
    }, 500);
}());

function clear(){
    ctx.clearRect(0, 0, width, height);
}

onkeydown = function(e){
    window.key = e.key;
    if (e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == "ArrowUp" || e.key == "ArrowDown" ){
        switch (e.key) {
            case "ArrowLeft":
                snake.adjustX = -20
                snake.adjustY = 0
                // Left pressed
                
                break;
            case "ArrowRight":
                snake.adjustX = 20
                snake.adjustY = 0
                // Right pressed
                
                break;
            case "ArrowUp":
                snake.adjustX = 0
                snake.adjustY = -20
                // Up pressed
                break;
                
            case "ArrowDown":
                snake.adjustX = 0
                snake.adjustY = 20
                // Down pressed
                break;
        }
    }
}

function endGame(){
    canvas.hidden = true;
    window.close()
    
}