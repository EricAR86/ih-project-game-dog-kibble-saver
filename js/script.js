
console.log("hola script")
window.onload = function () {
    

    // invocar al background usando el Constructor (clase)
    //                         Para que ocupe todo lo que mida el canvas (ancho y alto)
    const backGround = new Background (canvas.width, canvas.height)
    const ship = new Ship (330, 430, 50, 50)
    const enemy = new Enemy(50, 10, 50, 50)

    document.getElementById("start-button").onclick = function () {
        startGame();
    };

    // Funcion para iniciar el juego cuando le demos en botón Start Game
    function startGame() {
        updateGame()

    };

    function gameOver() {};

    // Este es el motor del juego 
    function updateGame() {
        console.log("motor funcionando...")

        // Metodo que hace que se esté borrando el canvas (toda la zona del juego) para actualizarse
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // invocacion del background para que se dibuje constantemente
        backGround.drawBack()
        
        // Actualizar la posicion de la nave cuando se mueve
        ship.newPosition()

        // Invocacion para dibujar la nave
        ship.drawShip()

        // Invocacion para agregar un enemigo
        enemy.drawEnemy()


        // Cuando se ejecute, ejecuta otra vez updateGame
        requestAnimationFrame(updateGame)
    }

    // Genera y dibuja enemigos en el canvas

    // Para generalos
    function generateEnemies() {

    }

    // Para dibujarlos
    function drawEnemies() {

    }

    addEventListener("keydown", (evento) =>{
        switch (evento.key) {
            case "ArrowRight" :
                ship.speedX +=1
                break;
                case "ArrowLeft":
                ship.speedX -=1
                break;
            default:
                break; 
        }
    })
    
    document.addEventListener("keyup",(evento)=>{
        ship.speedX = 0
      })
}