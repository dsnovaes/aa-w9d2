/*

Base class for anything that moves.
Most important methods are 
MovingObject.prototype.move, 
MovingObject.prototype.draw(ctx), 
and MovingObject.prototype.isCollidedWith(otherMovingObject).

*/

class MovingObject {
    constructor(object) {
        this.pos = object.pos;
        this.vel = object.vel;
        this.radius = object.radius;
        this.color = object.color;
    };

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(100,100,20,0,2*Math.PI, true);
    }
};


module.exports = MovingObject;