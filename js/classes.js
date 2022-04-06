
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

    // Método para dibujar la nave
    drawShip(){
        // Se dibuja la nave tomando los valores del constructor cuando se crea la variable ship
        ctx.drawImage(this.shipImg, this.x, this.y, this.width, this.height)

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

    newPosition() {
        this.x += this.speedX
    }
}

// Construir los enemigos

class Enemy extends Ship {
    constructor (x, y, width, height){
    super(x, y, width, height)
    this.enemyImg = new Image()
    this.enemyImg.src = "./images/enemy.png"
    }

    drawEnemy() {
        this.x += 2;
        
        ctx.drawImage(
            this.enemyImg,
            this.x,
            this.y,
            this.width,
            this.height
        )
        
        // if (this.x = canvas.width - this.width){
        //     this.x -= 2
        // }
        
    }
}