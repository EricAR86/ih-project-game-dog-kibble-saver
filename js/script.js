
console.log("hola script")
window.onload = function () {
    

    // Crear variable para el background usando el Constructor (clase)
    //                         Para que ocupe todo lo que mida el canvas (ancho y alto)
    const backGround = new Background (canvas.width, canvas.height)
    // Crear variable para crear a la nave
    const ship = new Ship (330, 430, 50, 50)
    // Ejemplo crear variable para 1 enemigo
    //const enemy = new Enemy(50, 10, 50, 50)

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

        // Los frames nos permite declarar que algo pase a determinados frames, se suman en valor de 1
        frames ++

        // Metodo que hace que se esté borrando el canvas (toda la zona del juego) para actualizarse
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // invocacion del background para que se dibuje constantemente
        backGround.drawBack()
        
        // Actualizar la posicion de la nave cuando se mueve
        ship.newPosition()

        // Invocacion para dibujar la nave
        ship.drawShip()

        // Invocamos funcion para generar enemigos
        generateEnemies()

        // Invocamos funcion para pintar/dibujar enemigos
        drawEnemies()


        // Ejemplo Invocacion para agregar un enemigo
        //enemy.drawEnemy()


        // Cuando se ejecute, ejecuta otra vez updateGame
        requestAnimationFrame(updateGame)
    }

    // Genera y dibuja enemigos en el canvas

    // Generar enemigos
    function generateEnemies() {
        
        // Limitar frames para que no se generen muchos a la vez
        
        // Si el frame es divisble entre 100 entonces crea un numero al azar para eje X y crea la variable para generar enemigo
        if( (frames % 100 === 0 ) ) {
            
            // Se crea variable al azar y se guarda como el eje x
            let x = Math.floor(Math.random() * (700 - 50) + 50)
            
            // Se crea el enemigo usando el Constructor
            const enemy = new Enemy(x, 10, 60, 50)

            // Se guarda el enemigo en la array de enemies[]
            enemies.push(enemy)
        }
    }

    // Dibujar enemigos
    function drawEnemies() {
        // Usamos forEach para iterar en arreglo de enemigos (enemies[]) dibujarlos
        enemies.forEach((enemy, index_enemy) => {
            enemy.drawEnemy()

            // colision contra nave
            // colision contra bala de nave

        })
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