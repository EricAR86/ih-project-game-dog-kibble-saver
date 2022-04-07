
//console.log("hola script")
window.onload = function () {
    

    // Crear variable para el background usando el Constructor (clase)
    //                         Para que ocupe todo lo que mida el canvas (ancho y alto)
    const backGround = new Background (canvas.width, canvas.height)
    // Crear variable para crear a la nave
    const ship = new Ship (330, 430, 50, 50)
    
    // Crear variable para imagen Game Over
    //const gameOverImg = new GameOver (400, 400, 100, 100)

    document.getElementById("start-button").onclick = function () {
        if(!requestId){
        startGame();
        }
    };

    // Funcion para iniciar el juego cuando le demos en botón Start Game
    function startGame() {
       

        // final
        audio.play()
        requestId = requestAnimationFrame(updateGame)
        
    }

    function gameOver() {
        console.log("Es Game Over")
        audio.pause()
        //gameOverImg.drawGameOver()
        backGround.gameOver()
        requestId = undefined
    };

    // Este es el motor del juego
    function updateGame() {
        //console.log("motor funcionando...")

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

        if(requestId){
            requestAnimationFrame(updateGame)
        }

        // Invocamos funcion para generar enemigos
        generateEnemies()

        // Invocamos funcion para pintar/dibujar enemigos
        drawEnemies()
        
        //if(ship.y + ship.height > canvas.height) {
        //    gameOver()
        //}

        // if(requestId) {
        //     requestAnimationFrame(updateGame)
        // }

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

            // colision de un enemigo contra una nave es Game Over
            if(ship.collision(enemy)){
                gameOver()
            }
            
            // If para hacer que sea game over si un enemigo llega hasta el fondo
            // Si el valor del eje Y + la altura del enemigo es mayor a la altura del canvas/area de juego es game over
            if (enemy.y + enemy.height > canvas.height){
                gameOver()
            }
            // colision contra bala de nave y se dibuje la bala
            shipMissiles.forEach((shipMissil, index_missil) => {
                // Dibuja el misil de la nave
                shipMissil.drawShipMissil()

                // Si el misil de la nave colisiona contra el enemigo..
                if(shipMissil.collision(enemy)){
                    // Elimina el enemigo del arreglo de enemigos
                    enemies.splice(index_enemy, 1)
                    // Elimina la bala del arreglo de balas
                    shipMissiles.pop()

                }
            })
        })
    }

    // Function para generar las balas
    function generateShipMissil() {
        const shipMissil = new Shipmissil (ship.x + (ship.width/3), ship.y)
        
        // Si el arreglo shipMissil[] esta vacio le agrega un misil
        if(!shipMissiles.length){
            shipMissiles.push(shipMissil)
        }
    }

    
    // Evento que sirven para manejar la nave
    addEventListener("keydown", (evento) =>{
        switch (evento.key) {
            case "ArrowRight" :
                ship.speedX +=1
            break;
            case "ArrowLeft":
                ship.speedX -=1
            break;
            case " " :
                generateShipMissil()
            break;
            default:
            break; 
        }
    })
    // Evento para hacer que la nave se detenga cuando soltamos una tecla
    document.addEventListener("keyup",(evento)=>{
        ship.speedX = 0
      })
}