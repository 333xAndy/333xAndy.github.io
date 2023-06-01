let a1,b1,a2,b2,a3,b3,a4,b4, a5, b5;
let width = 710;
let height = 400;

function setup() {
    createCanvas(width, height);
    a1 = color(115,120,135); b1 = color(145,150,143);
    a2 = color(170,165,153); b2 = color(205,178,158);
    a3 = color(210,185,164); b3 = color(190,140,120);
    a4 = color(180,150,140); b4 = color(140,145,145);
    a5 = color(190,170,150); b5 = color(30,45,60);

    noLoop();
}
  
function draw() {
    setGradient(0, 0, width,  50, a1, b1);
    setGradient(0, 51, width,  50, a2, b2);
    setGradient(0, 102, width,  50, a3, b3);
    setGradient(0, 153, width,  50, a4, b4);
    setGradient(0, 204, width, 200 ,a5, b5);

}

function setGradient(x, y, w, h, c1, c2){
    noFill();

    for(let i = y; i <= y + h; i++){
        let inter = map(i, y, y+h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x+w, i);
    }
}

class Rock{
    constructor(width, height, radius, color){
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.color = color;
    }

    

}