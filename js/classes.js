
// Construir background
console.log("hola classes")
class Background {
    constructor(width, height){
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.backImg = new Image();
        this.backImg.src = "./images/background.png"
        this.gameOverImg = new Image();
        this.gameOverImg.scr ="./image/gameover.png"
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
        this.y ++;

    }

    gameOver(){
        ctx.drawImage(
            this.gameOverImg, 
            300,
            140,
            400,
            400
            )
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

    drawShip(){
        ctx.drawImage(this.shipImg, this.x, this.y, this.width, this.height)
    }

    newPosition() {
        this.x += this.speedX
    }
}

// Construir los enemigos