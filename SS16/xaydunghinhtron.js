class Circle{
    radius;
    constructor(radius){
        this.radius= radius;
    }
    area(){
    return Math.PI * this.radius * this.radius;
    }
}

let Circle1= new Circle(2);
console.log(Circle1);
console.log(Circle1.area());