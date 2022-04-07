
// Construir background
//console.log("hola classes")
class Background {
    constructor(width, height){
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.backImg = new Image();
        this.backImg.src = "./images/background.png"
        //this.gameOverImg = new Image();
        //this.gameOverImg.scr ="./images/gameover.png"
    }

    // Metodos, lo que va a hacer/acciones
    
    drawBack(){
        // Dibujar background en canvas
        ctx.drawImage(this.backImg, this.x, this.y, this.width, this.height)
        
        // Dibujar un segundo background pero que se ponga arriba del primero
        ctx.drawImage(
            this.backImg,
            this.x,
            this.y - this.height,
            this.width,
            this.height
        )
        
        // Movimiento del background hacia arriba
        // Este if hace que si el background en su eje Y ya es mayor al valor de la altura del canvas, se vuelva a dibujar y ahcer un loop infinito
        if (this.y > canvas.height){
            this.y = 0
        }
        // Velocidad con la que baja el background
        this.y ++;

    }
}

    

// Construir para crear la nave

class Ship{
    constructor (x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.shipImg = new Image()
        this.shipImg.src = "./images/ship.png"
        this.speedX = 0
    }

    // Método para dibujar la nave
    drawShip(){
        // Se dibuja la nave tomando los valores del constructor cuando se crea la variable ship
        ctx.drawImage(
            this.shipImg, 
            this.x, 
            this.y, 
            this.width, 
            this.height
        )

        // Se definen los límites de la nave dentro del area de juego para que no se salga/desaparezca
        
        // Límite lado izquierdo
        if(this.x <= 0){
            this.x = 0
        }
        
        // Limite lado derecho
        if(this.x >= canvas.width - this.width){
            this.x = canvas.width - this.width
        }
    }

     // Metodo o funcion que nos evalua la colision de la nave contra el enemigo
    // recibe un parametro que es el enemigo (item)
    collision(item) {
        // Este return nos regresa un true o false
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }

    newPosition() {
        this.x += this.speedX
    }

}

// Construir los enemigos

class Enemy {
    constructor (x, y, width, height){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.enemyImg = new Image()
    this.enemyImg.src = "./images/enemy.png"
    }

    drawEnemy() {

        // Velocidad con la que se moverá el enemigo cada 10 frames
        if(frames % 2 === 0){
            this.y += 3;
        }
        
        ctx.drawImage(
            this.enemyImg,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}

// Constructor de los misiles de la nave
class Shipmissil extends Ship {
    constructor(x, y){
        super(x, y, 30, 30)
        this.shipMissImg = new Image()
        this.shipMissImg.scr = "./images/shipmissile.png"
    }

    // Metodo para dibujar la imagen del misil de la nave
    drawShipMissil() {
        console.log("se dibuja bala?")
        
        // El misil avanza 2 pixeles de abajo hacia arriba
        this.y =- 2
        ctx.drawImage(
            this.shipMissImg,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}

// Hacer imagen de game over
class GameOver {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.goImg = new Image();
        this.goImg.scr ="https://imagizer.imageshack.com/img923/4189/KiFLNY.png"
    }

    // Método para dibujar la imagen de Game Over cuando perdamos
    drawGameOver(){
        console.log("se imprime el Game Over?")
        ctx.drawImage(
            this.goImg,
            this.x,
            this.y, 
            this.width,
            this.height
            )
    }
}
