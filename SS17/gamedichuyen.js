class Hero {
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }

    getHeroElement() {
        return `
      <img 
        width="${this.size}" 
        height="${this.size}" 
        src="${this.image}" 
        style="top: ${this.top}px; left: ${this.left}px; position: absolute;" 
      />
    `;
    }

    moveRight() {
        if(this.left<window.innerWidth- this.size) {
            this.left += 20;
            console.log('move right: ' + this.left);
        }
    }

    moveLeft(){
        if(this.left>0) {
            this.left -= 20;
            console.log("move left: " + this.left);
        }
    }

    moveUp(){
        if(this.top>0){
            this.top -=20;
            console.log("move up: "+ this.top);
        }
    }

    moveDown(){
        if(this.top< window.innerHeight - this.size){
            this.top += 20;
            console.log("move down: "+ this.top);
        }
    }
}

function start() {
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100);
}

const hero = new Hero('pikachu.png', 20, 30, 200);
start();
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case'ArrowRight':
            hero.moveRight();
            break;
        case"ArrowLeft":
            hero.moveLeft();
            break;
        case"ArrowDown":
            hero.moveDown();
            break;
        case"ArrowUp":
            hero.moveUp();
            break;
    }
});

