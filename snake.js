function Snake(){
    this.x = 360
    this.y = 200
    this.adjustX = 0
    this.adjustY = 0
    this.total = 1;
    this.tail = [];
    
    this.update = function(){
        for (let i = 1; i <= this.tail.length; i++){
            if (this.tail[i] != undefined){
                ctx.fillStyle = "green";
                ctx.fillRect(this.tail[i].x, this.tail[i].y, 20, 20);
            }
        }
        ctx.fillStyle = "#5dbcd2";
        ctx.fillRect(this.x, this.y, 20, 20);
    }

    this.newPos = function(){
        for (let i = 0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1]
        }
        this.tail[this.total - 1] = {x: this.x, y: this.y}

        if ((this.x + this.adjustX) > canvas.width -20 || (this.x + this.adjustX) < 0){
            backgroundMusic.stop()
            dieSound.play()
            alert("GAME OVER")
            window.close()
        }
        if ((this.y + this.adjustY) > canvas.height - 20 || (this.y + this.adjustY) < 0){
            backgroundMusic.stop()
            dieSound.play()
            alert("GAME OVER")
            window.close()
        }
        this.x += this.adjustX;
        this.y += this.adjustY;

        for (let i = 1; i < this.tail.length; i++){
            console.log(this.tail)
            if ((this.x == this.tail[i].x) && (this.y == this.tail[i].y)){
                this.total = 0
                this.tail = []
                backgroundMusic.stop()
                dieSound.play()
                alert("GAME OVER")
                window.close()

            }
            if ((this.x == this.tail[0].x) && (this.y == this.tail[0].y)){
                this.total = 0
                this.tail = []
                backgroundMusic.stop()
                dieSound.play()
                alert("GAME OVER")
                window.close()
            }
        }

        //snake eating food
        if (this.x == pieces.x && this.y == pieces.y){
            this.total++;
            eatSound.play()
            pieces.killCourse()
            pieces.randomLocation()
        }
    }
}
