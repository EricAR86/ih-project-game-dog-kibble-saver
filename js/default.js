
// Archivo de variables
console.log("hola default")

// Crear contexto del canvas
// Traer el canvas por Id
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

let frames = 0;

// Enemies

let enemies = [];

let requestId;

// Agregar Audio
const audio = new Audio();
audio.src = "";
audio.loop = true

// Valores por defecto de la nave

//let shipDefault = {
//    lifes: 3,
//}