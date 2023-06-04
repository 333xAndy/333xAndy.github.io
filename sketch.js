let a1,b1,a2,b2,a3,b3,a4,b4, a5, b5;
let width = 500;
let height = 300;
var rocks = [];

function setup() {
    let cnv = createCanvas(width, height);
    a1 = color(115,120,135); b1 = color(145,150,143);
    a2 = color(170,165,153); b2 = color(205,178,158);
    a3 = color(210,185,164); b3 = color(190,140,120);
    a4 = color(180,150,140); b4 = color(140,145,145);
    a5 = color(128,162,183); b5 = color(30,45,60);
    for(var i = 0; i < 50; i++){
        rocks[i] = new Rock()
    }
    noLoop();
    cnv.parent('art');
}
  
function draw() {
    setGradient(0, 0, width,  50, a1, b1);
    setGradient(0, 51, width,  50, a2, b2);
    setGradient(0, 102, width,  50, a3, b3);
    setGradient(0, 153, width,  50, a4, b4);
    setGradient(0, 204, width, 100 ,a5, b5);

   
    for(var i = 0; i < 50; i++){
      let size = random(50);
      let xPos = random(10,500);
      let yPos = random(210,300);
      let diam = random(10);

      rocks[i].render(xPos,yPos,size,size,diam);
    }
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
    constructor(id){
        this.id = id;

        this.r = 220
        this.g = 220
        this.b = 220
        this.rOutline = 176;
        this.gOutline = 163;
        this.bOutline =  160;

    }

    render(xPos, yPos, width, height, diam){
        fill(this.r, this.g, this.b, this.g);
        stroke(this.rOutline, this.gOutline, this.bOutline)
        rect(xPos, yPos, width, height, diam);
    }

}