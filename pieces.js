function Pieces(){
    this.x;
    this.y;
    this.courseNumber;
    let random;

    this.killCourse = function(){
        courses.splice(random,1)
        if (courses.length == 0){
            alert("YOU HAVE EATEN ALL THE FOOD! CONGRATULATIONS YOU HAVE WON")
        }
    }

    this.randomLocation = function(){
        this.x = Math.round(Math.random() *(width - 20 + 1)/20)*20;
        this.y = Math.round(Math.random() * (height - 20 + 1)/20)*20;
        random = Math.round(Math.random() * (courses.length - 1))
    }

    this.update = function(){
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, 20, 20);
        ctx.fillStyle = "white"
        ctx.fillText(courses[random],this.x,this.y + 10)
    }
}

