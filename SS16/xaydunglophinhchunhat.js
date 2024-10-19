class hcn{
    width;
    length;
    constructor(width, length){
        this.width= width;
        this.length= length;
    }
    perimeter(){
        return (this.width+this.length)*2;
    }
    area(){
        return this.width*this.length;
    }
    draw(){
        const canvas= document.getElementById("myCanvas");
        const ctx= canvas.getContext("2d");

        ctx.beginPath();
        ctx.lineWidth= "6";
        ctx.strokeStyle= "red";
        ctx.rect(20, 20, this.length, this.width);
        ctx.stroke();
    }
}

let Rectangle= new hcn(300, 500);
Rectangle.draw();