var bubbles = [];

function setup(){
    let cnv = createCanvas(document.body.clientWidth,350);
    for(var i = 0; i < 150; i++){
        bubbles[i] = new Ball(i);
    }
    cnv.parent('art');
}


function draw(){
    background(255);
    for(var i = 0; i < 150; i++){
        bubbles[i].render();
    }
}

class Ball{
    constructor(id){
        this.rOutline = random(255);
        this.gOutline = random(255);
        this.bOutline =  0;
        this.id = id;
        this.diam = random(10, 100);
        this.xpos = random(width);
        this.ypos = random(height);
        this.width = random(10,40);
        this.height = random(10,60);

        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.g = random(100, 200);
    }

    render(){
        fill(this.r, this.g, this.b, this.g);
        stroke(this.rOutline, this.gOutline, this.bOutline)
        rect(this.xpos, this.ypos, this.width, this.height, this.diam);
    }
}