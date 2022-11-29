const MovingObject = require("./moving_object.js");
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

window.MovingObject = MovingObject;
console.log("Webpack is working!");