const MovingObject = require("./moving_object.js");
const Asteroid = require('./asteroid.js');

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });
    mo.draw(ctx);
    const aster = new Asteroid({pos: [50,50]});
    aster.draw(ctx);

    window.MovingObject = MovingObject;
    window.ctx = ctx;
    window.Asteroid = Asteroid;
    


});

console.log("Webpack is working!");