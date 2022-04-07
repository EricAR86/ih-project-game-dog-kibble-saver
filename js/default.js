
// Archivo de variables por default
// console.log("hola default")

// Crear contexto del canvas
// Traer el canvas por Id
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

let frames = 0;

// Arreglo donde se van a guardar los enemigos
let enemies = [];

// Arreglo para guardar los misiles de la nave
let shipMissiles = [];

let requestId;

// Agregar Audio
const audio = new Audio();
audio.src = "./audio/audiogame.mp3";
// Para hacer el loop infinito
audio.loop = true

// Valores por defecto de la nave

//let shipDefault = {
//    lifes: 3,
//}