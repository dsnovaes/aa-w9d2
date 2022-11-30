const MovingObject = require("./moving_object.js");
const Asteroid = require('./asteroid.js');
const Util = require("./util.js");

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 25,
        color: "#00FF00"
    });
    const mo2 = new MovingObject({
        pos: [100, 70],
        vel: [20, 20],
        radius: 25,
        color: "#FF9900"
    });
    mo.draw(ctx);
    mo2.draw(ctx);
    window.ctx = ctx;
    window.mo2 = mo2;
    window.Asteroid = Asteroid;
    window.MovingObject = MovingObject;
    
    // const aster = new Asteroid({pos: [50,50]});
    // aster.draw(ctx);

    
    


});

// console.log("Webpack is working!");